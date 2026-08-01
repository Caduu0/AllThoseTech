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

// -= Receitas da SAG Mill (EnderIO). =- (Dust)
ServerEvents.recipes(event => {
  // Lista de receitas.
  const ae2MillingRecipes = [
    { input: '#ae2:all_certus_quartz', output: 'ae2:certus_quartz_dust', count: 1, energy: 2400 },
    { input: 'ae2:fluix_crystal', output: 'ae2:fluix_dust', count: 1, energy: 2400 },
    { input: 'extendedae:entro_crystal', output: 'extendedae:entro_dust', count: 1, energy: 2400 },
    { input: 'ae2:sky_stone_block', output: 'ae2:sky_dust', count: 1, energy: 2400 }
  ]
  ae2MillingRecipes.forEach(recipe => {
    const outputName = recipe.output.split(':')[1];
    event.custom({
      type: 'enderio:sag_milling',
      energy: recipe.energy,
      input: Ingredient.of(recipe.input).toJson(),
      outputs: [
        {
          item: {
            id: recipe.output,
            count: recipe.count
          }
        }
      ]
    })
  })
})