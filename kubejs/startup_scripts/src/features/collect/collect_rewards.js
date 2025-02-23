const CollectRewards = {
  cacheRewardMilestones () {
    let prev = CollectConst.rewardMilestoneStart
    let rewardMilestones = [prev]
    let cur = CollectConst.rewardMilestoneStart
    let temp = null
    while (cur < CollectConst.rewardMilestoneCap) {
      temp = cur
      cur = prev + cur
      prev = temp
      rewardMilestones.push(cur)
    }
    return rewardMilestones
  },
  rewardMilestoneCache: null,
  get rewardMilestones () {
    if (!this.rewardMilestoneCache) {
      this.rewardMilestoneCache = this.cacheRewardMilestones()
    }
    return this.rewardMilestoneCache
  },
  isRewardMilestone (number) {
    return this.rewardMilestones.include(number)
  }
}