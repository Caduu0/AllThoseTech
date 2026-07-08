const REMOVED_ITEMS = [
    'mysticalagriculture:limestone_seeds',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:saltpeter_seeds',
    'mysticalagriculture:saltpeter_essence'
];

// Remove os itens das telas de busca (JEI, REI e EMI)
RecipeViewerEvents.removeEntries('item', event => {
    REMOVED_ITEMS.forEach(item => {
        event.remove(item)
    })
})