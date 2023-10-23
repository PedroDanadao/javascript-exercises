const leapYears = function(passedYear) {
    if (passedYear % 400 === 0) return true;

    if (passedYear % 100 === 0 || passedYear % 4 !== 0) return false;

    return true;
};

// Do not edit below this line
module.exports = leapYears;
