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
})