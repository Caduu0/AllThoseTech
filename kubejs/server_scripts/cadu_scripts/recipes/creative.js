// -= Crafting Table (Minecraft). =-
ServerEvents.recipes(event => {
    // ME Infinity Water Cell (AE2)
    event.remove({ output: 'extendedae:infinity_water_cell' })
    event.shaped(
      'extendedae:infinity_water_cell',
      [
        'GAG',
        'ACA',
        'DDD'
      ],
      {
        C: 'ae2:creative_storage_cell',
        A: 'minecraft:water_bucket',
        D: 'minecraft:diamond',
        G: 'ae2:quartz_glass'
      }
    )
    // ME Infinity Cobblestone Cell (AE2)
    event.remove({ output: 'extendedae:infinity_cobblestone_cell' })
    event.shaped(
      'extendedae:infinity_cobblestone_cell',
      [
        'GLG',
        'ACA',
        'DDD'
      ],
      {
        C: 'ae2:creative_storage_cell',
        A: 'minecraft:water_bucket',
        L: 'minecraft:lava_bucket',
        D: 'minecraft:diamond',
        G: 'ae2:quartz_glass'
      }
    )
    // Upgrade: Creative Battery (Mining Gadgets)
    event.remove({ output: 'mininggadgets:upgrade_battery_creative' })
    event.shaped(
      'mininggadgets:upgrade_battery_creative',
      [
        'QRQ',
        'UAU',
        'QRQ'
      ],
      {
        A: 'allthosetweaks:baccon',
        U: 'mininggadgets:upgrade_battery_3',
        Q: 'minecraft:quartz_block',
        R: 'minecraft:redstone_block'
      }
    )
    // Creative Goo (Just Dyna Things)
    event.remove({ output: 'justdynathings:creative_goo' })
    event.shaped(
      'justdynathings:creative_goo',
      [
        'GPG',
        'TAT',
        'GIG'
      ],
      {
        A: 'allthosetweaks:baccon',
        G: 'justdynathings:charged_shadowpulse_goo',
        P: 'justdirethings:playeraccessor',
        T: 'justdirethings:time_crystal_block',
        I: 'justdirethings:inventory_holder'
      }
    )
})

// -= Energizeing (Powah). =-
ServerEvents.recipes(event => {
    // Energy Cell Creative (Powah)
    event.custom({
        type: 'powah:energizing',
        energy: 7000000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'powah:energy_cell_nitro',
            'powah:energy_cell_nitro',
            'allthosetweaks:baccon',
            'powah:energy_cell_nitro',
            'powah:energy_cell_nitro'
        ],
        
        // Resultado.
        result: {
            id: 'powah:energy_cell_creative',
            count: 1
        }
    })
    // Creative Energy Cell (AE2)
    event.custom({
        type: 'powah:energizing',
        energy: 7000000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'powah:energy_cell_nitro',
            'ae2:dense_energy_cell',
            'allthosetweaks:baccon',
            'ae2:dense_energy_cell',
            'powah:energy_cell_nitro'
        ],
        
        // Resultado.
        result: {
            id: 'ae2:creative_energy_cell',
            count: 1
        }
    })
    // Creative ME Storage Cell (AE2)
    event.custom({
        type: 'powah:energizing',
        energy: 1000000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'advanced_ae:quantum_storage_256',
            'advanced_ae:quantum_core',
            'allthosetweaks:baccon',
            'advanced_ae:data_entangler',
            'advanced_ae:quantum_storage_256'
        ],
        
        // Resultado.
        result: {
            id: 'ae2:creative_storage_cell',
            count: 1
        }
    })
    // Creative Controller (Refined Storage)
    event.custom({
        type: 'powah:energizing',
        energy: 1000000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'powah:energy_cell_nitro',
            'refinedstorage:controller',
            'allthosetweaks:baccon',
            'refinedstorage:controller',
            'powah:energy_cell_nitro'
        ],
        
        // Resultado.
        result: {
            id: 'refinedstorage:creative_controller',
            count: 1
        }
    })
    // Creative Energy Battery (Integrated Dynamics)
    event.custom({
        type: 'powah:energizing',
        energy: 7000000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'powah:energy_cell_nitro',
            'integrateddynamics:energy_battery',
            'allthosetweaks:baccon',
            'integrateddynamics:energy_battery',
            'powah:energy_cell_nitro'
        ],
        
        // Resultado.
        result: {
            id: 'integrateddynamics:energy_battery_creative',
            count: 1
        }
    })
})

// -= Infusion (Mystical Agriculture). =-
ServerEvents.recipes(event => {
    // Creative Essence
    event.custom({
        type: 'mysticalagriculture:infusion',

        // O item que vai no Altar central
        input: 'allthosetweaks:baccon',

        // Os itens que vão nos Pedestais
        ingredients: [
            'mysticalagriculture:awakened_supremium_block',    // Topo-Esquerda
            'mysticalagradditions:insanium_block',             // Topo
            'mysticalagriculture:awakened_supremium_block',    // Topo-Direita
            'mysticalagradditions:insanium_block',             // Direita
            'mysticalagriculture:awakened_supremium_block',    // Baixo-Direita
            'mysticalagradditions:insanium_block',             // Baixo
            'mysticalagriculture:awakened_supremium_block',    // Baixo-Esquerda
            'mysticalagradditions:insanium_block'              // Esquerda
        ],
        result: {
            id: 'mysticalagradditions:creative_essence', 
            count: 1
        }
    })
})