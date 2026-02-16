const removeFromArray = function(arr, ...itemsToRemove) {
    const removes = new Set(itemsToRemove);
    return arr.filter(item => !removes.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
