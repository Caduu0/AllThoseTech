ServerEvents.recipes(event => {
  // Cobbled Soulstone
  event.custom({
    type: 'cobblegengalore:blockgen',
    result: { id: 'mysticalagriculture:soulstone_cobble' }, // Bloco/Item gerado.
    left: { Name: 'minecraft:soul_sand' },
    right: { Name: 'minecraft:soul_soil' },
    modifier: { Name: 'mysticalagriculture:soulstone_cobble' }, // Bloco que fica embaixo. ('minecraft:air')
    speed: 1.0,
    // Consumir bloco/fluido.
    consumeLeft: false,
    consumeRight: false
  })
})