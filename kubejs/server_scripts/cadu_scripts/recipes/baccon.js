// -= Mechanical Crafter (Create). =- (Baccon)
if (Platform.isLoaded("create")) {
  ServerEvents.recipes(event => {
     event.custom({
        type: 'create:mechanical_crafting',
        pattern: [
            '   V   ',
            '  LZL  ',
            ' LNEML ',
            'VXSCRWV',
            ' LMTNL ',
            '  LOL  ',
            '   V   '
        ],
        key: {
            C: { item: 'allthosetweaks:crochet_needle' },
            E: { item: 'allthosetweaks:piggy_ears' },
            S: { item: 'allthosetweaks:piggy_snout' },
            R: { item: 'allthosetweaks:piggy_tail' },
            T: { item: 'allthosetweaks:piggy_trotters' },
            N: { item: 'mysticalagradditions:nitro_crystal_crux' },
            Z: { item: 'allthemodium:unobtainium_allthemodium_block' },
            X: { item: 'allthemodium:unobtainium_vibranium_block' },
            W: { item: 'allthemodium:vibranium_allthemodium_block' },
            L: { item: 'minecraft:pink_wool' },
            V: { item: 'minecraft:lily_of_the_valley' },
            O: { item: 'productivelib:upgrade_productivity_4' },
            M: { item: 'mysticalagradditions:nether_star_crux' }
        },
        result: {
            id: 'allthosetweaks:baccon',
            count: 1
        }
    })
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
        G: 'allthosetweaks:comingsoon',
        H: 'allthosetweaks:comingsoon',
        I: 'allthosetweaks:comingsoon'
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