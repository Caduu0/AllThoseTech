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
})