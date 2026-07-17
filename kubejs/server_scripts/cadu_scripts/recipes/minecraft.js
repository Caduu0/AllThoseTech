// -= Crafting Table (Minecraft). =-
ServerEvents.recipes(event => {
// --------------------- Baubley Heart ---------------------  //
    // Canister
    event.remove({ output: 'bhc:canister' })
    event.shaped(
      'bhc:canister',
      [
        ' A ',
        'ABA',
        ' A '
      ],
      {
        A: 'minecraft:iron_block',
        B: '#c:bones'
      }
    )

// --------------------- Iron Furnaces ---------------------  //
    // Rainbow Plating
    event.remove({ output: 'ironfurnaces:rainbow_plating' })
    event.shaped(
      'ironfurnaces:rainbow_plating',
      [
        'FGD',
        'EOV',
        'CS '
      ],
      {
        F: 'ironfurnaces:iron_furnace',
        G: 'ironfurnaces:gold_furnace',
        D: 'ironfurnaces:diamond_furnace',
        E: 'ironfurnaces:emerald_furnace',
        O: 'ironfurnaces:obsidian_furnace',
        V: 'ironfurnaces:crystal_furnace',
        C: 'ironfurnaces:copper_furnace',
        S: 'ironfurnaces:silver_furnace'
      }
    )

// --------------------- Cobblegen Galore ---------------------   //
    // Stone Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_stone' })
    event.shaped(
      'cobblegengalore:block_gen_stone',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:stone',
        G: 'minecraft:glass',
        C: 'strainers:lava_drop'
      }
    )
    // Copper Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_copper' })
    event.shaped(
      'cobblegengalore:block_gen_copper',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:copper_block',
        G: 'minecraft:glass',
        C: 'cobblegengalore:block_gen_stone'
      }
    )
    // Iron Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_iron' })
    event.shaped(
      'cobblegengalore:block_gen_iron',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:iron_block',
        G: 'minecraft:glass',
        C: 'cobblegengalore:block_gen_copper'
      }
    )
    // Gold Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_gold' })
    event.shaped(
      'cobblegengalore:block_gen_gold',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:gold_block',
        G: 'minecraft:glass',
        C: 'cobblegengalore:block_gen_iron'
      }
    )
    // Emerald Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_emerald' })
    event.shaped(
      'cobblegengalore:block_gen_emerald',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:emerald_block',
        G: 'minecraft:glass',
        C: 'cobblegengalore:block_gen_gold'
      }
    )
    // Diamond Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_diamond' })
    event.shaped(
      'cobblegengalore:block_gen_diamond',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:diamond_block',
        G: 'minecraft:glass',
        C: 'cobblegengalore:block_gen_emerald'
      }
    )
    // Netherite Block Generator
    event.remove({ output: 'cobblegengalore:block_gen_netherite' })
    event.shaped(
      'cobblegengalore:block_gen_netherite',
      [
        'AAA',
        'GCG',
        'AAA'
      ],
      {
        A: 'minecraft:netherite_block',
        G: 'minecraft:glass',
        C: 'cobblegengalore:block_gen_diamond'
      }
    )

// --------------------- Modular Routers --------------------- //
    // Modular Router
      event.remove({ output: 'modularrouters:modular_router' })
      event.shaped(
        'modularrouters:modular_router',
        [
          'AGA',
          'GCG',
          'AGA'
        ],
        {
          A: 'minecraft:iron_block',
          G: 'minecraft:iron_bars',
          C: 'modularrouters:blank_module'
        }
      )
    
// --------------------- Pipez --------------------- //
    // Universal Pipe
    event.remove({ output: 'pipez:universal_pipe' })
    event.shaped(
      Item.of('pipez:universal_pipe', 8),
      [
        'IEF',
        'GRG',
        'IEF'
      ],
      {
        R: 'minecraft:redstone_block',
        E: 'pipez:energy_pipe',
        G: 'pipez:gas_pipe',
        F: 'pipez:fluid_pipe',
        I: 'pipez:item_pipe'
      }
    )

// --------------------- Time in a Bottle --------------------- //
    // Time in a Bottle
    event.remove({ output: 'tiab:time_in_a_bottle' })
    event.shaped(
      'tiab:time_in_a_bottle',
      [
        'TTT',
        'AVU',
        'TTT'
      ],
      {
        T: 'justdirethings:time_crystal',
        A: 'allthemodium:allthemodium_ingot',
        V: 'allthemodium:vibranium_ingot',
        U: 'allthemodium:unobtainium_ingot'
      }
    )

// --------------------- Just Dire Things --------------------- //
    // Upgrade Ore X-Ray
    event.remove({ output: 'justdirethings:upgrade_orexray' })
    event.shaped(
      'justdirethings:upgrade_orexray',
      [
        'UPU',
        'CDC',
        'UPU'
      ],
      {
        U: 'allthemodium:unobtainium_ingot',
        P: 'minecraft:calibrated_sculk_sensor',
        C: 'minecraft:sculk_shrieker',
        D: 'justdirethings:upgrade_blank'
      }
    )

