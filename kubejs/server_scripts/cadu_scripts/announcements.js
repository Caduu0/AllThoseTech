let $TreeMap = Java.loadClass("java.util.TreeMap")
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Type} */
let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
/** @type {import("java.util.TreeMap").$TreeMap$$Type<(import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original), (import("java.util.List").$List$$Type<(import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original) >) >} */
let announcements = new $TreeMap()
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original} */
let currentVersion = null

// Traduções:
// kubejs/assets/lang/en_us.json
// kubejs/assets/lang/pt_br.json
// kubejs/assets/lang/es_es.json

function initAnnouncements() {
  addAnnouncement("0.0.1", Text.translatable("announcements.version"))
}

ServerEvents.loaded((event) => {
  if (!Platform.isLoaded("bcc")) return
  announcements.clear()
  /** @type {import("dev.wuffs.bcc.BetterCompatibilityChecker").$BetterCompatibilityChecker$$Original} */
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
  initAnnouncements()
})

function addAnnouncement(
  /** @type {string} */ version,
  /** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component
) {
  announcements
    .computeIfAbsent(new $DefaultArtifactVersion(version), (key) => Utils.newList())
    .addLast(typeof component == "string" ? Text.of(component) : component)
}

PlayerEvents.loggedIn((event) => {
  if (currentVersion == null) return
  
  let currentDismissedStr = event.player.persistentData.getString("LastDismissedAnnouncementVersion")
  let currentDismissed
  
  if (currentDismissedStr == null || currentDismissedStr === "") {
    currentDismissed = new $DefaultArtifactVersion("0.0.0")
  } else {
    currentDismissed = new $DefaultArtifactVersion(currentDismissedStr)
  }

  if (currentDismissed.compareTo(currentVersion) >= 0) return
  let pendingAnnouncements = announcements.subMap(currentDismissed, false, currentVersion, true)

  if (!pendingAnnouncements.isEmpty()) {
    event.player.tell(
      Text.translatable("=====[  %s  ]=====", Text.cyan("All Those Tech").bold()).gold().bold()
    )
    pendingAnnouncements.forEach((key, listComponents) => {
      for (let component of listComponents) {
        let message = Text.translatable("[%s] - %s", Text.gold(key.toString()), component.cyan()).cyan()
        event.player.tell(message)
      }
    })
    // Botão clicável que executa o comando para dispensar
    let message = Text.translatable("announcements.dismiss_up_to_version", Text.blue(currentVersion.toString()))
      .green()
      .hover(Text.translatable("announcements.click_here"))
      .clickRunCommand("/dismiss_announcements")
    event.player.tell(message)
  }
})

ServerEvents.basicPublicCommand("dismiss_announcements", (event) => {
  let player = event.player

  if (player == null || !player.isPlayer()) {
    event.cancel("Player was not found or command was executed by console!")
    return
  } 
  
  let pData = player.getPersistentData()
  if (event.input == "clear") {
    pData.putString("LastDismissedAnnouncementVersion", "0.0.0")
    event.respond(Text.cyan("Cleared dismissed version!"))
  } else {
    if (currentVersion == null) {
      event.cancel("Current version of the modpack is null, is BetterCompatibilityCheck installed?")
    } else {
      pData.putString("LastDismissedAnnouncementVersion", currentVersion.toString())
      event.respond(
        Text.translatable("announcements.dismissed_up_to_version", currentVersion.toString()).cyan()
      )
    }
  }
})