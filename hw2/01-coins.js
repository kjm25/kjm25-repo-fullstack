/** Exercise 01 - Coins **/

// Add your function here
const calculateChange = function coinsPerAmount(total) {
  total = Math.round(total * 100); //convert to cents (float that only uses int bits) to avoid floating point rounding
  if (total > 10000) {
    return "Error: the number is too large";
  } else if (total < 0) {
    return "Error: the number is negative";
  }

  let result = "";
  const coin_values = [
    { value: 100, single: "dollar", plural: "dollars" },
    { value: 25, single: "quarter", plural: "quarters" },
    { value: 10, single: "dime", plural: "dimes" },
    { value: 5, single: "nickel", plural: "nickels" },
    { value: 1, single: "penny", plural: "pennies" },
  ];

  for (let coin of coin_values) {
    const number_needed = Math.floor(total / coin.value);
    total -= coin.value * number_needed;
    if (number_needed > 0 && result !== "") result += ",";
    if (number_needed === 1)
      result = `${result} ${number_needed} ${coin.single}`;
    else if (number_needed > 1)
      result = `${result} ${number_needed} ${coin.plural}`;
  }

  return result;
};

// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
