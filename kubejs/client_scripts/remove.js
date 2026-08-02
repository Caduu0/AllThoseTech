const REMOVED_ITEMS = [ // Adicionar tambem a "server_scripts/cadu_scripts/remove.js" para bloquear o uso dos itens.
    'mysticalagriculture:limestone_seeds',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:saltpeter_seeds',
    'mysticalagriculture:saltpeter_essence',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:marble_essence',
    'meinfinitycell:infinity_water_cell',
    'meinfinitycell:infinity_cobblestone_cell'
];

// Remove os itens das telas de busca (JEI, REI e EMI).
RecipeViewerEvents.removeEntries('item', event => {
    REMOVED_ITEMS.forEach(item => {
        event.remove(item)
    })
})