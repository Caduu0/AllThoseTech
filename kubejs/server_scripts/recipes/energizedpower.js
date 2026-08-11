// -= Pulverizer (Energized Power). =-
ServerEvents.recipes(event => {
  const PulverizerRecipes = [
    { ingredient: '#ae2:all_certus_quartz', result: 'ae2:certus_quartz_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: 'ae2:fluix_crystal', result: 'ae2:fluix_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: 'extendedae:entro_crystal', result: 'extendedae:entro_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: 'ae2:sky_stone_block', result: 'ae2:sky_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: 'advanced_ae:shattered_singularity', result: 'advanced_ae:quantum_infused_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: '#c:ender_pearls', result: 'enderio:powdered_ender_pearl', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: '#c:gems/emerald', result: 'appflux:emerald_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: '#c:gems/diamond', result: 'appflux:diamond_dust', count: 1, percentages: [ 1.0, 1.0, 0.5 ] },
    { ingredient: 'allthemodium:unobtainium_allthemodium_alloy_ingot', result: 'allthemodium:unobtainium_allthemodium_alloy_dust', count: 1, percentages: [ 0.5, 0.01 ] },
    { ingredient: 'allthemodium:unobtainium_vibranium_alloy_ingot', result: 'allthemodium:unobtainium_vibranium_alloy_dust', count: 1, percentages: [ 0.5, 0.01 ] },
    { ingredient: 'allthemodium:vibranium_allthemodium_alloy_ingot', result: 'allthemodium:vibranium_allthemodium_alloy_dust', count: 1, percentages: [ 0.5, 0.01 ] }
  ]
  PulverizerRecipes.forEach(recipe => {
    event.custom({
        type: 'energizedpower:pulverizer',
        ingredient: recipe.ingredient,
        result: {
            result: recipe.result,
            count: recipe.count,
            percentages: recipe.percentages
        }
    })
  })
})