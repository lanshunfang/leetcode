/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length || !matrix[0].length) {
        return false;
    }

    const startRowIdx = findDiagonalRange(matrix, 0, matrix.length - 1, target);
    let isFound = findInRow(matrix[startRowIdx], 0, matrix[0].length - 1, target);

    if (isFound) {
        return isFound;
    }

    return startRowIdx + 1 < matrix.length ? findInRow(matrix[startRowIdx + 1], 0, matrix[0].length - 1, target) : false;


};

var findDiagonalRange = (matrix, startRowIdx, endRowIdx, target) => {
    if (endRowIdx - startRowIdx <= 1) {
        return startRowIdx;
    }

    let midRowIdx = Math.floor((startRowIdx + endRowIdx) / 2);
    let midCol = Math.floor((matrix[0].length - 1) / 2);
    
    if (matrix[midRowIdx][midCol] > target) {
        return findDiagonalRange(matrix, startRowIdx, midRowIdx - 1, target);
    } else {
        return findDiagonalRange(matrix, midRowIdx + 1, endRowIdx, target);
    }
}

var findInRow = (row, left, right, target) => {

    const mid = Math.floor((left + right) / 2);
    if (row[mid] === target) {
        return true;
    }

    if (left >= right) {
        return false;
    }

    if (row[mid] > target) {
        return findInRow(row, left, mid - 1, target);
    } else {
        return findInRow(row, mid + 1, right, target);
    }
}

// let isFound = searchMatrix(
//     [
//         [1, 3, 5, 6, 7],
//         [2, 4, 6, 7, 10],
//         [5, 7, 9, 10, 100],
//     ],
//     10
// );

let isFound = searchMatrix(
[[1],[3],[5]],
    3
);

console.log(isFound)