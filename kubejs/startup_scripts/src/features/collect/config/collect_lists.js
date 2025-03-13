const CollectLists = {
  entities: {
    name: 'Animal Patting',
    message: 'New animal patted!',
    certificateName: 'Animal Completion Certificate',
    startingRewardPerObject: 1,
    rewardIncreasePerObject: 0.03,
    icon: 'minecraft:allay_spawn_egg',
    subCollections: {
      water: {
        name: "General Water",
        list: [
        "minecraft:squid",
        "alexsmobs:flying_fish",
        "minecraft:dolphin",
        "alexsmobs:blobfish",
        "alexsmobs:cachalot_whale"
        ]
      },
      warmOcean: {
        name: "Warm Oceans",
        list: [
          "alexsmobs:mimic_octopus",
          "alexsmobs:mantis_shrimp"
        ]
      },
      beach: {
        name: "Beaches",
        list: [
          "alexsmobs:lobster",
          "alexsmobs:seagull",
          "alexsmobs:seal"
        ]
      },
      river: {
        name: "River",
        list: [
          "alexsmobs:platypus",
          "alexsmobs:terrapin"
        ]
      },
      frozenOcean: {
        name: 'Frozen Ocean',
        list: [
          "alexsmobs:orca",
          "alexsmobs:comb_jelly"
        ]
      },
      deepOcean: {
        name: 'Deepest Ocean',
        list: [
          "alexsmobs:giant_squid",
          "alexsmobs:frilled_shark"
        ]
      },
      desert: {
        name: 'Desert',
        list: [
          "minecraft:camel",
          "alexsmobs:rain_frog",
          "alexsmobs:triops",
          "alexsmobs:jerboa",
          "alexsmobs:roadrunner"
        ]
      },
      forest: {
        name: 'Forest',
        list: [
          "minecraft:wolf",
          "alexsmobs:skunk",
          "alexsmobs:tasmanian_devil",
          "alexsmobs:potoo",
          "alexsmobs:blue_jay",
          "alexsmobs:banana_slug",
          "alexsmobs:sugar_glider",
          "alexsmobs:bald_eagle"
        ]
      },
      jungle: {
        name: 'Jungle',
        list: [
          "alexsmobs:anteater",
          "alexsmobs:capuchin_monkey",
          "alexsmobs:gorilla",
          "alexsmobs:hummingbird",
          "alexsmobs:leafcutter_ant",
          "alexsmobs:toucan",
          "minecraft:ocelot",
          "minecraft:panda",
          "minecraft:parrot"
        ]
      },
      mountain: {
        name: 'Mountain',
        list: [
          "minecraft:goat"
        ]
      },
      special: {
        name: 'Special',
        list: [
          "minecraft:bee",
          "minecraft:allay",
          "minecraft:cat"
        ]
      },
      savanna: {
        name: 'Savanna',
        list: [
          "alexsmobs:elephant",
          "alexsmobs:emu",
          "alexsmobs:gazelle",
          "alexsmobs:kangaroo",
          "alexsmobs:maned_wolf",
          "alexsmobs:rhinoceros",
          "minecraft:llama"
        ]
      },
      plains: {
        name: 'Plains',
        list: [
          "alexsmobs:bison",
          "alexsmobs:crow",
          "alexsmobs:gelada_monkey",
          "alexsmobs:raccoon",
          "minecraft:donkey",
          "minecraft:horse"
        ]
      },
      grass: {
        name: 'Grass',
        list: [
          "minecraft:pig",
          "minecraft:chicken",
          "minecraft:rabbit",
          "minecraft:sheep",
          "minecraft:cow"
        ]
      },
      caves: {
        name: 'Caves',
        list: [
          "minecraft:bat",
          "minecraft:glow_squid",
          "alexsmobs:flutter",
          "minecraft:axolotl"
        ]
      },
      snowy: {
        name: 'Snowy',
        list: [
          "minecraft:polar_bear",
          "alexsmobs:moose",
          "alexsmobs:snow_leopard",
          "minecraft:fox"
        ]
      },
      swamp: {
        name: 'Swamp',
        list: [
          "alexsmobs:shoebill",
          "alexsmobs:catfish",
          "minecraft:frog",
          "minecraft:tadpole",
          "alexsmobs:caiman",
          "alexsmobs:mudskipper"
        ]
      },
      mushroom: {
        name: 'Mushroom',
        list: [
          "alexsmobs:bunfungus",
          "alexsmobs:mungus",
          "minecraft:mooshroom"
        ]
      }
    }
  },
  flora: {
    name: 'Flora',
    message: 'New flora obtained!',
    certificateName: 'Flora Completion Certificate',
    startingRewardPerObject: 1,
    rewardIncreasePerObject: 0.02,
    icon: 'minecraft:poppy',
    subCollections: {
      crops: {
        name: 'Crops',
        list: [
          "minecraft:bamboo",
          "minecraft:beetroot_seeds",
          "minecraft:brown_mushroom",
          "minecraft:cactus",
          "minecraft:carrot",
          "minecraft:cocoa_beans",
          "minecraft:glow_berries",
          "minecraft:kelp",
          "minecraft:potato",
          "minecraft:red_mushroom",
          "minecraft:sugar_cane",
          "minecraft:sweet_berries",
          "minecraft:wheat_seeds",
          "minecraft:apple",
          "minecraft:pumpkin",
          "minecraft:apple",
          "farmersdelight:cabbage_seeds",
          "farmersdelight:onion",
          "farmersdelight:rice",
          "farmersdelight:tomato_seeds"
        ],
      },
      vanillaFlowers: {
        name: "Vanilla Flowers",
        list: [
          "minecraft:allium",
          "minecraft:azure_bluet",
          "minecraft:blue_orchid",
          "minecraft:cornflower",
          "minecraft:dandelion",
          "minecraft:lilac",
          "minecraft:lily_of_the_valley",
          "minecraft:orange_tulip",
          "minecraft:oxeye_daisy",
          "minecraft:peony",
          "minecraft:pink_tulip",
          "minecraft:poppy",
          "minecraft:red_tulip",
          "minecraft:rose_bush",
          "minecraft:sunflower",
          "minecraft:white_tulip",
          "minecraft:wither_rose",
          "minecraft:torchflower_seeds"
        ]
      },
      vanillaSaplings: {
        name: 'Vanilla Saplings',
        list: [
          "minecraft:acacia_sapling",
          "minecraft:azalea",
          "minecraft:birch_sapling",
          "minecraft:cherry_sapling",
          "minecraft:dark_oak_sapling",
          "minecraft:jungle_sapling",
          "minecraft:oak_sapling",
          "minecraft:spruce_sapling",
          "minecraft:mangrove_propagule"
        ]
      },
      vanillaFlora: {
        name: 'Vanilla Flora',
        list: [
          "minecraft:flowering_azalea",
          "minecraft:moss_block",
          "minecraft:moss_carpet",
          "minecraft:pink_petals",
          "minecraft:spore_blossom",
          "minecraft:big_dripleaf",
          "minecraft:sea_pickle",
          "minecraft:lily_pad"
        ]
      },
      mapleSaplings: {
        name: 'Maple Saplings',
        list: [
          "regions_unexplored:maple_sapling",
          "regions_unexplored:orange_maple_sapling",
          "regions_unexplored:red_maple_sapling"
        ]
      },
      magnoliaSaplings: {
        name: 'Magnolia Saplings',
        list: [
          "regions_unexplored:magnolia_sapling",
          "regions_unexplored:blue_magnolia_sapling",
          "regions_unexplored:pink_magnolia_sapling",
          "regions_unexplored:white_magnolia_sapling"
        ]
      },
      miscSaplings: {
        name: 'Misc Saplings',
        list: [
          "regions_unexplored:alpha_sapling",
          "regions_unexplored:apple_oak_sapling",
          "regions_unexplored:ashen_sapling",
          "regions_unexplored:bamboo_sapling",
          "regions_unexplored:baobab_sapling",
          "regions_unexplored:blackwood_sapling",
          "regions_unexplored:cypress_sapling",
          "regions_unexplored:dead_pine_sapling",
          "regions_unexplored:dead_sapling",
          "regions_unexplored:enchanted_birch_sapling",
          "regions_unexplored:eucalyptus_sapling",
          "regions_unexplored:flowering_sapling",
          "regions_unexplored:golden_larch_sapling",
          "regions_unexplored:joshua_sapling",
          "regions_unexplored:kapok_sapling",
          "regions_unexplored:larch_sapling",
          "regions_unexplored:mauve_sapling",
          "regions_unexplored:palm_sapling",
          "regions_unexplored:pine_sapling",
          "regions_unexplored:redwood_sapling",
          "regions_unexplored:silver_birch_sapling",
          "regions_unexplored:small_oak_sapling",
          "regions_unexplored:socotra_sapling",
          "regions_unexplored:willow_sapling"
        ]
      },
      mapleShrubs: {
        name: 'Maple Shrubs',
        list: [
          "regions_unexplored:maple_shrub",
          "regions_unexplored:orange_maple_shrub",
          "regions_unexplored:red_maple_shrub"
        ]
      },
      magnoliaShrubs: {
        name: 'Magnolia Shrubs',
        list: [
          "regions_unexplored:magnolia_shrub",
          "regions_unexplored:blue_magnolia_shrub",
          "regions_unexplored:pink_magnolia_shrub",
          "regions_unexplored:white_magnolia_shrub"
        ]
      },
      vanillaShrubs: {
        name: 'Vanilla Shrubs',
        list: [
          "regions_unexplored:acacia_shrub",
          "regions_unexplored:birch_shrub",
          "regions_unexplored:cherry_shrub",
          "regions_unexplored:dark_oak_shrub",
          "regions_unexplored:jungle_shrub",
          "regions_unexplored:oak_shrub",
          "regions_unexplored:spruce_shrub"
        ]
      },
      miscShrubs: {
        name: 'Misc Shrubs',
        list: [
          "regions_unexplored:ashen_shrub",
          "regions_unexplored:baobab_shrub",
          "regions_unexplored:blackwood_shrub",
          "regions_unexplored:cypress_shrub",
          "regions_unexplored:dead_pine_shrub",
          "regions_unexplored:dead_shrub",
          "regions_unexplored:dead_steppe_shrub",
          "regions_unexplored:enchanted_birch_shrub",
          "regions_unexplored:eucalyptus_shrub",
          "regions_unexplored:flowering_shrub",
          "regions_unexplored:golden_larch_shrub",
          "regions_unexplored:joshua_shrub",
          "regions_unexplored:kapok_shrub",
          "regions_unexplored:larch_shrub",
          "regions_unexplored:mangrove_shrub",
          "regions_unexplored:mauve_shrub",
          "regions_unexplored:palm_shrub",
          "regions_unexplored:pine_shrub",
          "regions_unexplored:redwood_shrub",
          "regions_unexplored:silver_birch_shrub",
          "regions_unexplored:small_desert_shrub",
          "regions_unexplored:socotra_shrub",
          "regions_unexplored:steppe_shrub",
          "regions_unexplored:willow_shrub"
        ]
      },
      magnoliaFlowers: {
        name: 'Magnolia Flowers',
        list: [
          "regions_unexplored:blue_magnolia_flowers",
          "regions_unexplored:pink_magnolia_flowers",
          "regions_unexplored:white_magnolia_flowers"
        ]
      },
      snowbelle: {
        name: 'Snowbelle',
        list: [
          "regions_unexplored:black_snowbelle",
          "regions_unexplored:blue_snowbelle",
          "regions_unexplored:brown_snowbelle",
          "regions_unexplored:cyan_snowbelle",
          "regions_unexplored:gray_snowbelle",
          "regions_unexplored:green_snowbelle",
          "regions_unexplored:light_blue_snowbelle",
          "regions_unexplored:light_gray_snowbelle",
          "regions_unexplored:lime_snowbelle",
          "regions_unexplored:magenta_snowbelle",
          "regions_unexplored:orange_snowbelle",
          "regions_unexplored:pink_snowbelle",
          "regions_unexplored:purple_snowbelle",
          "regions_unexplored:red_snowbelle",
          "regions_unexplored:white_snowbelle",
          "regions_unexplored:yellow_snowbelle"
        ]
      },
      miscFlowers: {
        name: 'Misc Flowers',
        list: [
          "regions_unexplored:alpha_dandelion",
          "regions_unexplored:alpha_rose",
          "regions_unexplored:aster",
          "regions_unexplored:bleeding_heart",
          "regions_unexplored:blue_lupine",
          "regions_unexplored:daisy",
          "regions_unexplored:day_lily",
          "regions_unexplored:felicia_daisy",
          "regions_unexplored:fireweed",
          "regions_unexplored:hibiscus",
          "regions_unexplored:hyacinth_flowers",
          "regions_unexplored:hyacinth_bloom",
          "regions_unexplored:tall_hyacinth_stock",
          "regions_unexplored:hyssop",
          "regions_unexplored:mallow",
          "regions_unexplored:orange_coneflower",
          "regions_unexplored:pink_lupine",
          "regions_unexplored:poppy_bush",
          "regions_unexplored:purple_coneflower",
          "regions_unexplored:purple_lupine",
          "regions_unexplored:red_lupine",
          "regions_unexplored:salmon_poppy_bush",
          "regions_unexplored:tassel",
          "regions_unexplored:tsubaki",
          "regions_unexplored:waratah",
          "regions_unexplored:white_trillium",
          "regions_unexplored:wilting_trillium",
          "regions_unexplored:yellow_lupine",
          "regions_unexplored:cactus_flower",
          "regions_unexplored:meadow_sage"
        ]
      },
      moddedMisc: {
        name: 'Modded misc flora',
        list: [
          "regions_unexplored:barrel_cactus"
        ]
      }
    }
  }
}