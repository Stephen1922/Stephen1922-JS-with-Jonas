/*Section 2: JavaScript Funcamentals Part1*/
      let js = 'amazing';
      if(js==='amazing') alert('JavaScript is FUN!'); 
      console.log(40+8+23-10);

      console.log('Shawn');
      console.log(2);

      let firstName="Jerome";
      console.log(firstName);
      console.log(firstName);
      console.log(firstName);

let stephen_jerome='SJ';
let $funciton = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob= 'Programmer';
let myCurrentJob="Teacher";

let job1= 'programmer';
let job2= 'teacher';

console.log(myCurrentJob);

let javaScriptIsFun=true;
console.log(javaScriptIsFun);

//console.log(typeof true);
console.log(typeof javaScriptIsFun);
//console.log(23);
//console.log(typeof 'Jonas');

let year;
console.log(year)
console.log(typeof year)
year= 1990
console.log(typeof year)


javaScriptIsFun= 'Yes!'
console.log(typeof javaScriptIsFun);

console.log(typeof null);

/*Assignment 1*/

let country='India';
let continent='Asia';
let population=1000;
console.log(continent,country,population);

let isIsland=true;
let language; 

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);


/*Different ways to declare variable*/ 

// let, var, const

let age=30;// User can reassign new value to variable. 
age= "35";


/*const lastName="Jerome";  // User cann't reassign new value to variable. 
lastName= "Nicholas";
console.log(lastName);
//const job; // Const variable cannot be empty. 
*/ 


var job="QA";// Try to avoid this. 
job='Developer';
console.log(job);

ln='jerome';
console.log(ln);
console.log(typeof ln);


// Operators


// Math Operators
const ageStephen = 2026-1990;
const ageDenica = 2026-1991;
console.log(ageStephen);
console.log(ageDenica);
console.log(ageDenica*ageStephen);

const f1="Stephen";
const f2="Jerome";

console.log(f1 +" "+f2 );

// Assignment operators
let x = 10+5; //10
x += 10// x=x+25
console.log(x);
x *= 4// x=x*25
console.log(x);
x /=20 // x=x/20;
console.log(x);


// Comparasion operators. 
// < , > , >= , <=

console.log(ageStephen > ageDenica);
console.log(ageStephen < ageDenica);
console.log(ageStephen >= 18);
console.log(ageStephen <= 40);


const now = 2037
const age1 = now - 1991;
const age2 = now - 2018;

const isFullAge = age1 >= 18;

console.log(age1, age2);
console.log(isFullAge);

let a, b;
a=b=25-10-5;// a=b=10, b =10
console.log(a,b);


/* Write your code below. Good luck! 🙂 */

const massMark=78;
const heightMark=6;
const massJohn=60;
const heightJohn=5;
const BMIMark = massMark/(heightMark*heightMark);
const BMIJohn = heightJohn/(heightJohn*heightJohn);
console.log('BMI Mark: ', BMIMark);
 console.log('BMI John: ',BMIJohn);

const markHigherBMI = BMIMark < BMIJohn;
console.log(markHigherBMI);

const first_Name= "Stephen";
const jOb= "QA";
const birth_Year= 1990;
const current_year=2026;

const Stephen1= "I'am " + first_Name + ',a ' + (current_year - birth_Year) + ' years old ' + jOb + '!';
console.log(Stephen1);

const Stephen2= `I'am ${first_Name},a ${current_year-birth_Year} years old ${jOb}!`;
console.log(Stephen2);
console.log(`Just a regular string...`);
console.log(`String with \n\
      multiple \n\
      lines`);
// if else
const personAge= 15;
if (personAge>=18){
      console.log(`Shawn can start driving license 🚗`)
}
else{
      const yearsLeft = 18-personAge;
      console.log(`Shawn is too young. Wait another ${yearsLeft} years :)`);
}

//++++++++++++++++++++++++++++++++++++
const birthYear =2020;
let century;
if(birthYear<=2000){
      century = 20;
}
else {century=21;
}
console.log(century);

const massMark1=58;
const heightMark1=6;
const massJohn1=78;
const heightJohn1=6;
const BMIMark1 = massMark1/(heightMark1*heightMark1);
const BMIJohn1 = massJohn1/(heightJohn1*heightJohn1);
if(BMIJohn1<BMIMark1){
            console.log(`Mark's BMI ${BMIMark1} is higher than John ${BMIJohn1}`);
}
else{
      console.log(`John's BMI ${BMIJohn1} is higher than Mark ${BMIMark1}`);
}

/*Type convertion and Type coercion*/ 

const inputYear = '1991';
console.log(inputYear+18);
console.log(Number(inputYear)
+18);

console.log(Number('Stephen'));
console.log(typeof NaN);

console.log(String(23),23);

// type coercion

console.log('I am ' + 23 + ' years old');
console.log('23'+'10'+3)
console.log('23'-'10'-3)
console.log('23'*'10'* 3)

let n = '1' + 1;
n = n-1;
console.log(n);

// truthy and falsy

// In javascript there are 5 falsy values as mentioned below.
//falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log('Jones');
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean(''));

const money=1040;
if(money){
      console.log("Don't spend it all ;)");
}
else{
      console.log("You should get a job!");
}

let height;
if(height){
      console.log('YAY Height is defined');
}
else {
      console.log('Height is undefined');
}

// Equality Operators:

const age3 = 17;
if(age3===18);
      console.log('You just became an adult :D');

