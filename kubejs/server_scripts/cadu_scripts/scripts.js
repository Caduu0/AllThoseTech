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

// Troca a Armadura de Netherite pela de Unobtainium.
ServerEvents.recipes(event => {
    const pecas = ['helmet', 'chestplate', 'leggings', 'boots'];
    pecas.forEach(peca => {
        event.replaceInput(
            { 
                type: 'minecraft:crafting_shaped', 
                output: `advanced_ae:quantum_${peca}`
            },
            `minecraft:netherite_${peca}`,      // Item Antigo
            `allthemodium:unobtainium_${peca}`  // Item Novo
        )
    })
})

// Abre as duas portas ao inves de so uma.
BlockEvents.rightClicked(event => {
    const { block, hand, player } = event;

    if (hand != 'main_hand' || player.isCrouching() || !block.hasTag('minecraft:doors') || block.id.startsWith('create:')) return;

    let isCurrentlyOpen = block.properties.open == 'true';
    let facing = block.properties.facing;
    let hinge = block.properties.hinge;
    let willOpen = !isCurrentlyOpen;
    let directions = ['north', 'south', 'east', 'west'];

    directions.forEach(dir => {
        let neighbor = block.offset(dir);
        
        if (neighbor.id == block.id) {
            if (neighbor.properties.facing == facing && neighbor.properties.hinge != hinge) {

                let newProps = {};
                for (let key in neighbor.properties) {
                    newProps[key] = neighbor.properties[key];
                }
                
                newProps.open = willOpen ? 'true' : 'false';
                
                neighbor.set(neighbor.id, newProps);
            }
        }
    });
})