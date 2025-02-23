const CollectHelper = {
  isIdNewCollectible (event, objectId) {
    if (CollectListHelper.isACollectible(objectId)) {
      let playerCollection = CollectLogger.playerCollection(event)
      if (!playerCollection.includes(objectId)) {
        return true
      }
    }
    return false
  },
  tellPlayerCollectionProgress(event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let collectionSize = CollectCaches.categoryLists[categoryId].length
    let percent = collectedNum * 100 / collectionSize
    let subCategoryRewardText = ''
    if (CollectListHelper.isSubCollectionId(categoryId)) {
      subCategoryRewardText = Text.translate(
        'collect.message.subCatReward',
        StrHelper.cleanFloor(CollectRewards.simpleRewards(
          collectionSize,
          CollectListHelper.startingRewardForSubCollection(categoryId),
          CollectListHelper.rewardIncreaseForSubCollection(categoryId)
        ))
      )
    }

    EventMethods.tellPlayer(event, Text.translate(
      'collect.generic.collectedMessage',
      CollectCaches.categoryNames[categoryId],
      StrHelper.cleanFloor(collectedNum),
      StrHelper.cleanFloor(collectionSize),
      StrHelper.cleanFloor(percent),
      subCategoryRewardText
    ))
  },
  milestoneRewardMessage(event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let nextRewardText = ''
    let nextMilestone = CollectRewards.nextOrCurRewardMilestone(collectedNum)
    let nextReward = CollectRewards.rewardForNumber(
      nextMilestone,
      CollectLists[categoryId].startingRewardPerObject,
      CollectLists[categoryId].rewardIncreasePerObject
    )
    nextRewardText = Text.translate(
      'collect.message.milestone',
      StrHelper.cleanFloor(nextMilestone),
      StrHelper.cleanFloor(nextMilestone - collectedNum),
      StrHelper.cleanFloor(nextReward)
    )
    return nextRewardText
  }
}