// --------------------- Logistics Networks --------------------- //
    // Gold Upgrade
    event.remove({ output: 'logisticsnetworks:gold_upgrade' })
    event.shaped(
      'logisticsnetworks:gold_upgrade',
      [
        'GHG',
        'CUC',
        'GHG'
      ],
      {
        G: 'minecraft:gold_ingot',
        H: 'minecraft:hopper',
        C: '#c:chests',
        U: 'logisticsnetworks:iron_upgrade'
      }
    )
    // Diamond Upgrade
    event.remove({ output: 'logisticsnetworks:diamond_upgrade' })
    event.shaped(
      'logisticsnetworks:diamond_upgrade',
      [
        'GHG',
        'CUC',
        'GHG'
      ],
      {
        G: 'minecraft:diamond',
        H: 'minecraft:hopper',
        C: '#c:chests',
        U: 'logisticsnetworks:gold_upgrade'
      }
    )
    // Netherite Upgrade
    event.remove({ output: 'logisticsnetworks:netherite_upgrade' })
    event.shaped(
      'logisticsnetworks:netherite_upgrade',
      [
        'GHG',
        'CUC',
        'GHG'
      ],
      {
        G: 'minecraft:netherite_ingot',
        H: 'minecraft:hopper',
        C: '#c:chests',
        U: 'logisticsnetworks:diamond_upgrade'
      }
    )
    // Dimensional Upgrade
    event.remove({ output: 'logisticsnetworks:dimensional_upgrade' })
    event.shaped(
      'logisticsnetworks:dimensional_upgrade',
      [
        'ONO',
        'BUB',
        'ONO'
      ],
      {
        O: 'minecraft:crying_obsidian',
        N: 'minecraft:nether_star',
        B: 'minecraft:dragon_breath',
        U: 'logisticsnetworks:netherite_upgrade'
      }
    )
// --------------------- EnderIO --------------------- //
    // Allthemodium Capacitor
    event.shaped(
      'capacitoradditions:allthemodium_capacitor',
      [
        ' L ',
        'CBC',
        ' L '
      ],
      {
        L: 'allthemodium:allthemodium_ingot',
        B: 'minecraft:water_bucket',
        C: 'enderio_endergy:stellar_capacitor'
      }
    )
    // Vibranium Capacitor
    event.shaped(
      'capacitoradditions:vibranium_capacitor',
      [
        ' L ',
        'CBC',
        ' L '
      ],
      {
        L: 'allthemodium:vibranium_ingot',
        B: 'minecraft:lava_bucket',
        C: 'capacitoradditions:allthemodium_capacitor'
      }
    )
    // Allthemodium Capacitor
    event.shaped(
      'capacitoradditions:unobtainium_capacitor',
      [
        ' L ',
        'CBC',
        ' L '
      ],
      {
        L: 'allthemodium:unobtainium_ingot',
        B: 'allthemodium:soul_lava_bucket',
        C: 'capacitoradditions:vibranium_capacitor'
      }
    )
// --------------------- AllTheModium --------------------- //
    // Alloy Paxel
    event.shaped(
      'allthemodium:alloy_paxel',
      [
        'EUM',
        'PV ',
        ' A '
      ],
      {
        A: 'allthemodium:allthemodium_rod',
        V: 'allthemodium:vibranium_rod',
        U: 'allthemodium:unobtainium_rod',
        E: 'allthemodium:alloy_sword',
        M: 'allthemodium:alloy_axe',
        P: 'allthemodium:alloy_shovel'
      }
    )
    // Allthemodium Griding Ball
    event.shaped(
      'grindingballadditions:allthemodium_grindingball',
      [
        ' A ',
        'AAA',
        ' A '
      ],
      {
        A: 'allthemodium:allthemodium_ingot'
      }
    )
    // Vibranium Griding Ball
    event.shaped(
      'grindingballadditions:vibranium_grindingball',
      [
        ' A ',
        'AAA',
        ' A '
      ],
      {
        A: 'allthemodium:vibranium_ingot'
      }
    )
    // Unobtainium Griding Ball
    event.shaped(
      'grindingballadditions:unobtainium_grindingball',
      [
        ' A ',
        'AAA',
        ' A '
      ],
      {
        A: 'allthemodium:unobtainium_ingot'
      }
    )
})

// ------------------------------------------ //

// -= Smithing Table (Minecraft). =-
ServerEvents.recipes(event => {
    // Advanced Time Wand
    event.remove({ output: 'justdynathings:advanced_time_wand' })
    event.custom({
        type: 'minecraft:smithing_transform',

        // Os 3 inputs
        template: 'justdirethings:eclipsealloy_block', // Esquerda
        base: 'justdirethings:time_wand',              // Meio
        addition: 'tiab:time_in_a_bottle',             // Direita

        // Resultado final
        result: {
            id: 'justdynathings:advanced_time_wand'
        }
    })
    // Allthemodium Alloy Mace
    event.custom({
        type: 'minecraft:smithing_transform',

        // Os 3 inputs
        template: 'allthemodium:unobtainium_allthemodium_block', // Esquerda
        base: 'allthemodium:unobtainium_mace',                   // Meio
        addition: 'allthemodium:unobtainium_vibranium_block', // Direita

        // Resultado final
        result: {
            id: 'allthemodium:alloy_mace'
        }
    })
    // Allthemodium Alloy Trident
    event.custom({
        type: 'minecraft:smithing_transform',

        // Os 3 inputs
        template: 'allthemodium:unobtainium_allthemodium_alloy_dust', // Esquerda
        base: 'minecraft:trident',                                    // Meio
        addition: 'allthemodium:unobtainium_vibranium_alloy_dust',    // Direita

        // Resultado final
        result: {
            id: 'allthemodium:alloy_trident'
        }
    })
})

// ------------------------------------------ //

// -= Essencias (Mystical). =-
ServerEvents.recipes(event => {
    function essenceCircle(result, essenceType) {
        event.shaped(result, ['AAA', 'A A', 'AAA'], { A: `mysticalagriculture:${essenceType}_essence` })
    }
    // As 3 ligas.
    essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
    essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
    essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
    // Essencias.
    essenceCircle('silentgear:crimson_iron_ingot', 'crimson_iron')
    essenceCircle('silentgear:azure_silver_ingot', 'azure_silver')
})