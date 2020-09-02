
var summaryRanges = function (nums) {
    const res = [];

    // binary search
    let l = 0;
    let len = nums.length;
    let r = len - 1;
    let m;
    let tmpL = 0;
    while (l <= len - 1) {

        m = tmpL + Math.floor((r - tmpL) / 2);
        if (m - l === nums[m] - nums[l]) {
            if (m + 1 - l !== nums[m + 1] - nums[l]) {
                res.push([nums[l], nums[m]]);
                tmpL = l = m + 1;
                r = len - 1;
            } else {
                tmpL = m + 1;
            }

        } else {
            r = m - 1;
        }

    }
    // if we prefer the general approach which takes logN, replace the upon with this block
    //   for (let num of nums) {

    //     const lastRange = res.length ? res[res.length - 1]: [];
    //     if (lastRange.length && num === lastRange[1] + 1) {
    //       lastRange[1] = num;
    //     } else {
    //       res.push([num, num]);
    //     }

    //   }

    return res.map(
        itm => itm[0] !== itm[1] ? itm.join('->') : "" + itm[0]
    );
};

let result = summaryRanges([1, 2, 3, 6, 7, 9]);
result = summaryRanges([2, 3, 6, 9]);