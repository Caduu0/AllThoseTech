StartupEvents.registry('item', event => { 
    // Célula Infinita de Lava
    event.create('lava_cell', 'meinfinitycell:infinity_cell')
        .fluidType('minecraft:lava')
        .texture('allthosetweaks:item/lava_cell')

    // Terra
    event.create('dirt_cell', 'meinfinitycell:infinity_cell')
        .itemType('minecraft:dirt')
        .texture('allthosetweaks:item/dirt_cell')
})