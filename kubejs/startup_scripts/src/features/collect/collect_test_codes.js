const CollectTestCodes = {
  testRewardBasisForNumber () {
    console.log('CollectRewards.rewardMilestones')
    console.log(CollectRewards.rewardBasisForNumber(46))
    for (let milestone of CollectRewards.rewardMilestones) {
      console.log(CollectRewards.rewardBasisForNumber(milestone))
    }
  },
  testRewards () {
    console.log('CollectRewards.rewardMilestones')
    console.log(CollectRewards.rewardForNumber(46, 1, 0.1))
    for (let milestone of CollectRewards.rewardMilestones) {
      console.log(CollectRewards.rewardForNumber(milestone, 1, 0.1))
    }
  }
}