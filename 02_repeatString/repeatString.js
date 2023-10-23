const repeatString = function(string_repeat, number_of_repeats) {
    if (number_of_repeats < 0) return "ERROR";

    let final_string = '';

    for (let i=0; i < number_of_repeats; i++) {
        final_string += string_repeat;
    }

    return final_string;
};

// Do not edit below this line
module.exports = repeatString;
