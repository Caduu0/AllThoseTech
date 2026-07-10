// Receitas customizadas da crafting table.
ServerEvents.recipes(event => {
// --------------------- Baubley Heart ---------------------  //
// Baubley Heart
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
})

// ------------------------------------------ //

// Receitas customizadas da Smithing Table.
ServerEvents.recipes(event => {
// --------------------- Just Dyna Things --------------------- //
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
})

// ------------------------------------------ //

// Receitas customizadas do Mystical Agriculture (Infusion Crafting).
ServerEvents.recipes(event => {
// --------------------- Compass --------------------- //
// Nature's Compass
event.remove({ output: 'naturescompass:naturescompass' })
event.custom({
    type: 'mysticalagriculture:infusion',
    
    // O item que vai no Altar central
    input: 'minecraft:recovery_compass',
    
    // Os itens que vão nos Pedestais
    ingredients: [
        '#c:saplings',                               // Topo-Esquerda
        'mysticalagriculture:prudentium_essence',    // Topo
        '#c:saplings',                               // Topo-Direita
        'mysticalagriculture:prudentium_essence',    // Direita
        '#c:saplings',                               // Baixo-Direita
        'mysticalagriculture:prudentium_essence',    // Baixo
        '#c:saplings',                               // Baixo-Esquerda
        'mysticalagriculture:prudentium_essence'     // Esquerda
    ],
    result: {
        id: 'naturescompass:naturescompass', 
        count: 1
    }
})
})

// ------------------------------------------ //

// Receitas customizadas do Mystical Agriculture (Awakening Crafting).
ServerEvents.recipes(event => {
// --------------------- AllTheModium --------------------- //
// Teleport Pad
event.remove({ output: 'allthemodium:teleport_pad' })
event.custom({
    type: 'mysticalagriculture:awakening',
    
    // O item que vai no Altar Central.
    input: 'allthemodium:allthemodium_block',
    
    // Os itens que vão nos Pedestais.
    ingredients: [
        'allthemodium:vibranium_block',     // Topo-Esquerda
        'allthemodium:unobtainium_block',   // Topo-Direita
        'allthemodium:vibranium_block',     // Baixo-Esquerda
        'allthemodium:unobtainium_block'    // Baixo-Direita
    ],
    
    // As essências elementares.
    essences: [
        { ingredient: 'mysticalagriculture:air_essence', count: 16 },
        { ingredient: 'mysticalagriculture:earth_essence', count: 16 },
        { ingredient: 'mysticalagriculture:water_essence', count: 16 },
        { ingredient: 'mysticalagriculture:fire_essence', count: 16 }
    ],
    
    // Resultado.
    result: {
        id: 'allthemodium:teleport_pad',
        count: 1
    }
})
})

// ------------------------------------------ //

// Receitas customizadas do EnderIO.
ServerEvents.recipes(event => {
// --------------------- Compass --------------------- //
    // Explorer's Compass
    event.remove({ output: 'explorerscompass:explorerscompass' })
    event.custom({
        type: 'enderio:slicing',
        energy: 9000, // Quantidade de energia necessária para processar a receita.

        // Ingredientes (de 1 a 6 itens).
        inputs: [
            'naturescompass:naturescompass',
            'minecraft:recovery_compass',
            'naturescompass:naturescompass',
            'energizedpower:crystallized_lapis_lazuli',
            'energizedpower:crystal_matrix',
            'energizedpower:crystallized_lapis_lazuli'
        ],

        // Resultado.
        output: {
            id: 'explorerscompass:explorerscompass',
            count: 1
        }
    })
})

// ------------------------------------------ //

// Receitas customizadas da Crystal Assembler (ExtendedAE).
ServerEvents.recipes(event => {
// --------------------- ExtendedAE --------------------- //
    // Quantum Processor
    event.custom({
        type: 'extendedae:crystal_assembler',
        energy: 2000, // Energia (AE2).

        // Ingredientes (de 1 a 9 itens).
        input_items: [
            {
                amount: 4, 
                ingredient: 'advanced_ae:printed_quantum_processor'
            },
            {
                amount: 4,
                ingredient: 'ae2:printed_silicon'
            },
            {
                amount: 4,
                ingredient: 'minecraft:redstone'
            }
        ],

        // Liquido.
        input_fluid: {
            ingredient: 'minecraft:water',
            amount: 400 // Quantidade (mB).
        },

        // Resultado.
        output: {
            id: 'advanced_ae:quantum_processor',
            count: 4
        }
    })
    // Energy Processor
    event.custom({
        type: 'extendedae:crystal_assembler',
        energy: 2000, // Energia (AE2).

        // Ingredientes (de 1 a 9 itens).
        input_items: [
            {
                amount: 4, 
                ingredient: 'appflux:printed_energy_processor'
            },
            {
                amount: 4,
                ingredient: 'ae2:printed_silicon'
            },
            {
                amount: 4,
                ingredient: 'minecraft:redstone'
            }
        ],

        // Resultado.
        output: {
            id: 'appflux:energy_processor',
            count: 4
        }
    })
})

// Receitas customizadas da Circuit Slicer (ExtendedAE).
ServerEvents.recipes(event => {
// --------------------- ExtendedAE --------------------- //
    // Printed Quantum Circuit
    event.remove({ id: 'advanced_ae:quantum_processor_print_eae' })
    event.custom({
        type: 'extendedae:circuit_cutter',
        energy: 18000, // Energia (AE2).
    
        // Ingrediente.
        input: {
            ingredient: 'advanced_ae:quantum_alloy_block'
        },
      
        // Resultado
        output: {
            id: 'advanced_ae:printed_quantum_processor',
            count: 9
        }
    })
    // Printed Energy Circuit
    event.custom({
        type: 'extendedae:circuit_cutter',
        energy: 18000, // Energia (AE2).
    
        // Ingrediente.
        input: {
            ingredient: 'appflux:charged_redstone_block'
        },
      
        // Resultado
        output: {
            id: 'appflux:printed_energy_processor',
            count: 9
        }
    })
})