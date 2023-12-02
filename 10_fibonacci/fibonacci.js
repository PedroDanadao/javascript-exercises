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

const fibonacciReduce = function (numberPosition) {
    numberPosition = Number(numberPosition);

    if (numberPosition < 0) return "OOPS";

    let beforePrevious = 0;

    const positionsArray = [...Array(numberPosition -1).keys()];

    result = positionsArray.reduce((accumulator, current) => {
        let currentMax = beforePrevious + accumulator;
        beforePrevious = accumulator;
        return currentMax;
    }, 1)

    return result;
}

fibonacci(4);

// Do not edit below this line
module.exports = fibonacciReduce;
