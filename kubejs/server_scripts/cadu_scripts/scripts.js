// ServerEvents.tags('item', event => {
//     event.add('curios:curio', 'toms_storage:adv_wireless_terminal');
// })

// ServerEvents.tags('item', event => {  // MOD NAO ATUALIZADO AINDA
//     event.add('curios:face', 'create:goggles');
// })

// Unified XP fluids
ServerEvents.tags('fluid', event => {
    const xpFluids = [
        "cofh_core:experience",
        "sophisticatedcore:xp_still"
        // "create_enchantment_industry:experience", // NAO ATUALIZADO AINDA
        // "mob_grinding_utils:fluid_xp" // NAO ATUALIZADO AINDA
    ]

    event.add('c:experience', xpFluids)
    event.add('c:liquid_xp', xpFluids)
    event.add('forge:experience', xpFluids)
})

ServerEvents.tags("block", (event) => {
  // Waystones
  event.add("ftbchunks:interact_whitelist", ["@waystones"])

  // Entangled
  event.add("entangled:invalid_targets", [
    "@ae2",
    "@advancedae",
    "@extendedae",
    "@megacells",
    "@appflux",
    "@appmek"
  ])
})

// // Tranforma os itens de essência em nuggets (Allthemodium, Vibranium e Unobtainium)
// ServerEvents.recipes(event => {
//     function essenceCircle(result, essenceType) {
//         event.shaped(result, [
//             'AAA',
//             'A A',
//             'AAA'
//         ], {
//             A: `mysticalagriculture:${essenceType}_essence`
//         })
//     }
//     essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
//     essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
//     essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
// })