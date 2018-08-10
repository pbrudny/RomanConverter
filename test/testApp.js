const assert = require('assert');
const app = require('../app.js');

describe('arabicToRoman', () => {
    describe('single literals', () => {
        assert.equal(app.arabicToRoman(1), "I", "Must be equal");
        // assert.equal(arabicToRoman(5), "V", "Must be equal");
        // assert.equal(arabicToRoman(10), "X", "Must be equal");
        // assert.equal(arabicToRoman(50), "L", "Must be equal");
        // assert.equal(arabicToRoman(100), "C", "Must be equal");
        // assert.equal(arabicToRoman(500), "D", "Must be equal");
        // assert.equal(arabicToRoman(1000), "M", "Must be equal");
    });

    // describe('basic numbers', () => {
    //     assert.equal(arabicToRoman(2), "II", "Must be equal");
    //     assert.equal(arabicToRoman(4), "IV", "Must be equal");
    //     assert.equal(arabicToRoman(13), "XIII", "Must be equal");
    //     assert.equal(arabicToRoman(36), "XXXVI", "Must be equal");
    //     assert.equal(arabicToRoman(350), "CCCL", "Must be equal");
    //     assert.equal(arabicToRoman(1984), "MCMLXXXIV", "Must be equal");
    // });

    // describe('big numbers', () => {
    //     assert.equal(arabicToRoman(601387386), "XIII", "Must be equal");
    //     assert.equal(arabicToRoman(1000000000000000000), "XIII", "Must be equal");
    // });

    // describe('edge cases', () => {
    //     assert.equal(arabicToRoman(-1), "II", "Must be equal");
    //     assert.equal(arabicToRoman(4.5), "IV", "Must be equal");
    //     assert.equal(arabicToRoman(0), "IV", "Must be equal");
    //     assert.equal(arabicToRoman('nothing'), "IV", "Must be equal");
    // });

});