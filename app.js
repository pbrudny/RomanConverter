/*
    Algorithm:
    find the highest value less or equal than the number
    print the key
    substract the value from the key
    do it until number is 0
*/
const literalsMap = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
}

exports.highestLiteral = function(number) {
    let highestPair = {};

    Object.keys(literalsMap).forEach((literal) => {
        if (literalsMap[literal] <= number) {
           highestPair = {
               literal: literal,
               number: literalsMap[literal]
           };
        }
    })
    return highestPair;
}

exports.arabicToRoman = function(number) {
    let romanNotation = "";
   
    if (!Number.isInteger(number) || number <= 0) {
        return undefined;
    }
   
    while(number > 0) {
        let highestPair = this.highestLiteral(number);
        romanNotation += highestPair.literal;
        number -= highestPair.number;
    }
    return romanNotation;
}
