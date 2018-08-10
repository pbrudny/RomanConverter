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

exports.arabicToRoman = function(number) {
    // find the highest value less or equal than the number
    // print the key
    // substract that key
    // do it until number is 0

    let romanNotation = "";

    while(number > 0) {
        number = 0;
        romanNotation += highestLiteral(number);
        number 
    }

}

exports.highestLiteral = function(number) {
    let highestPair = [];

    Object.entries(literalsMap).forEach((pair) => {
        if (pair[1] <= number) {
           highestPair = pair;
        }
    })
    return {
        literal: highestPair[0],
        number: highestPair[1]
    };
}