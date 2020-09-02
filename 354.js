/**
 * @param {number[][]} envelopes
 * @return {number}
 */
/*
  LCS - Longest common string
*/
var maxEnvelopes = function (envelopes) {
    if (!envelopes.length) {
        return 0;
    }
    envelopes.sort(
        (a, b) => {
            return a[0] === b[0] ? a[0][0] - b[0][0] : a[0] - b[0];
        }
    );
    // let lastExpansionElement = envelopes[0];
    const lcsBuckets = [[envelopes[0]]];

    for (let i = 1; i < envelopes.length; i++) {
        let currentElement = envelopes[i];
        let j = 0;
        for (; j < lcsBuckets.length; j++) {

            let bucket = lcsBuckets[j] = lcsBuckets[j] || [];
            let isSameWidth;
            while (
                (isSameWidth = bucket[bucket.length - 1][0] === currentElement[0])
                && bucket.length > 1
            ) {
                bucket.pop();
            }

            if (isSameWidth) {
                break;
            }

            if (bucket[bucket.length - 1][1] >= currentElement[1]) {
                bucket.push(currentElement);
                break;
            }

        }
http://www.360doc.com/content/18/0127/06/47456469_725429035.shtml
        if (j === lcsBuckets.length && currentElement[1]) {
            lcsBuckets.push([currentElement]);
        }
    }

    return lcsBuckets.length;

};



// console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]));
// console.log(maxEnvelopes([]));
// console.log(maxEnvelopes([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]));
// console.log(maxEnvelopes([[30, 50], [12, 2], [3, 4], [12, 15]]));
// console.log(maxEnvelopes([[46,89],[50,53],[52,68],[72,45],[77,81]]));
// console.log(maxEnvelopes([[30, 50], [12, 2], [3, 4], [12, 15]]));
// console.log(maxEnvelopes([[1, 15], [7, 18], [7, 6], [7, 100], [2, 200], [17, 30], [17, 45], [3, 5], [7, 8], [3, 6], [3, 10], [7, 20], [17, 3], [17, 45]]));
console.log(maxEnvelopes([[15,8],[2,20],[2,14],[4,17],[8,19],[8,9],[5,7],[11,19],[8,11],[13,11],[2,13],[11,19],[8,11],[13,11],[2,13],[11,19],[16,1],[18,13],[14,17],[18,19]]));