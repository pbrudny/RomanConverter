const assert = require('assert');
const app = require('../app.js');

describe('highestLiteral', () => {
    it('returns the highest roman literal lower or equal the number', () => {
        assert.equal(app.highestLiteral(1).literal, "I");  
        assert.equal(app.highestLiteral(7).literal, "V");
        assert.equal(app.highestLiteral(439).literal, "CD");
        assert.equal(app.highestLiteral(1000439).literal, "M");
    });
});

// describe('arabicToRoman', () => {
//     describe('single literals', () => {
//         it('returns the right roman number', () => {
//             assert.equal(app.arabicToRoman(1), "I");
//             assert.equal(arabicToRoman(5), "V");
//             assert.equal(arabicToRoman(10), "X");
//             assert.equal(arabicToRoman(50), "L");
//             assert.equal(arabicToRoman(100), "C");
//             assert.equal(arabicToRoman(500), "D");
//             assert.equal(arabicToRoman(1000), "M");
//         });
//     });

//     describe('basic numbers', () => {
//         assert.equal(arabicToRoman(2), "II");
//         assert.equal(arabicToRoman(4), "IV");
//         assert.equal(arabicToRoman(13), "XIII");
//         assert.equal(arabicToRoman(36), "XXXVI");
//         assert.equal(arabicToRoman(350), "CCCL");
//         assert.equal(arabicToRoman(1984), "MCMLXXXIV");
//     });

    // describe('big numbers', () => {
    //     assert.equal(arabicToRoman(601387386), "XIII");
    //     assert.equal(arabicToRoman(1000000000000000000), "XIII");
    // });

    // describe('edge cases', () => {
    //     assert.equal(arabicToRoman(-1), "II");
    //     assert.equal(arabicToRoman(4.5), "IV");
    //     assert.equal(arabicToRoman(0), "IV");
    //     assert.equal(arabicToRoman('nothing'), "IV");
    // });

// });