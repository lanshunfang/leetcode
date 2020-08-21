/*
[]
[1, 2, 3, null, null, 5]
[1]
[1,2]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

    // bfs
    const queue = [root];
    const res = [];
    while (queue.length) {
        let topPeek = queue[0];
        if (topPeek) {
            queue.push(topPeek.left);
            queue.push(topPeek.right);
        }
        topPeek = queue.shift();

        if (topPeek) {
            res.push(topPeek.val);
        } else if (queue.length) {
            res.push(null);
        }
    
    }

    let final = [];

    let lastDigit = res.length - 1;
    for (let i = lastDigit; i >= 0; i--) {
        
        lastDigit = i;
        if (res[i]) {
            break;
        }
    }
    
    return res.filter((e, i) => i <= lastDigit).join(',');
};

//serialize(null)

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

    if (!data[0]) {
        return null;
    }

    data = data.split(',');

    if (!data.length) {
        return null;
    }

    let root = new TreeNode(+data[0]);

    appendChildren(root, 1, 0, data);

    return root;
};

var appendChildren = (parentNode, level, order, data) => {
    const levelStart = 1 << level;

    if (!parentNode || levelStart > data.length) {
        return;
    }
    
    const leftValue = data[levelStart + order - 1];
    const rightValue = data[levelStart + order];
    parentNode.left = !!leftValue ? new TreeNode(+leftValue) : null;
    parentNode.right = !!rightValue ? new TreeNode(+rightValue) : null;

    appendChildren(parentNode.left, level + 1, order, data);
    appendChildren(parentNode.right, level + 1, order + 2, data);

}

const final = deserialize(serialize({val: 1, left: {val: 2}, right: null}))
// const final = deserialize(serialize({val: 1, left: null, right: {val: 2, left: {val: 5, left: null,},}}))
// const final = deserialize('1,2,3,,,4,5')
console.log(final)
