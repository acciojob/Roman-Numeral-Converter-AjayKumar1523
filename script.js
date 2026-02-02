function convertToRoman(num) {
  if (num === 0) return "";

  const values = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let i = 0; i < values.length; i++) {
    const symbol = values[i][0];
    const value = values[i][1];

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

// do not edit below this line
module.exports = convertToRoman;
