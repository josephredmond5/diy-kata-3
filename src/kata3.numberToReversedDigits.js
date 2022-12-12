const numberToReversedDigits = (number) => {
  const newArr = number.toString().split("").reverse();
  return newArr.map((num) => parseInt(num));
};

module.exports = numberToReversedDigits;
