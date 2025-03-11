const CollectLists = {
  entities: {
    name: 'Animal Patting',
    message: 'New animal patted!',
    startingRewardPerObject: 1,
    rewardIncreasePerObject: 0.05,
    icon: 'minecraft:allay_spawn_egg',
    subCollections: {
      water: {
        name: "Water",
        list: [
        "minecraft:squid",
        "minecraft:dolphin",
        "minecraft:cow",
        'minecraft:sheep',
        'minecraft:pig'
        ]
      },
      desert: {
        name: "Desert",
        list: [
          "minecraft:camel",
          "minecraft:sniffer"
        ]
      }
    }
  }
}