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

describe('arabicToRoman', () => {
    describe('single literals', () => {
        it('returns the right roman number', () => {
            assert.equal(app.arabicToRoman(1), "I");
            assert.equal(app.arabicToRoman(5), "V");
            assert.equal(app.arabicToRoman(10), "X");
            assert.equal(app.arabicToRoman(50), "L");
            assert.equal(app.arabicToRoman(100), "C");
            assert.equal(app.arabicToRoman(500), "D");
            assert.equal(app.arabicToRoman(1000), "M");
        });
    });

    describe('basic numbers', () => {
        it('returns the right roman number', () => {
            assert.equal(app.arabicToRoman(2), "II");
            assert.equal(app.arabicToRoman(4), "IV");
            assert.equal(app.arabicToRoman(13), "XIII");
            assert.equal(app.arabicToRoman(36), "XXXVI");
            assert.equal(app.arabicToRoman(350), "CCCL");
            assert.equal(app.arabicToRoman(1984), "MCMLXXXIV");
        });
    });

    describe('big numbers', () => {
        it('returns the right roman number', () => {
            assert.equal(
                app.arabicToRoman(30521), 
                "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMDXXI"
            );
            assert.equal(
                app.arabicToRoman(100001), 
                "MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMI"
            );
        });
    });

    // The assumption was that we deal only with positive integers
    // but still it is good to check edge cases
    describe('edge cases', () => {
        assert.equal(app.arabicToRoman(-1), undefined);
        assert.equal(app.arabicToRoman(4.5), undefined);
        assert.equal(app.arabicToRoman(0), undefined);
        assert.equal(app.arabicToRoman('nothing'), undefined);
    });

});