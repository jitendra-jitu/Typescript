// Basic numeric variables
var numOne = 10;
var numTwo = 20;
// Note: redeclaring with 'let numTwo:number=20;' is not allowed
// because the compiled app.js would create another 'let numTwo = 20;'
var totalSum = numOne + numTwo;
console.log("numOne =", numOne);
console.log("numTwo =", numTwo);
console.log("totalSum =", totalSum);
// Octal literal example
// var item = 0001; // ❌ invalid in strict mode
var octalItem = 1; // ✅ correct octal literal
console.log("octalItem =", octalItem, " | typeof =", typeof octalItem);
// Different number literal formats
var decimalVal = 123; // Decimal
var hexVal = 0x37CF; // Hexadecimal
var octalVal = 255; // Octal (255 in decimal)
var binaryVal = 57; // Binary (57 in decimal)
console.log("decimalVal =", decimalVal);
console.log("hexVal =", hexVal);
console.log("octalVal =", octalVal);
console.log("binaryVal =", binaryVal);
console.log("decimalVal + 10 =", decimalVal + 10);
// String to number conversion
var baseNumber = 100;
var strNumber = "10";
var convertedNumber = Number(strNumber);
console.log("baseNumber =", baseNumber);
console.log("strNumber =", strNumber);
console.log("convertedNumber =", convertedNumber);
console.log("Concatenation (baseNumber + strNumber) =", baseNumber + strNumber); // "10010"
console.log("Addition (baseNumber + convertedNumber) =", baseNumber + convertedNumber); // 110
// Variable reassignment
var data = 10000;
console.log("data (initial) =", data);
data = "jitu";
console.log("data (after reassignment) =", data);
