StartupEvents.registry("block", (event) => {
    event.create("magical_soil")
       .displayName("§5Magical Soil")
       .grassSoundType()
       .mapColor("grass")
       .hardness(0.6)
       .texture("minecraft:block/coarse_dirt")
})