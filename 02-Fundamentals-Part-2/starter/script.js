// Strick mode
'use strict';
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// Function
// Function Declaration
// Function is peace of code which we can reuse again and again. It is one or more line of code. 

function logger(){
    console.log('My name is Stephen');
}
//calling , running or invoking function
logger();
logger();
logger();
function fruitProcessor(Apples, Oranges){
        console.log(Apples, Oranges)
        const juice = `Juice with ${Apples} apple and ${Oranges} oranges.`
        return juice;
}
//Return is used to send a value back from a function so it can be used outside.
const appleJuice=fruitProcessor(3,4);
console.log(appleJuice)
console.log(fruitProcessor(5,6));
const orangeJuice=fruitProcessor(10,12);
console.log(orangeJuice);

// Function Declaration vs Expression. 
// Declaration
function calcAge1(birthYear){
        return 2026-birthYear;
}

const Age1=calcAge1(1990);
console.log(Age1);

// Expression
// Here function name is not provided but function is saved in a varible
// A function without a name is called an anonymous function.
const calcAge2=function(birthYear1){
    return 2026-birthYear1
}
const Age2=calcAge2(1991);
console.log(Age2);
console.log(Age1,Age2);
