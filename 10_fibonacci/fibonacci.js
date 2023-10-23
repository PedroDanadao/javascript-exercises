const fibonacci = function(numberPosition) {
    // convert any string numbers to a number
    numberPosition = Number(numberPosition);
    
    if (numberPosition < 0) return "OOPS";

    let previousNumber = 1;
    let beforePrevious = 0;
    let currentNumber = 1;

    for (let i=1; i < numberPosition; i++) {
        currentNumber = previousNumber + beforePrevious;

        beforePrevious = previousNumber;
        previousNumber = currentNumber;
    }

    return currentNumber;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
