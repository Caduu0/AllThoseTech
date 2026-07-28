// Adds attributes to the spawner.
ServerEvents.recipes(event => {
    // Remove todas as antigas.
    event.remove({ type: 'apothic_spawners:spawner_modifier' })

    // Spawn Count.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:netherite_block',
        stat_changes: [
          { type: 'apothic_spawners:spawn_count', value: 1, min: 1, max: 16 }
        ]
    })  
    // Min Delay.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:netherite_scrap',
        stat_changes: [
          { type: 'apothic_spawners:min_delay', value: -20, min: 20, max: 8000 }
        ]
    })  
    // Max Delay.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:netherite_ingot',
        stat_changes: [
          { type: 'apothic_spawners:max_delay', value: -20, min: 20, max: 8000 }
        ]
    })  
    // Ignore Players.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:nether_star',
        stat_changes: [
          { type: 'apothic_spawners:ignore_players', value: true }
        ]
    })  
    // Ignore Light.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:totem_of_undying',
        stat_changes: [
          { type: 'apothic_spawners:ignore_light', value: true }
        ]
    })  
    // Ignore Conditions.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:conduit',
        stat_changes: [
          { type: 'apothic_spawners:ignore_conditions', value: true }
        ]
    })  
    // Redstone Control.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'appflux:charged_redstone',
        stat_changes: [
          { type: 'apothic_spawners:redstone_control', value: true }
        ]
    })  
    // Player Range.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:prismarine_crystals',
        stat_changes: [
          { type: 'apothic_spawners:req_player_range', value: 2, min: 1, max: 64 }
        ]
    })  
    // Spawn Range.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:piston',
        stat_changes: [
          { type: 'apothic_spawners:spawn_range', value: 2, min: 1, max: 32 }
        ]
    })  
    // Silent.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: '#minecraft:wool',
        stat_changes: [
            { type: 'apothic_spawners:silent', value: true }
        ]
    })  
    // No IA.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:chorus_fruit',
        stat_changes: [
          { type: 'apothic_spawners:no_ai', value: true }
        ]
    })  
    // Burning.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:campfire',
        stat_changes: [
          { type: 'apothic_spawners:burning', value: true }
        ]
    })
})

// Remove attributes to the spawner.
ServerEvents.recipes(event => {
    // Spawn Count.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:netherite_block',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:spawn_count', value: -1, min: 1, max: 16 }
        ]
    })      
    // Min Delay.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:netherite_scrap',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:min_delay', value: 20, min: 20, max: 8000 }
        ]
    })      
    // Max Delay.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:netherite_ingot',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:max_delay', value: 20, min: 20, max: 8000 }
        ]
    })       
    // Ignore Players.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:nether_star',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:ignore_players', value: false }
        ]
    })       
    // Ignore Light.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:totem_of_undying',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:ignore_light', value: false }
        ]
    })       
    // Ignore Conditions.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:conduit',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:ignore_conditions', value: false }
        ]
    })       
    // Redstone Control.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'appflux:charged_redstone',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:redstone_control', value: false }
        ]
    })       
    // Player Range.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:prismarine_crystals',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:req_player_range', value: -2, min: 1, max: 64 }
        ]
    })       
    // Spawn Range.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:piston',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:spawn_range', value: -2, min: 1, max: 32 }
        ]
    })       
    // Silent.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: '#minecraft:wool',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:silent', value: false }
        ]
    })       
    // No IA.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:chorus_fruit',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:no_ai', value: false }
        ]
    })       
    // Burning.
    event.custom({
        type: 'apothic_spawners:spawner_modifier',
        mainhand: 'minecraft:campfire',
        offhand: 'minecraft:quartz',
        stat_changes: [
          { type: 'apothic_spawners:burning', value: false }
        ]
    })
})