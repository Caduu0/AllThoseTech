// -= Ultimate Table (Extended Crafting). =- (Baccon)
if (Platform.isLoaded("extendedcrafting")) {
  ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table(
        "allthosetweaks:baccon",
        [
            "AAAAAAAAA",
            "ABBBVBBBA",
            "ABDLULDBA",
            "ABLNEMLBA",
            "AVUSCRUVA",
            "ABLMTNLBA",
            "ABDLULDBA",
            "ABBBVBBBA",
            "AAAAAAAAA"
        ],
        {
            C: "allthosetweaks:crochet_needle",
            E: "allthosetweaks:piggy_ears",
            S: "allthosetweaks:piggy_snout",
            R: "allthosetweaks:piggy_tail",
            T: "allthosetweaks:piggy_trotters",
            N: "mysticalagradditions:nitro_crystal_crux",
            L: "minecraft:pink_wool",
            V: "minecraft:lily_of_the_valley",
            M: "mysticalagradditions:nether_star_crux",
            U: "extendedcrafting:ultimate_singularity",
            A: "allthemodium:vibranium_allthemodium_block",
            B: "allthemodium:unobtainium_allthemodium_block",
            D: "allthemodium:unobtainium_vibranium_block"
        }
    )
  })
}

// -= Crafting Table (Minecraft). =- (Piggy's)
ServerEvents.recipes(event => {
    // Piggy Ears
    event.shaped('allthosetweaks:piggy_ears', ['ABC', 'DEF', 'GHI'],
      {
        A: 'aeinfinitybooster:dimension_card',
        B: 'logisticsnetworks:dimensional_upgrade',
        C: 'capacitoradditions:unobtainium_capacitor',
        D: 'mysticalagriculture:awakened_supremium_upgrade',
        E: 'allthemodium:alloy_mace',
        F: 'productivebees:inactive_dragon_egg',
        G: 'kubejs:magical_soil',
        H: 'extradisks:infinite_item_storage_part',
        I: 'apothic_enchanting:infused_breath'
      }
    )
    // Piggy Snout
    event.shaped('allthosetweaks:piggy_snout', ['ABC',  'DEF',  'GHI'],
      {
        A: 'energizedpower:solar_panel_7',
        B: 'ironfurnaces:million_furnace',
        C: 'apothic_enchanting:occult_ender_lead',
        D: 'explorerscompass:explorerscompass',
        E: 'minecraft:dragon_egg',
        F: 'aether_ii:golden_amber_block',
        G: 'productivelib:upgrade_productivity_4',
        H: 'extendedcrafting:the_ultimate_block',
        I: 'transmog:transmogrification_table'
      }
    )
    // Piggy Tail
    event.shaped('allthosetweaks:piggy_tail', ['ABC',  'DEF',  'GHI'],
      {
        A: 'allthosetweaks:comingsoon',
        B: 'allthosetweaks:comingsoon',
        C: 'allthosetweaks:comingsoon',
        D: 'allthosetweaks:comingsoon',
        E: 'allthosetweaks:comingsoon',
        F: 'allthosetweaks:comingsoon',
        G: 'allthosetweaks:comingsoon',
        H: 'allthosetweaks:comingsoon',
        I: 'allthosetweaks:comingsoon'
      }
    )
    // Piggy Trotters
    event.shaped('allthosetweaks:piggy_trotters', ['ABC',  'DEF',  'GHI'],
      {
        A: 'allthosetweaks:comingsoon',
        B: 'allthosetweaks:comingsoon',
        C: 'allthosetweaks:comingsoon',
        D: 'allthosetweaks:comingsoon',
        E: 'allthosetweaks:comingsoon',
        F: 'allthosetweaks:comingsoon',
        G: 'allthosetweaks:comingsoon',
        H: 'allthosetweaks:comingsoon',
        I: 'allthosetweaks:comingsoon'
      }
    )
})