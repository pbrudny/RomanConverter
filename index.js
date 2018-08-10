const app = require('./app.js')
const number = process.argv[2];

console.log("The Roman notation of", number, "is", app.arabicToRoman(parseInt(number)));