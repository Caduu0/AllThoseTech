// -= Advanced Crusher (Energized Power). =-
ServerEvents.recipes(event => {
    // Unobtainium Allthemodium Alloy Dust
    event.custom({
        type: 'energizedpower:crusher',

        // Ingrediente.
        ingredient: 'allthemodium:unobtainium_allthemodium_alloy_ingot',

        // Resultado
        result: {
            id: 'allthemodium:unobtainium_allthemodium_alloy_dust',
            count: 1 
        }
    })
    // Unobtainium Vibranium Alloy Dust
    event.custom({
        type: 'energizedpower:crusher',

        // Ingrediente.
        ingredient: 'allthemodium:unobtainium_vibranium_alloy_ingot',

        // Resultado
        result: {
            id: 'allthemodium:unobtainium_vibranium_alloy_dust',
            count: 1 
        }
    })
    // Vibranium Allthemodium Alloy Dust
    event.custom({
        type: 'energizedpower:crusher',

        // Ingrediente.
        ingredient: 'allthemodium:vibranium_allthemodium_alloy_ingot',

        // Resultado
        result: {
            id: 'allthemodium:vibranium_allthemodium_alloy_dust',
            count: 1 
        }
    })
})