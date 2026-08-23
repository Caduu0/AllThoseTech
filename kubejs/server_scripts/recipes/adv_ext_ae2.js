// -= Crystal Assembler (ExtendedAE). =-
ServerEvents.recipes(event => {
    // Vibranium Allthemodium Alloy Ingot
    event.custom({
        type: 'extendedae:crystal_assembler',
        energy: 50000000, // Energia (AE2).

        // Ingredientes (de 1 a 9 itens).
        input_items: [
            {
                amount: 1, 
                ingredient: 'allthemodium:piglich_heart'
            },
            {
                amount: 4,
                ingredient: 'allthemodium:vibranium_ingot'
            },
            {
                amount: 4,
                ingredient: 'allthemodium:allthemodium_ingot'
            }
        ],

        // Liquido.
        input_fluid: {
            ingredient: 'minecraft:lava',
            amount: 1000 // Quantidade (mB).
        },

        // Resultado.
        output: {
            id: 'allthemodium:vibranium_allthemodium_alloy_ingot',
            count: 1
        }
    })
})

// -= Circuit Slicer (ExtendedAE). =-
ServerEvents.recipes(event => {
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
})