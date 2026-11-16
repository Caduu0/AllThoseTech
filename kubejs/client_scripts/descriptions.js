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
    // Wireless Universal Terminal (AE2)
    event.add("ae2wtlib:wireless_universal_terminal", [
        Text.of("§4Doesn't open on curious."),
    ])
    // Time Wand (Just Dire Things)
    event.add("justdirethings:time_wand", [
        Text.of("§4Use blocked on clickers (Fake Players).")
    ])
    // Advanced Time Wand (Just Dyna Things)
    event.add("justdynathings:advanced_time_wand", [
        Text.of("§4Use blocked on clickers (Fake Players).")
    ])
    // Time in a Bottle (Tiab)
    event.add("tiab:time_in_a_bottle", [
        Text.of("§4Use blocked on clickers (Fake Players).")
    ])
    // Ender Dust (AE2)
    event.add("ae2:ender_dust", [
        Text.of("§4Replaced by Powdered Ender Pearl.")
    ])
    // // Mekanism P1r4t3k5
    // event.add('@allthemodium', [
    // Text.of("§6Descrição para todos os itens do mod.")
    // ])
})
// Descrição em TODOS os itens do mod.
ItemEvents.modifyTooltips(event => {
    // Mekanism e seus addons
    const mekanismMods = [
        'mekanism',
        'mekanism_extras',
        'mekmm',
        'mekanismgenerators',
        'mekanismtools',
        'mekanismadditions'
    ]

    const description = [
        Text.of("§4§lWARNING:"),
        Text.of("§4This mod is not in its original version! It may be removed at any time without prior notice.")
    ]

    mekanismMods.forEach(mod => {
        event.add(new RegExp(`^${mod}:`), description)
    })

})