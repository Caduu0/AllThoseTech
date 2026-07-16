let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
let $Locale = Java.loadClass("java.util.Locale")
const MODPACK_ID = "1148445"

StartupEvents.postInit((event) => {
  if (!Platform.isLoaded("bcc") || !Platform.isLoaded("kubejstweaks") || !Platform.isClientEnvironment()) return
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  let currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())

  KJSTweaks.curseForgeGetEndpoint("v1/mods/" + MODPACK_ID + "/files?pageSize=1", Client, (response) => {
    try {
      let data = response.get("data").get(0)
      let displayName = data.get("displayName").getAsString()
      let cfLatestVersionStr = displayName.toLowerCase($Locale.ROOT)
        .replace("all those tech-", "")
        .replace(".zip", "")
        .trim()
      let cfLatestVersion = new $DefaultArtifactVersion(cfLatestVersionStr)

      if (cfLatestVersion.compareTo(currentVersion) > 0) {
        let $SystemToast = Java.loadClass("net.minecraft.client.gui.components.toasts.SystemToast")
        let $SystemToastId = Java.loadClass("net.minecraft.client.gui.components.toasts.SystemToast$SystemToastId")
        
        $SystemToast.add(
          Client.getToasts(),
          new $SystemToastId(10000),
          Text.translatable("announcements.update_title"),
          Text.translatable("announcements.update_body", Text.green(cfLatestVersion.toString()))
        )
      } else {
        console.info("Pack is up to date!")
      }
    } catch (e) {
      console.error("Failed to check for updates: " + e)
    }
  })
})