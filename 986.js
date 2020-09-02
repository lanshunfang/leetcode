/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {

    if (!B.length || !A.length) {
        return [];
    }

    let bMin = 0;

    const findElem = (lowValue, highValue, Arr, minLeft) => {

        if (Arr[Arr.length - 1][1] < lowValue) {
            return null;
        }

        const found = [];
        let newMinLeft = 0;
        for (let i = minLeft; i < Arr.length; i++) {
            const elem = Arr[i];
            if (
                elem[0] >= lowValue && elem[0] <= highValue 
                || elem[1] <= highValue && elem[1] >= lowValue
                || elem[0] <= lowValue && elem[1] >= highValue 
                ) {
                newMinLeft = newMinLeft || i;
                found.push(elem);
            } else if (elem[0] > highValue) {
                break;
            }
        } 

        return {
            minLeft: newMinLeft,
            found: found
        };

        // let l = minLeft;
        // let r = Arr.length - 1;

        // const allSubElements = []

        // while (l <= r) {
        //     let m = l + Math.floor((r - l) / 2);
        //     while (Arr[m][0] >= lowValue && Arr[m][0] <= highValue || Arr[m][1] <= highValue && Arr[m][1] >= lowValue) {
        //         allSubElements.push(m);
        //         m++;
        //     }
        //     // m too big, go to left
        //     if (Arr[m][0] > highValue) {
        //         r = m - 1;
        //     } else {
        //         l = m + 1;
        //     }
        // }


    }

    const res = [];

    for (let a of A) {

        const summarization = findElem(a[0], a[1], B, bMin);

        if (summarization === null) {
            break;
        } else if (!summarization.found.length) {
            continue;
        } 

        bMin = summarization.minLeft;

        for (let b of summarization.found) {
            res.push([Math.max(a[0], b[0]), Math.min(a[1], b[1])]);
        }
        
    }

    return res;
};

// const final = intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]);
const final2 = intervalIntersection(
    [[4,6],[7,8],[10,17]],
    [[5,10]]
    );
// console.log(final)

console.log(final2);