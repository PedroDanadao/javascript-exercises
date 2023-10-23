const palindromes = function (checkString) {
    let safeString = removePunctuation(checkString);
    safeString = safeString.toLowerCase()

    // these two variables will be used to facilitate code reading
    const ssLength = safeString.length;
    const ssMaxIndex = ssLength - 1

    const midPosition = Math.floor( (ssLength - 1) / 2 );

    for (let i=0; i < midPosition; i++) {
        let charI = safeString[i];
        let otherEndChar = safeString[ssMaxIndex - i];

        if (charI !== otherEndChar) return false;
    }

    return true;
};

function removePunctuation(passedString) {
    return passedString.replace(/[\.,?!: ]/g, "");
}

palindromes("raccar!");

// Do not edit below this line
module.exports = palindromes;
