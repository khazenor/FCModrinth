const FfbMarketConfigSimpleTrades = {
  fc_shop: {
    name: "Farming Crossing Shop",
    icon: "minecraft:mangrove_propagule",
    simpleTrades: [
      {
        products: ['minecraft:diamond']
      },
      {
        products: [
          'minecraft:spruce_fence',
          'minecraft:spruce_fence_gate',
          'minecraft:spruce_hanging_sign'
        ]
      },
      {
        products: ['minecraft:spruce_leaves'],
        productNum: 3
      },
      {
        products: [
          'minecraft:spruce_planks',
          'minecraft:spruce_pressure_plate',
          'minecraft:spruce_sapling'
        ],
        payment: 'minecraft:spruce_sign',
      }
    ]
  },
  flora_shop: {
    name: "Garden Stand",
    icon: "minecraft:poppy",
    simpleTrades: [
      {
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
        ],
        productNum: 8,
        paymentNum: 4
      },
      {
        products: [
          'minecraft:spruce_slab',
          'minecraft:spruce_stairs'
        ],
        payment: 'minecraft:stone_button',
        paymentNum: 10
      },
      {
        products: ['minecraft:diamond'],
        paymentNum: 15
      },
      {
        products: ['minecraft:diamond'],
        paymentNum: 50
      },
      {
        products: ['minecraft:stone_button'],
        paymentNum: 125
      },
      {
        products: ['minecraft:spruce_stairs'],
        paymentNum: 120
      }
    ]
  }
}