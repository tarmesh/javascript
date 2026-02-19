"use strict"; //treat all js code as newer JS version

alert(3+3);//this will not work as alert is not defined in node js environment but it will work in browser environment


console.log( 3 
  + 
  3) //code readability is very important and we should always try to write code in a way that it is easy to read and understand for other developers.

console.log("Tarmesh") //string data type


let name  ="tarmesh" //string data type
let age = 21 //number data type
let isLoggedIn = false //boolean data type
let state; //undefined data type
let nullVar = null //null data type


// primitive data Types:
// string => "" or ''
// number => 2 to power 53
// bigInt => greater than 2 to power 53
// boolean => true or false
// undefined => variable which is declared but not assigned any value
// null => variable which is declared and assigned null value
// symbol => unique identifier which is used to create unique property keys for objects

console.log(typeof age); //number

console.log(typeof null); //object => this is a bug in javascript as null is not an object but it is treated as an object in javascript due to historical reasons.
console.log(typeof undefined); //undefined



// non-primitive data type:
// object
// array
// function
