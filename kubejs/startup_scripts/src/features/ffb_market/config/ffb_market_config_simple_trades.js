const FfbMarketConfigSimpleTrades = {
  fc_shop: {
    name: "Farming Crossing Shop",
    icon: "minecraft:mangrove_propagule",
    simpleTrades: [
      {
        paymentNum: 4,
        products: ["minecraft:quartz"]
      },
      {
        paymentNum: 6,
        products: ["minecraft:glowstone_dust"]
      },
      {
        paymentNum: 8,
        products: [
          "minecraft:bundle",
          "minecraft:beehive",
          "minecraft:bee_spawn_egg"
        ]
      },
      {
        paymentNum: 4,
        products: [
          "minecraft:saddle",
          "minecraft:lead"
        ]
      },
      {
        productNum: 4,
        products: [
          "minecraft:emerald"
        ]
      }
    ]
  },
  blocks: {
    name: 'Quarry Trades',
    icon: "minecraft:blackstone",
    simpleTrades: [
      {
        paymentNum: 32,
        products: [
          "minecraft:ice",
          "minecraft:blackstone",
          "minecraft:end_stone",
          'minecraft:sea_lantern',
          'minecraft:shroomlight',
          'minecraft:ochre_froglight',
          'minecraft:pearlescent_froglight',
          'minecraft:verdant_froglight'
        ]
      }
    ]
  },
  deco: {
    name: 'Decor Depot',
    icon: "minecraft:magenta_dye",
    simpleTrades: [
      {
        paymentNum: 4,
        productNum: 8,
        products: [
          "minecraft:black_dye",
          "minecraft:blue_dye",
          "minecraft:brown_dye",
          "minecraft:cyan_dye",
          "minecraft:gray_dye",
          "minecraft:green_dye",
          "minecraft:light_blue_dye",
          "minecraft:light_gray_dye",
          "minecraft:lime_dye",
          "minecraft:magenta_dye",
          "minecraft:orange_dye",
          "minecraft:pink_dye",
          "minecraft:purple_dye",
          "minecraft:red_dye",
          "minecraft:white_dye",
          "minecraft:yellow_dye"
        ]
      }
    ]
  },
  flora: {
    name: 'Garden Stand',
    icon: "minecraft:poppy",
    simpleTrades: [
      {
        paymentNum: 8,
        productNum: 4,
        products: CollectLists.flora.subCollections.crops.list
      },
      {
        productNum: 4,
        products: [
          "minecraft:crimson_fungus",
          "minecraft:warped_fungus"
        ]
      },
      {
        paymentNum: 8,
        products: [
          "minecraft:chorus_fruit"
        ]
      },
      { // not in collection
        paymentNum: 32,
        productNum: 4,
        products: [
          'minecraft:vine',
          'minecraft:weeping_vines',
          'minecraft:twisting_vines'
        ]
      }
    ]
  },
  farm: {
    name: 'Animal Range',
    icon: "minecraft:leather",
    simpleTrades: [
      { // meats
        paymentNum: 2,
        productNum: 8,
        products: [
          "minecraft:beef",
          "minecraft:chicken",
          "minecraft:mutton",
          "minecraft:porkchop",
          "minecraft:rabbit",
          "farmersdelight:ham",
          "minecraft:rabbit_foot",
          "minecraft:feather"
        ]
      },
      {
        paymentNum: 2,
        products: [
          "minecraft:leather",
          "minecraft:rabbit_hide",
          "minecraft:ink_sac"
        ]
      }
    ]
  },
  mobs: {
    name: "Mob Drops",
    icon: "minecraft:rotten_flesh",
    simpleTrades: [
      {
        productNum: 4,
        products: ["minecraft:arrow"]
      },
      {
        paymentNum: 2,
        products: [
          "minecraft:string",
          "minecraft:slime_ball"
        ]
      },
      {
        paymentNum: 4,
        products: [
          "minecraft:rotten_flesh",
          "minecraft:bone",
          "minecraft:bow"
        ]
      },
      {
        paymentNum: 8,
        products: [
          "minecraft:spider_eye",
          "minecraft:gunpowder",
          "minecraft:prismarine_shard",
          "minecraft:prismarine_crystals",
          "minecraft:glow_ink_sac"
        ]
      },
      {
        paymentNum: 24,
        products: [
          "minecraft:ender_pearl",
          "minecraft:blaze_rod",
          "minecraft:ghast_tear",
          "minecraft:phantom_membrane"
        ]
      }
    ]
  },
  collection: {
    name: 'Collection Helper',
    icon: "minecraft:writable_book",
    simpleTrades: [
      {
        paymentNum: 64,
        products: CollectEntity.allCollectibleSpawnEggs.filter(
          v => !['minecraft:bee_spawn_egg'].includes(v)
        )
      }
    ]
  }
}