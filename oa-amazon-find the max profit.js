/*
https://www.1point3acres.com/bbs/thread-661957-2-1.html

1 <= numSuppliers <= 10^5

// items left at supplier#i, 
// e.g., [3, 2, 5] means
// supplier #0 has 3 items, supplier#1 has 2 items, supplier#2 has 5 items
// if we buy the first item from supplier#0
    // we will have 3 unit profit
    // the supplier will raise the price, 
    // so that when we buy the second item from the same supplier, 
    // we only have 2 unit profit
// 0 <= i <= numSuppliers
1 <= inventory[i] <= 10^5 

// how many items we should buy
1 <= order <= sum of inventory 
*/

const findMaxProfit = (numSuppliers, inventory, order) => {
    let supplierIdx = 1;
    let maxProfit = 0;
    inventory.sort(
        (a, b) => b - a
    );
    inventory.push(0);
    while (order >= 0 && supplierIdx < inventory.length) {
        while (
            supplierIdx < inventory.length
            && inventory[supplierIdx - 1] === inventory[supplierIdx]
            ) {
            supplierIdx++;
        }
        if (inventory[supplierIdx - 1] === 0) {
            break;
        }

        let supplierMultiplier = supplierIdx;
        let diff = inventory[supplierIdx - 1] - inventory[supplierIdx];
        let localCountToOrder = diff * supplierMultiplier;
        let localProfit = inventory[supplierIdx - 1];
        if (order < localCountToOrder) {
            localCountToOrder = order;
        }
        order -= localCountToOrder;
        while (localCountToOrder > 0 && localProfit >= inventory[supplierIdx]) {
            const currentCountToTake = Math.min(supplierMultiplier, localCountToOrder);
            maxProfit += localProfit * currentCountToTake
            localProfit--;
            localCountToOrder -= currentCountToTake;
        }
        supplierIdx++;
    }

    return maxProfit;
}

let res;
res = findMaxProfit(3, [3, 2, 5], 4);
console.log(res);

res = findMaxProfit(3, [5, 5, 5], 6);
console.log(res);

res = findMaxProfit(2, [0, 0], 6);
console.log(res);

res = findMaxProfit(2, [5, 0], 6);
console.log(res);