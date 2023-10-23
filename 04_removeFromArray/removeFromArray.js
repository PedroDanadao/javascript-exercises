const removeFromArray = function(passedArray) {
    const args = Array.from(arguments);
    let itemsToRemove = args.slice(1);

    const finalArray = []

    outer: for (item of passedArray) {
        for (itr of itemsToRemove){
            if (itr === item) continue outer;
        }

        finalArray.push(item);
    }

    return finalArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;

