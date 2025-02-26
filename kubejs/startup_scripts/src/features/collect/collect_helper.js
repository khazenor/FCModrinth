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
        StrHelper.cleanFloor(
          CollectRewards.subCollectionCompletionReward(categoryId)
        )
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
  nextMilestoneRewardMessage(event, collectionId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, collectionId).length
    let nextRewardText = ''
    let nextMilestone = CollectMilestoneMethods.nextMilestoneForCollection(collectionId, collectedNum)
    let nextReward = CollectMilestoneMethods.rewardForCategoryMilestone(nextMilestone, collectionId)
    nextRewardText = Text.translate(
      'collect.message.milestone',
      StrHelper.cleanFloor(nextMilestone),
      StrHelper.cleanFloor(nextMilestone - collectedNum),
      StrHelper.cleanFloor(nextReward)
    )
    return nextRewardText
  },
  categoryCompleted (event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let collectionSize = CollectCaches.categoryLists[categoryId].length
    return collectedNum === collectionSize
  },
  milestoneReached (event, collectionId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, collectionId).length
    let milestones = CollectCaches.milestonesForCollection(collectionId)
    return milestones.includes(collectedNum)
  },
  handleCollectionCompleted (event, categoryId) {
    EventMethods.tellPlayer(
      event,
      Text.translate(
        'collect.message.categoryCompleted',
        CollectCaches.categoryNames[categoryId].toUpperCase()
      )
    )
    MilesTicketEventMethods.givePlayerMilesTickets(
      event,
      CollectMilestoneMethods.rewardForCollectionCompleted(categoryId)
    )
  },
  handleMilestoneReached (event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    let collectionName = CollectCaches.categoryNames[categoryId]
    EventMethods.tellPlayer(
      event,
      Text.translate(
        'collect.message.milestoneReached',
        collectionName,
        StrHelper.cleanFloor(collectedNum)
      )
    )
    MilesTicketEventMethods.givePlayerMilesTickets(
      event,
      CollectMilestoneMethods.rewardForCategoryMilestone(collectedNum, categoryId)
    )
  },
  handleSubCollectionCompleted (event, subCollectionId) {
    EventMethods.tellPlayer(
      event,
      Text.translate(
        'collect.message.categoryCompleted',
        CollectCaches.categoryNames[subCollectionId]
      )
    )
    MilesTicketEventMethods.givePlayerMilesTickets(
      event,
      CollectRewards.subCollectionCompletionReward(subCollectionId)
    )
  }
}