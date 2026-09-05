function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

/**sintaxis*/
/**DECLARANDO VARIABLES */
//LET: valores fijos modificables, const: valores constantes, strings van entre comillas, numeros no van entre comillas, booleanos son true o false.  
let x = 5;
let y = 6;
/** computar valores */
let z = x + y;
function f2() {
    document.getElementById("var").innerHTML = z;
}
//operadores aritmeticos: +, -, *, /, %, **, ++, --, =, +=, -=, *=, /=, %=, **= 
//string "John" + " " + "Doe"
// = operador de asignacion, == operador de igualdad
//tipos variables js
// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();

//funciones; bloques de codigo que se ejecutan cuando son invocados y se reutilizan
// sintaxis
/* function nombreFuncion(parametros) {
    // codigo a ejecutar
} */
// Standard Function invocable
function multiply(a, b) {
  return a * b;
}

// Function Expression, se alamcena en variable y se puede usar como funcon 
const multiply = function(a, b) {
  return a * b; 
}; // usan punto y coma al final
