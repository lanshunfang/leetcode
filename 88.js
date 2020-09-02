/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let lastInsertionIndex = 0;
    for (let num2 of nums2) {
        let l = lastInsertionIndex;
        let r = m;
        let middle;

        if (num2 < nums1[l]) {
            middle = l;
        } else if (num2 > nums1[m-1]) {
            middle = m;
        } else {
            while (l > r && nums1[middle] !== num2) {
                middle = Math.floor((l + r) / 2);
           
                if (num2 > nums1[middle]) {
                    l = middle + 1;
                } else if (num2 < nums1[middle]) {
                    r = middle - 1;
                }
    
            }
        }
        

        while (middle < m && nums1[middle] === num2 && nums1[middle + 1] === num2) {
            middle++;
        }

        // lastInsertionIndex = nums1[middle] === num2 ? middle + 1 : nums1[middle] > num2 ? 0 : m;
        if (lastInsertionIndex !== m) {
            for (let i = m; i > lastInsertionIndex; i--) {
                [nums1[i], nums1[i - 1]] = [nums1[i - 1], nums1[i]]
            }
        }
        
        nums1[lastInsertionIndex] = num2;

        m++;

    }
};

// const arr1 = [1, 2, 3, 3, 4, 0, 0, 0];

// merge(arr1, 5, [2, 3, 9], 3);
// const arr2 = [2, 0];
// merge(arr2, 1, [1], 1);
const arr3 = [4,5,6,0,0,0];
merge(arr3, 3, [1,2,3], 3);
console.log(arr1);