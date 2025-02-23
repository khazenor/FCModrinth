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
  isMilestone(number) {
    return this.rewardMilestones.includes(number)
  },
  nextOrCurRewardMilestoneIdx (number) {
    for (let i = 0; i < this.rewardMilestones.length; i++) {
      let milestone = this.rewardMilestones[i]
      if (milestone >= number) {
        return i
      }
    }
  },
  nextOrCurRewardMilestone (number) {
    return this.rewardMilestones[this.nextOrCurRewardMilestoneIdx(number)]
  },
  prevRewardMilestone (number) {
    if (number <= CollectConst.rewardMilestoneStart) {
      return 0
    } else {
      return this.rewardMilestones[this.nextOrCurRewardMilestoneIdx(number) - 1]
    }
  },
  rewardBasisForNumber (number) {
    if (this.isMilestone(number)) {
      return (
        this.nextOrCurRewardMilestone(number) - 
        this.prevRewardMilestone(number)
      )
    } else {
      return 0
    }
  },
  rewardAmount (startingPrice, endingPrice, length) {
    return (startingPrice + endingPrice) * length / 2
  },
  rewardForNumber (number, startingRewardPerObject, rewardIncreasePerObject) {
    let rewardBasis = this.rewardBasisForNumber(number)
    if (rewardBasis === 0) {
      return 0
    }
    let prevMilestone = this.prevRewardMilestone(number)
    let curMilestone = this.nextOrCurRewardMilestone(number)
    let prevPricePerObj = startingRewardPerObject + (
      rewardIncreasePerObject * prevMilestone
    )
    let curPricePerObj = startingRewardPerObject + (
      rewardIncreasePerObject * curMilestone
    )
    let reward = this.rewardAmount(
      prevPricePerObj,
      curPricePerObj,
      rewardBasis
    )
    return Math.floor(reward)
  },
  simpleRewards (number, startingRewardPerObject, rewardIncreasePerObject) {
    let endRewardPerObject = startingRewardPerObject + rewardIncreasePerObject * number
    let reward = this.rewardAmount(
      startingRewardPerObject,
      endRewardPerObject,
      number
    )
    return Math.floor(reward)
  }
}