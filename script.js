// Variables in JavaScript
let hi;
hi = "hello world";
console.log(hi);

var a = 5;
a = 11;
console.log(a);

const b = 10;
console.log(b);

// null = no value

// undefined = variable declared but not assigned a value

// Data Types in JavaScript
// Primitive Data Types
let str = "This is a string"; // String
let num = 42; // Number
let bool = true; // Boolean
let n = null; // Null
let u; // Undefined
let sym = Symbol("id"); // Symbol

// Non-Primitive Data Types
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array

// Dynamic Typing
let dynamicVar = "I am a string";
console.log(typeof dynamicVar); // string
dynamicVar = 100;
console.log(typeof dynamicVar); // number

// Type Coercion
let coercedVar = "5" + 10; // String concatenation
console.log(coercedVar); // "510"
coercedVar = "5" - 2; // Numeric subtraction
console.log(coercedVar); // 3

// Type Conversion
let strNum = "123";
let convertedNum = Number(strNum);
console.log(convertedNum); // 123
console.log(typeof convertedNum); // number

let numToStr = 456;
let convertedStr = String(numToStr);
console.log(convertedStr); // "456"
console.log(typeof convertedStr); // string


let deez = "applepie";
console.log(deez[3]);
console.log(deez.length);
console.log(deez.toUpperCase());
console.log(deez.toLowerCase());
console.log(deez.indexOf("z"));
console.log(deez.slice(0,4));
console.log(deez.replace("pie","cherry"));