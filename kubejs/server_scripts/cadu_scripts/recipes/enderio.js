// -= Receitas da Slicing (EnderIO). =-
ServerEvents.recipes(event => {
    // Explorer's Compass
    event.remove({ output: 'explorerscompass:explorerscompass' })
    event.custom({
        type: 'enderio:slicing',
        energy: 9000, // Energia (FE).

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
    //  Unobtanium Vibranium Alloy Ingot
    event.custom({
        type: 'enderio:slicing',
        energy: 100000000, // Energia (FE).

        // Ingredientes (de 1 a 6 itens).
        inputs: [
            'allthemodium:unobtainium_block',
            'allthemodium:piglich_heart',
            'allthemodium:vibranium_block',
            'allthemodium:vibranium_block',
            'allthemodium:piglich_heart',
            'allthemodium:unobtainium_block'
        ],

        // Resultado.
        output: {
            id: 'allthemodium:unobtainium_vibranium_alloy_ingot',
            count: 1
        }
    })
})