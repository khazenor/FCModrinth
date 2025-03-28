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
    let percent = CollectPlayerProgress.categoryCompletionPercent(event, categoryId)
    let subCategoryRewardText = ''
    if (CollectListHelper.isSubCollectionId(categoryId)) {
      subCategoryRewardText = Text.translate(
        CollectTransHelper.messageKey('subCatReward'),
        StrHelper.cleanFloor(
          CollectRewards.subCollectionCompletionReward(categoryId)
        )
      )
    }

    EventHelpers.tellPlayer(event, Text.translate(
      CollectTransHelper.messageKey('genericCollected'),
      CollectTransHelper.categoryName(categoryId),
      StrHelper.cleanFloor(collectedNum),
      StrHelper.cleanFloor(collectionSize),
      StrHelper.cleanFloor(percent),
      subCategoryRewardText
    ))
  },
  nextMilestoneRewardMessage(event, collectionId) {
    let nextMilestone = CollectPlayerProgress.nextMilestone(event, collectionId)
    let nextReward = CollectPlayerProgress.nextMilestoneReward(event, collectionId)
    let nextRewardText = Text.translate(
      CollectTransHelper.messageKey('milestone'),
      StrHelper.cleanFloor(nextMilestone),
      StrHelper.cleanFloor(CollectPlayerProgress.numUntilNextMilestone(event, collectionId)),
      StrHelper.cleanFloor(nextReward)
    )
    return nextRewardText
  },
  isNextMilestoneCollectionCompletion (event, collectionId) {
    let nextMilestone = CollectPlayerProgress.nextMilestone(event, collectionId)
    let collectionLength = CollectCaches.categoryLists[collectionId].length
    return nextMilestone === collectionLength

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
    EventHelpers.tellPlayer(
      event,
      Text.translate(
        CollectTransHelper.messageKey('categoryCompleted'),
        CollectTransHelper.categoryNameCaps(categoryId)
      )
    )
    let certificateId = CollectTransHelper.certificateId(categoryId)
    EventHelpers.tellPlayer(
      event,
      Text.translate(
        CollectTransHelper.messageKey('categoryCompletedCongrats'),
        Text.translate(TransHelper.itemName(certificateId))
      )
    )
    EventHelpers.givePlayerItemStack(
      event, certificateId, 1
    )
    MilesTicketEventMethods.givePlayerMilesTickets(
      event,
      CollectMilestoneMethods.rewardForCollectionCompleted(categoryId)
    )
  },
  handleMilestoneReached (event, categoryId) {
    let collectedNum = CollectLogger.playerCollectionByCategory(event, categoryId).length
    EventHelpers.tellPlayer(
      event,
      Text.translate(
        CollectTransHelper.messageKey('milestoneReached'),
        CollectTransHelper.categoryName(categoryId),
        StrHelper.cleanFloor(collectedNum)
      )
    )
    MilesTicketEventMethods.givePlayerMilesTickets(
      event,
      CollectMilestoneMethods.rewardForCategoryMilestone(collectedNum, categoryId)
    )
  },
  handleSubCollectionCompleted (event, subCollectionId) {
    EventHelpers.tellPlayer(
      event,
      Text.translate(
        CollectTransHelper.messageKey('categoryCompleted'),
        CollectTransHelper.categoryNameCaps(subCollectionId)
      )
    )
    MilesTicketEventMethods.givePlayerMilesTickets(
      event,
      CollectRewards.subCollectionCompletionReward(subCollectionId)
    )
  }
}