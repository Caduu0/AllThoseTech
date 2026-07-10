// // Remove itens do inventário do jogador no primeiro login
// PlayerEvents.loggedIn(event => {
//     const { player, server } = event;
//     if (!player.stages.has('primeiro_login')) {
//         player.stages.add('primeiro_login');
//         server.scheduleInTicks(20, () => {

//             // LISTA DE ITENS PARA REMOVER
//             let itensParaRemover = [
//                 'MOD:ITEM'
//             ];

//             itensParaRemover.forEach(item => {
//                 server.runCommandSilent(`clear ${player.username} ${item}`);
//             });
//         });
//     }
// })

const REMOVED_ITEMS = [ // Adicionar tambem a "client_scripts/cadu_scripts/remove.js" para bloquear o uso dos itens.
    'mysticalagriculture:limestone_seeds',
    'mysticalagriculture:limestone_essence',
    'mysticalagriculture:saltpeter_seeds',
    'mysticalagriculture:saltpeter_essence',
    'mysticalagriculture:marble_seeds',
    'mysticalagriculture:marble_essence'
];

// Remove as receitas que criam ou usam os itens
ServerEvents.recipes(event => {
    REMOVED_ITEMS.forEach(item => {
        event.remove({ id: item })
        event.remove({ output: item })
        event.remove({ input: item })
    })
})

// Bloqueia o jogador de usar os itens
ItemEvents.rightClicked(event => {
    if (REMOVED_ITEMS.includes(event.item.id)) {
        event.cancel()
        event.player.tell(`O item (${event.item.id}) está desativado neste modpack.`)
    }
})

// Bloqueia o jogador de coletar/ter os itens
PlayerEvents.inventoryChanged(event => {
    const player = event.player
    if (REMOVED_ITEMS.includes(event.item.id)) {
        player.inventory.clear(event.item.id)
        player.tell(`O item ${event.item.id} foi deletado por estar desativado.`)
    }
})

// Remove gemas do Silent Gear
ServerEvents.recipes(event => {
    event.remove({ id: `silentgear:emerald_from_shards` })
    event.remove({ id: `silentgear:diamond_from_shards` })
})