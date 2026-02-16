const sumAll = function(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b) ||
        !Number.isInteger(a) || !Number.isInteger(b) ||
        a < 0 || b < 0)
        { return "ERROR"; }
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    // Apply the arithmetic series formula
    const sum = ((max-min + 1) * (min + max))/2;

    return sum
};

// Do not edit below this line
module.exports = sumAll;
