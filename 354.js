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
    let lastValidElement = envelopes[0];
    const lcsBucket = [lastValidElement[1]];

    for (let i = 1; i < envelopes.length; i++) {
        if (envelopes[i][0] === lastValidElement[0] || envelopes[i][1] === lastValidElement[1]) {
            continue;
        }
        lastValidElement = envelopes[i];
        const h = lastValidElement[1];

        for (let j = 0; j <= lcsBucket.length; j++) {
            if (lcsBucket[j] >= h || j === lcsBucket.length) {
                lcsBucket[j] = h;
                break;
            }
        }
    }

    return lcsBucket.length;

};

// console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]));
console.log(maxEnvelopes([]));
console.log(maxEnvelopes([[4, 5], [4, 6], [6, 7], [2, 3], [1, 1]]));