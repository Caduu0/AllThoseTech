// -= Infusion Crafting (Mystical Agriculture). =-
ServerEvents.recipes(event => {
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
    // Magical Soil
    event.custom({
        type: 'mysticalagriculture:infusion',
        
        // O item que vai no Altar central
        input: 'mysticalagradditions:insanium_farmland',
        
        // Os itens que vão nos Pedestais
        ingredients: [
            'mysticalagradditions:insanium_gemstone_block',    // Topo-Esquerda
            'mysticalagradditions:nitro_crystal_crux',         // Topo
            'mysticalagradditions:insanium_gemstone_block',    // Topo-Direita
            'mysticalagradditions:dragon_egg_crux',            // Direita
            'mysticalagradditions:insanium_gemstone_block',    // Baixo-Direita
            'allthemodium:unobtainium_block',                  // Baixo
            'mysticalagradditions:insanium_gemstone_block',    // Baixo-Esquerda
            'mysticalagradditions:nether_star_crux'            // Esquerda
        ],
        result: {
            id: 'kubejs:magical_soil', 
            count: 1
        }
    })
})

// -= Awakening Crafting (Mystical Agriculture). =-
ServerEvents.recipes(event => {
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