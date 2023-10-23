const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
    let result = 0;

    for (i of numArray) {
        result += i;
    }

    return result
};

const multiply = function(numArray) {
    let result = 1;

    for (i of numArray) {
        result *= i;
    }

    return result;
};

const power = function(num, pow) {
    let result = 1;

    for (i=0; i < pow; i++) {
        result *= num;
    }

    return result;
};

const factorial = function(num) {
    result = 1;

    for (i=num; i > 1; i--) {
        result *= i;
    }

    return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
