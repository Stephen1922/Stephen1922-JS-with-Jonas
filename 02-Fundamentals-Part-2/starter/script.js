// Strick mode

'use strict';
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Function

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

const appleJuice=fruitProcessor(3,4);
console.log(appleJuice)
console.log(fruitProcessor(5,6));

const orangeJuice=fruitProcessor(10,12);
console.log(orangeJuice);