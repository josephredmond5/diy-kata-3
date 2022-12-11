const numberToReversedDigits = (num) => {
    const numString = num.toString();
    const reverseDigits = [''];
    for(let i = numString.length - 1; i >= 0; i--) {
        reverseDigits.push(numString[i]);
    }
    return reverseDigits;
};

module.exports = numberToReversedDigits;
