const sumAll = function(num1, num2) {
    if (typeof(num1) !== "number" || typeof(num2) !== "number") return "ERROR";

    if (num1 < 0 || num2 < 0) return "ERROR";

    const maximum = Math.max(num1, num2);
    const minimum = Math.min(num1, num2);

    let sum = 0;
    for (let i=minimum; i <= maximum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
