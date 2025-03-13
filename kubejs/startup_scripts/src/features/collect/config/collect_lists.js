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
  fishing: {
    name: 'Aquarium',
    message: 'New sea life caught!',
    startingRewardPerObject: 1,
    rewardIncreasePerObject: 0.04,
    icon: 'minecraft:cod',
    subCollections: {
      vanilla: {
        name: 'Vanilla fishes',
        list: [
          "minecraft:cod",
          "minecraft:salmon",
          "minecraft:tropical_fish",
          "minecraft:pufferfish"
        ]
      },
      trap: {
        name: 'Trap sea life',
        list: [
          'crabbersdelight:clam',
          'crabbersdelight:coral_fragments',
          'crabbersdelight:shrimp',
          'crabbersdelight:clawster',
          'crabbersdelight:crab',
          'minecraft:nautilus_shell'
        ]
      }
    }
  },
  cooking: {
    name: 'Cooking',
    message: 'New dish cooked!',
    certificateName: 'Chef Certificate',
    startingRewardPerObject: 1,
    rewardIncreasePerObject: 0.04,
    icon: 'farmersdelight:cooking_pot',
    subCollections: {
      sweets: {
        name: 'Sweets',
        list: [
          'farmersdelight:apple_pie',
          'farmersdelight:sweet_berry_cheesecake',
          'farmersdelight:chocolate_pie',
          'farmersdelight:sweet_berry_cookie',
          'farmersdelight:honey_cookie',
          'farmersdelight:melon_popsicle',
          'farmersdelight:glow_berry_custard'
        ]
      },
      filipSweets: {
        name: 'Filipino Sweets',
        list: [
          'ubesdelight:ube_cake',
          'ubesdelight:leche_flan_feast',
          'ubesdelight:halo_halo_feast',
          'ubesdelight:milk_tea_ube_feast',
          'ubesdelight:milk_tea_ube',
          'ubesdelight:halo_halo',
          'ubesdelight:cookie_ube',
          'ubesdelight:cookie_ginger'
        ]
      },
      salads: {
        name: 'Salads',
        list: [
          'farmersdelight:fruit_salad',
          'farmersdelight:mixed_salad',
          'farmersdelight:nether_salad'
        ]
      },
      burgers: {
        name: 'Burgers',
        list: [
          'farmersdelight:hamburger',
          'delightfulburgers:bacon_burger',
          'delightfulburgers:chicken_burger',
          'delightfulburgers:double_patty_burger',
          'delightfulburgers:basic_burger'
        ]
      },
      sandwiches: {
        name: 'Sandwiches',
        list: [
          'farmersdelight:egg_sandwich',
          'farmersdelight:chicken_sandwich',
          'farmersdelight:bacon_sandwich',
          'delightfulsandwich:ham_sandwich',
          'delightfulsandwich:bacon_and_egg_sandwich',
          'delightfulsandwich:cooked_salmon_sandwich',
          'delightfulsandwich:tomato_and_lettuce_sandwich',
          'delightfulsandwich:cooked_cod_sandwich',
          'delightfulsandwich:mutton_sandwich'
        ]
      },
      soups: {
        name: 'Soups',
        list: [
          'farmersdelight:beef_stew',
          'farmersdelight:bone_broth',
          'farmersdelight:chicken_soup',
          'farmersdelight:vegetable_soup',
          'farmersdelight:fish_stew',
          'farmersdelight:pumpkin_soup',
          'farmersdelight:baked_cod_stew'
        ]
      },
      asian: {
        name: 'Asian Foods',
        list: [
          'farmersdelight:dumplings',
          'farmersdelight:fried_rice',
          'farmersdelight:cabbage_rolls'
        ]
      },
      sushi: {
        name: 'Sushi and Nigiris',
        list: [
          'farmersdelight:kelp_roll',
          'farmersdelight:cod_roll',
          'farmersdelight:salmon_roll',
          'vegandelight:tofish_roll',
          'vegandelight:smoked_tofish_roll',
          'farmersdelight:rice_roll_medley_block'
        ]
      },
      filipDishes: {
        name: 'Filipino Dishes',
        list: [
          'ubesdelight:sinangag',
          'ubesdelight:kinilaw',
          'ubesdelight:lumpia',
          'ubesdelight:tosilog',
          'ubesdelight:bangsilog',
          'ubesdelight:sisig',
          'ubesdelight:bulalo',
          'ubesdelight:arroz_caldo',
          'ubesdelight:mechado'
        ]
      },
      filipLeaf: {
        name: 'Filipino Leaf Feasts',
        list: [
          'ubesdelight:lumpia_feast',
          'ubesdelight:leaf_feast_ensaymada',
          'ubesdelight:leaf_feast_pandesal',
          'ubesdelight:leaf_feast_pandesal_ube',
          'ubesdelight:leaf_feast_hopia_munggo',
          'ubesdelight:leaf_feast_hopia_ube',
          'ubesdelight:leaf_feast_cooked_rice',
          'ubesdelight:leaf_feast_fried_rice',
          'ubesdelight:leaf_feast_sinangag'
        ]
      },
      dinners: {
        name: 'Dinners',
        list: [
          'farmersdelight:steak_and_potatoes',
          'farmersdelight:mutton_wrap',
          'farmersdelight:bacon_and_eggs',
          'farmersdelight:stuffed_potato',
          'farmersdelight:mushroom_rice',
          'farmersdelight:ratatouille'
        ]
      },
      noodles: {
        name: 'Noodles',
        list: [
          'farmersdelight:pasta_with_meatballs',
          'farmersdelight:pasta_with_mutton_chop',
          'farmersdelight:vegetable_noodles',
          'farmersdelight:squid_ink_pasta',
          'farmersdelight:noodle_soup'
        ]
      },
      bbq: {
        name: 'BBQ',
        list: [
          'farmersdelight:barbecue_stick',
          'farmersdelight:grilled_salmon',
          'farmersdelight:roasted_mutton_chops'
        ]
      },
      largeMeals: {
        name: 'Large Meals',
        list: [
          'farmersdelight:roast_chicken_block',
          'farmersdelight:stuffed_pumpkin_block',
          'farmersdelight:honey_glazed_ham_block',
          'farmersdelight:shepherds_pie_block'
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
          "farmersdelight:tomato_seeds",
          'delightful:salmonberries',
          'vegandelight:soybean',
          'ubesdelight:lemongrass_seeds',
          'ubesdelight:ginger',
          'ubesdelight:garlic',
          'ubesdelight:ube'
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
  },
  mineral: {
    name: 'Mineral Museum',
    message: 'New mineral mined!',
    certificateName: 'Mineral Museum Certificate',
    startingRewardPerObject: 1,
    rewardIncreasePerObject: 0.02,
    icon: 'minecraft:raw_iron',
    subCollections: {
      vanillaBlocks: {
        name: 'Vanilla Blocks',
        list: [
          "minecraft:cobblestone",
          "minecraft:mossy_cobblestone",
          "minecraft:cobbled_deepslate",
          "minecraft:diorite",
          "minecraft:granite",
          "minecraft:andesite",
          "minecraft:sandstone",
          "minecraft:red_sandstone",
          "minecraft:calcite",
          "minecraft:dripstone_block",
          "minecraft:pointed_dripstone",
          "minecraft:smooth_basalt",
          "minecraft:tuff",
          "minecraft:obsidian"
        ]
      },
      ore: {
        name: 'Ore',
        list: [
          "minecraft:coal",
          "minecraft:raw_copper",
          "create:raw_zinc",
          "minecraft:raw_iron",
          "minecraft:amethyst_shard",
          "minecraft:raw_gold",
          "minecraft:redstone",
          "minecraft:lapis_lazuli",
          "minecraft:diamond"
        ]
      },
      regions: {
        name: 'Regions Unexplored',
        list: [
          "regions_unexplored:argillite",
          "regions_unexplored:chalk",
          "regions_unexplored:mossy_stone",
          "regions_unexplored:raw_redstone_block",
          "regions_unexplored:hanging_prismarite",
          "regions_unexplored:large_prismarite_cluster",
          "regions_unexplored:blackstone_cluster",
          "regions_unexplored:prismarite_cluster",
          "regions_unexplored:pointed_redstone",
          "regions_unexplored:redstone_bud",
          "regions_unexplored:redstone_bulb"
        ]
      },
      create: {
        name: 'Create',
        list: [
          'create:crimsite',
          'create:asurine',
          'create:limestone',
          'create:ochrum',
          'create:scoria',
          'create:scorchia',
          'create:veridium'
        ]
      }
    }
  }
}