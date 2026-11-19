// Avisa os jogadores no chat quando existe uma versao nova do modpack.
// Fonte: version.json na raiz do repositorio GitHub (branch main).
// Para lançar uma atualizacao: edite "version" e "changelog" nesse arquivo e de push.

const UPDATE_URL = "https://raw.githubusercontent.com/Caduu0/AllThoseTech/main/version.json"
const CHECK_EVERY_TICKS = 20 * 60 * 30 // checa a cada 30 minutos

const DEFAULT_MESSAGE = "Mantenha o modpack sempre atualizado: cada versao traz correcoes de bugs, melhorias de desempenho e conteudo novo, e ajuda a evitar crashes e incompatibilidades com o servidor."

let $Version =Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
// classes de rede carregadas sob demanda: se o KubeJS bloquear alguma,
// o script continua carregando (e o /checkupdate existe) e o motivo vai pro log
let $HttpClient, $HttpRequest, $BodyHandlers, $URI, $Duration
let netReady = false
function loadNet() {
  if (netReady) return true
  try {
    $HttpClient = Java.loadClass("java.net.http.HttpClient")
    $HttpRequest = Java.loadClass("java.net.http.HttpRequest")
    $BodyHandlers = Java.loadClass("java.net.http.HttpResponse$BodyHandlers")
    $URI = Java.loadClass("java.net.URI")
    $Duration = Java.loadClass("java.time.Duration")
    netReady = true
  } catch (e) {
    console.error("[UpdateNotifier] classe de rede bloqueada/indisponivel: " + e)
  }
  return netReady
}

let packVersion = null     // versao instalada (vem do Better Compatibility Checker)
let pendingRequest = null  // requisicao HTTP em andamento
let updateInfo = null      // dados do version.json se houver versao mais nova
let lastBroadcast = ""     // ultima versao ja anunciada para todos
let tickCounter = 0

function startCheck() {
  if (pendingRequest != null || packVersion == null) return
  if (!loadNet()) return
  try {
    let client = $HttpClient.newBuilder().connectTimeout($Duration.ofSeconds(10)).build()
    let request = $HttpRequest.newBuilder()
      .uri($URI.create(UPDATE_URL))
      .timeout($Duration.ofSeconds(10))
      .header("User-Agent", "AllThoseTech-UpdateNotifier")
      .GET()
      .build()
    // assincrono: nao trava o servidor
    pendingRequest = client.sendAsync(request, $BodyHandlers.ofString())
  } catch (e) {
    console.error("[UpdateNotifier] falha ao iniciar a checagem: " + e)
  }
}

function finishCheck(server) {
  let future = pendingRequest
  pendingRequest = null
  try {
    let response = future.get()
    if (response.statusCode() != 200) {
      console.warn("[UpdateNotifier] HTTP " + response.statusCode())
      return
    }
    let data = JSON.parse(String(response.body()))
    let latest = new $Version(String(data.version))

    if (latest.compareTo(packVersion) <= 0) {
      updateInfo = null
      return
    }
    updateInfo = data
    if (lastBroadcast !== String(data.version)) {
      lastBroadcast = String(data.version)
      server.players.forEach((p) => sendUpdateMessage(p))
    }
  } catch (e) {
    console.error("[UpdateNotifier] falha ao ler version.json: " + e)
  }
}

function sendUpdateMessage(player) {
  if (updateInfo == null) return
  player.tell(Text.gold("=====[  All Those Tech  ]=====").bold())
  player.tell(Text.aqua("Uma nova versao esta disponivel: ").append(Text.green(String(updateInfo.version)).bold()))
  player.tell(Text.gray("Voce esta jogando na versao " + packVersion.toString() + "."))

  // "message" no version.json substitui a mensagem padrao
  let custom = updateInfo.message ? String(updateInfo.message).trim() : ""
  player.tell(Text.yellow(custom !== "" ? custom : DEFAULT_MESSAGE))

  // "showChangelog": false esconde a lista de mudancas
  if (updateInfo.showChangelog !== false && updateInfo.changelog && updateInfo.changelog.length > 0) {
    player.tell(Text.gold("O que mudou:").bold())
    updateInfo.changelog.forEach((line) => player.tell(Text.gray(" - ").append(Text.white(String(line)))))
  }
  if (updateInfo.url) {
    player.tell(Text.green("[ Clique aqui para baixar ]").bold().clickOpenUrl(String(updateInfo.url)))
  }
}

ServerEvents.loaded((event) => {
  if (!Platform.isLoaded("bcc")) return
  let $Bcc = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  packVersion = new $Version($Bcc.betterStatus.version())
  startCheck()
})

ServerEvents.tick((event) => {
  if (packVersion == null) return
  if (pendingRequest != null && pendingRequest.isDone()) {
    finishCheck(event.server)
    return
  }
  tickCounter++
  if (tickCounter >= CHECK_EVERY_TICKS) {
    tickCounter = 0
    startCheck()
  }
})

// quem entra depois do anuncio tambem recebe o aviso
PlayerEvents.loggedIn((event) => {
  if (updateInfo != null) sendUpdateMessage(event.player)
})

// /checkupdate: forca uma checagem agora
ServerEvents.basicPublicCommand("checkupdate", (event) => {
  lastBroadcast = ""
  if (packVersion == null) {
    event.respond(Text.red("Versao do modpack desconhecida (Better Compatibility Checker carregou?)."))
    return
  }
  startCheck()
  if (!netReady) {
    event.respond(Text.red("Rede indisponivel no KubeJS, veja o log do servidor ([UpdateNotifier])."))
    return
  }
  event.respond(Text.aqua("Checando atualizacoes... o resultado aparece no chat em instantes."))
})