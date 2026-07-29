// -= Ultimate Table (Extended Crafting). =-
ServerEvents.recipes(event => {
    // Ultimate Singularity
    event.recipes.extendedcrafting.shaped_table(
        'extendedcrafting:ultimate_singularity', // Resultado.
        [
            "ABCDEFGHI",
            "JKLMNOPQR",
            "S        ",
            "         ",
            "         ",
            "         ",
            "         ",
            "         ",
            "         "
        ],
        {
            A: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:aluminum' }),
            B: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:bronze' }),
            C: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:copper' }),
            D: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:crystaltine' }),
            E: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:diamond' }),
            F: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:electrum' }),
            G: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:emerald' }),
            H: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:enderium' }),
            I: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:gold' }),
            J: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:invar' }),
            K: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:iron' }),
            L: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:lapis_lazuli' }),
            M: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:lead' }),
            N: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:luminessence' }),
            O: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:nickel' }),
            P: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:platinum' }),
            Q: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:silver' }),
            R: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:steel' }),
            S: Item.of('extendedcrafting:singularity', { 'extendedcrafting:singularity_id': 'extendedcrafting:tin' })
        }
    )
    // The Ultimate Ingot
    event.recipes.extendedcrafting.shaped_table(
        "extendedcrafting:the_ultimate_ingot", // Resultado.
        [
            "ABCDEFGHI",
            "         ",
            "         ",
            "         ",
            "         ",
            "         ",
            "         ",
            "         ",
            "         "
        ],
        {
            A: "extendedcrafting:basic_catalyst",
            B: "extendedcrafting:advanced_catalyst",
            C: "extendedcrafting:elite_catalyst",
            D: "extendedcrafting:ultimate_catalyst",
            E: "extendedcrafting:redstone_catalyst",
            F: "extendedcrafting:enhanced_redstone_catalyst",
            G: "extendedcrafting:ender_catalyst",
            H: "extendedcrafting:enhanced_ender_catalyst",
            I: "extendedcrafting:crystaltine_catalyst"
        }
    )
})