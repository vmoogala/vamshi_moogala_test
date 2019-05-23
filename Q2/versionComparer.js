//Constants
const IS_GREAT = "IS_GREAT";
const IS_LESS = "IS_LESS";
const IS_EQUAL = "IS_EQUAL";

/*
 * This function takes two accepts 2 version string as input
 * and returns whether one is greater than, equal,
 * or less than the other.
 */
const versionComparer = (ver1, ver2) => {
  //Checking for undefined values
  if (!ver1 || !ver2) {
    throw "Some values are missing";
  }

  switch (compareValues(ver1, ver2)) {
    case IS_GREAT:
      return `${ver1} is greater than ${ver2}`;
      break;
    case IS_LESS:
      return `${ver1} is less than ${ver2}`;
      break;
    default:
      return `${ver1} is equal to ${ver2}`;
  }
};

/*
 * This function takes two string versions and returns strings
 * which says which number is greater.
 */
const compareValues = (num1, num2) => {
  let numberPart1;
  let numberPart2;
  let decimalPart1;
  let decimalPart2;

  if (num1 == num2) {
    return IS_EQUAL;
  }

  // Defaulting these to num1/num2 as they can
  // return undefined for some cases
  numberPart1 = Number(num1.substring(0, num1.indexOf("."))) || num1;
  numberPart2 = Number(num2.substring(0, num2.indexOf("."))) || num2;

  if (numberPart1 > numberPart2) {
    return IS_GREAT;
  } else if (numberPart1 < numberPart2) {
    return IS_LESS;
  } else {
    decimalPart1 = getDecimalPart(num1);
    decimalPart2 = getDecimalPart(num2);
    return compareValues(decimalPart1, decimalPart2);
  }
};

/*
 * This function returns the decimal part from a string
 * eg. passing "1.2" will return "2", and passing "1.2.2" will return "2.2"
 */
const getDecimalPart = num => {
  if (num.indexOf(".") !== -1) {
    return num.substring(num.indexOf(".") + 1);
  } else {
    return "0";
  }
};

module.exports = { versionComparer, getDecimalPart };
