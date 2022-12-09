const booleanToWord = (boolean) => {
    if (boolean) {
         return 'yes'
    } 
    if (boolean === true) {
        return 'yes'
    }
    if (boolean === false) {
        return 'no'
    }
};

module.exports = booleanToWord;
