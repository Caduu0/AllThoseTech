// -= Energizeing (Powah). =-
ServerEvents.recipes(event => {
    // Unobtainium Allthemodium Alloy Ingot
    event.custom({
        type: 'powah:energizing',
        energy: 100000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'allthemodium:unobtainium_block',
            'allthemodium:allthemodium_block',
            'allthemodium:piglich_heart',
            'allthemodium:allthemodium_block',
            'allthemodium:unobtainium_block'
        ],
        
        // Resultado.
        result: {
            id: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
            count: 1
        }
    })
    // Allthemodium Alloy Sword
    event.custom({
        type: 'powah:energizing',
        energy: 100000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'allthemodium:unobtainium_sword',
            'allthemodium:vibranium_sword',
            'allthemodium:piglich_heart',
            'allthemodium:vibranium_sword',
            'allthemodium:unobtainium_sword'
        ],
        
        // Resultado.
        result: {
            id: 'allthemodium:alloy_sword',
            count: 1
        }
    })
    // Allthemodium Alloy Axe
    event.custom({
        type: 'powah:energizing',
        energy: 100000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'allthemodium:unobtainium_axe',
            'allthemodium:vibranium_axe',
            'allthemodium:piglich_heart',
            'allthemodium:vibranium_axe',
            'allthemodium:unobtainium_axe'
        ],
        
        // Resultado.
        result: {
            id: 'allthemodium:alloy_axe',
            count: 1
        }
    })
    // Allthemodium Alloy Shovel
    event.custom({
        type: 'powah:energizing',
        energy: 100000000, // Energia (FE).
        
        // Ingredientes (Recomendado de 1 até 6).
        ingredients: [
            'allthemodium:unobtainium_shovel',
            'allthemodium:vibranium_shovel',
            'allthemodium:piglich_heart',
            'allthemodium:vibranium_shovel',
            'allthemodium:unobtainium_shovel'
        ],
        
        // Resultado.
        result: {
            id: 'allthemodium:alloy_shovel',
            count: 1
        }
    })
})