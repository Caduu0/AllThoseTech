/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Type} */
let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")

/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original} */
let currentVersion = null

ServerEvents.loaded((event) => {
  if (!Platform.isLoaded("bcc")) return
  
  /** @type {import("dev.wuffs.bcc.BetterCompatibilityChecker").$BetterCompatibilityChecker$$Original} */
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
})

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
  event.player.tell(
    Text.translatable("=====[  %s  ]=====", Text.cyan("All Those Tech").bold()).gold().bold()
  )
  
  let message = Text.translatable("announcements.version", Text.gold(currentVersion.toString())).cyan()
  event.player.tell(message)

  let dismissBtn = Text.translatable("announcements.dismiss_up_to_version", Text.blue(currentVersion.toString()))
    .green()
    .hover(Text.translatable("announcements.click_here"))
    .clickRunCommand("/dismiss_announcements")
  event.player.tell(dismissBtn)
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