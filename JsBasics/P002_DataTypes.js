
/*
Variable
===========
- Name of storage location is called variable

- Js uses keywrod to declare variable
---------------------------
1.var(older Js) Modern Js: 1.let (Mutable)   2.const (Immutable)

Syntax
========
keyword variableName=value
Examples
----------
let x=100;
let name="Jay";

Datatype
============
- Datatype will define that what type of data we can store into variable
- Js support two types of data types
--------------------
1.Primitive(Value based)
2.NonPrimitive( referenced based)

1.Primitive
===============
1.number
2.string
3.boolean
4.undefined
5.null

Added after ES6
6.bigInt (NA automation)
7.Symbol (NA automation)
----------------------

2.NonPrimitive
===================
Everything in Js is dynamic object
-Object
-Array

Note:
In Js datatype is not required to define/declare variable

typeof operator
=================
- typeof operator explains about data type used to store data into variable
*/

console.log("--------number type------------");
/*
In Js every numeric data is number type (+ve int, -ve int, decimal number)
*/

let num1=100;
console.log(num1);//100
console.log("Number 1 is: "+num1);//Number 1 is: 100
console.log(typeof num1);//number



let num2=-100;
console.log(num2);//-100
console.log("Number 2 is:",num2);//Number 2 is:  -100
console.log(typeof num2);//number



let num3=67.89;
console.log("Number 3 is: "+num3);
console.log(typeof num3);//number


console.log("--------boolean type------------");
/*
boolean means true/false value
*/

let isActive=true;
console.log("Is participants are active?: "+isActive);
console.log(typeof isActive);//boolean

let isEmployeed=false;
console.log("Is participants employeed?: "+isEmployeed);
console.log(typeof isEmployeed);//boolean

console.log("--------string type------------");
/*
In Js string plays two roles
1 string is primitive datatypes
2.string is dynamic object

string is collection of characters
Ways to declare string
=========================
1. single quoat 'Hello'
2. double quoat "Hello"
ES6
3. template string (back tick) `Hello`

Note:
In java we have char type 'single character'
In Js we dont have char type 
every single character also its string type

*/

let fname="Himali";
console.log("First name is: "+fname);
console.log(typeof fname);//string


let location='UK';
console.log("Location is: "+location);
console.log(typeof location);//string


let email=`himali@gmail.com`;
console.log("Email id is: "+email);
console.log(typeof email);//string


let ch='A';
console.log(ch);//A
console.log(typeof ch);//string

//tamplete string: multiple lines statments: API payload we use it

let toolName="Playwright";
//read data from variable
console.log("Hello Everyone! Welcome to learn "+toolName);
console.log("Hello Everyone! Welcome to learn",toolName);

/*
While reading external data into tampletestring
use syntax: ${variableName}
*/
let trainerName='Priyanka';

const profile=`My name is ${trainerName},completed Master in Computers 
and having over 18years experience in IT. 
I am ISTQB certified Tester.`;

console.log(profile);
let year=2026;

let payload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${year},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`

console.log(payload);
console.log(typeof payload);//JSON string in API testing












