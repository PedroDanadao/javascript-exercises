const reverseString = function(original_string) {
    const char_list = original_string.split('');
    char_list.reverse()
    const reversed_string = char_list.join('');

    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
