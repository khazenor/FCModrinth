const CollectTestCodes = {
  testRewardBasisForNumber () {
    console.log('CollectRewards.rewardMilestones')
    console.log(CollectRewards.rewardBasisForNumber(46))
    for (let milestone of CollectRewards.rewardMilestones) {
      console.log(CollectRewards.rewardBasisForNumber(milestone))
    }
  }
}