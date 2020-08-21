/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return -1;
  }
  
  let leftIdx = 0, rightIdx = nums.length - 1, midIdx;
  let tmpDebug = 0;
  while (leftIdx <= rightIdx) {
    tmpDebug++;
    // if (tmpDebug > nums.length) {
    //   break;
    // }
    midIdx = leftIdx + Math.floor((rightIdx - leftIdx)/2);
    
    console.log(leftIdx, midIdx, rightIdx);
    if (nums[midIdx] === target) {
      return midIdx;
    }
    
    let isRightGreaterThanLeft = nums[rightIdx] > nums[leftIdx];
    let isMidGreaterThanLeft = nums[midIdx] > nums[leftIdx];
    let isRightGreaterThanMid = nums[rightIdx] > nums[midIdx];
    let isRightGreaterThanTarget = nums[rightIdx] > target;
    
    let isMidGreaterThanTarget = nums[midIdx] > target;
    
    
    // 1, 2, 3, Mid 5, 6, 7
    const case0 = isRightGreaterThanLeft;
    // 5, 6, 7, 1, Mid, 3, 4
    const case1 = !isRightGreaterThanLeft && !isMidGreaterThanLeft;
    // 5, Mid, 7, 1, 2, 3, 4
    const case2 = !isRightGreaterThanLeft && !isRightGreaterThanMid;
    
    const regularCases = // Target == 1
        case0 
        // Target == 1
        || case1 
        // Target == 5
        || case2 && !isRightGreaterThanTarget
    
    if(isMidGreaterThanTarget) {

      if (
        regularCases
      )
        {
          rightIdx = midIdx - 1;
        } else {
          leftIdx = midIdx + 1;
        }
    } else {
      if (
        regularCases
      )
        {
          leftIdx = midIdx + 1;
        } else {
          rightIdx = midIdx - 1;
        }
    }
    
//     if (nums[midIdx] > target) {
//       if (nums[midIdx] > nums[minIdx] && nums[minIdx] <= target) {
//         maxIdx = midIdx - 1;
//       } else {
//         minIdx = midIdx + 1;
//       }
//       // 0
      
//     } else {
//        if (nums[midIdx] >= nums[minIdx]) {
//         // regular binary search
//         minIdx = midIdx + 1;
//       } else {
//         maxIdx = midIdx - 1;
//       }
//     } 
    
    //console.log(minIdx, midIdx, maxIdx, 2);
    
  }
  
  return -1;
};