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

// --------------------- Mystical Agriculture --------------------- //
// Marble Essence
event.shaped(
  Item.of('aether_ii:marbled_ichorite', 8),
  [
    'AAA',
    'A A',
    'AAA'
  ],
  {
    A: 'mysticalagriculture:marble_essence'
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

// Receitas customizadas do Mystical Agriculture (Infusion Crafting).
ServerEvents.recipes(event => {
// --------------------- Mystical Agriculture --------------------- //
// Magical Soil
event.custom({
    type: 'mysticalagriculture:infusion',
    
    // O item que vai no Altar central
    input: 'kubejs:magical_soil',
    
    // Os itens que vão nos Pedestais
    ingredients: [
        'kubejs:magical_soil',    // Topo-Esquerda
        'kubejs:magical_soil',    // Topo
        'kubejs:magical_soil',    // Topo-Direita
        'kubejs:magical_soil',    // Direita
        'kubejs:magical_soil',    // Baixo-Direita
        'kubejs:magical_soil',    // Baixo
        'kubejs:magical_soil',    // Baixo-Esquerda
        'kubejs:magical_soil'     // Esquerda
    ],
    result: {
        id: 'kubejs:magical_soil', 
        count: 1
    }
})

// Marble Seeds
event.remove({ id: 'mysticalagriculture:marble_seeds_infusion' })
event.custom({
    type: 'mysticalagriculture:infusion',
    
    // O item que vai no Altar central
    input: 'mysticalagriculture:prosperity_seed_base',
    
    // Os itens que vão nos Pedestais
    ingredients: [
        'aether_ii:marbled_ichorite',                // Topo-Esquerda
        'mysticalagriculture:prudentium_essence',    // Topo
        'aether_ii:marbled_ichorite',                // Topo-Direita
        'mysticalagriculture:prudentium_essence',    // Direita
        'aether_ii:marbled_ichorite',                // Baixo-Direita
        'mysticalagriculture:prudentium_essence',    // Baixo
        'aether_ii:marbled_ichorite',                // Baixo-Esquerda
        'mysticalagriculture:prudentium_essence'     // Esquerda
    ],
    result: {
        id: 'mysticalagriculture:marble_seeds', 
        count: 1
    }
})

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
        'allthemodium:unobtainium_block',   // Baixo-Esquerda
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