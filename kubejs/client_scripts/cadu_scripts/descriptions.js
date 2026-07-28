// Descrição nos itens.
// Cores: https://minecraft.fandom.com/wiki/Formatting_codes
ItemEvents.modifyTooltips(event => {
    // Magical Soil
    event.add("kubejs:magical_soil", [
        Text.of("§cBe careful not to confuse it with just plain soil."),
        Text.of("§dUse Magical Soil to grow magic seeds.")
    ])
    // Baccon
    event.add("allthosetweaks:baccon", [
        Text.of("§4§lWaiting for more mods for your crafting."),
        Text.of("§5§oWhile you wait, how about creating the most awesome farms so you're ready when the time comes?")
    ])
    // Wireless Crafting Terminal (AE2)
    event.add("ae2:wireless_crafting_terminal", [
        Text.of("§4Curios disabled to avoid bugs."),
        // Text.of("§4§lBe Careful!"),
        // Text.of("§4When placed in the Curios, the items from the crafting terminal disappear...")
    ])
    // Time Wand
    event.add("justdirethings:time_wand", [
        Text.of("§4Use blocked on clickers (Fake Players).")
    ])
    // Advanced Time Wand
    event.add("justdynathings:advanced_time_wand", [
        Text.of("§4Use blocked on clickers (Fake Players).")
    ])
    // Time in a Bottle
    event.add("tiab:time_in_a_bottle", [
        Text.of("§4Use blocked on clickers (Fake Players).")
    ])
})