// ServerEvents.tags('item', event => {  // MOD NAO ATUALIZADO AINDA
//     event.add('curios:face', 'create:goggles');
// })

// Unified XP fluids.
ServerEvents.tags('fluid', event => {
    const xpFluids = [
        "sophisticatedcore:xp_still",
        "justdirethings:xp_fluid_source",
        "energizedpower:liquid_xp",
        "enderio:fluid_xp_juice_still"
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