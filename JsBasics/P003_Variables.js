
/*
Variable
=============
- Variable is name of storage location where we can store the data

In Javascript 3 keywords we use to declare variable
---------------------------------------------------
1. var(older/not recommended) 2. let   3.const

var
=============
-Scope: Global scope and Functional scope
- var is fully hoisted
- Redeclaration is allowed
- Reassignment is allwed

Modern Syntax(Recommended)
============================
let
==========
-Scope: Global and Block scope
- Used for mutable data
- let is hoisted but when we declare let variable it initialize in temporal dead zone(TDZ)
so if you try to call it before initialization then you will get referenece error
-Redeclaration is not allowed
-Reassignment is allowed

const
============
-Scope: Global and Block scope
- Used for immutable data
- const is hoisted but when we declare const variable it initialize in temporal dead zone(TDZ)
so if you try to call it before initialization then you will get referenece error
-Redeclaration is not allowed
-Reassignment is not allowed

Syntax:
===========
keyword variableName=value

let id=101;
let name="Jay";


*/

console.log("----Redeclaration & reassignment Rule-----");
console.log("---------var--------");
//var: redeclaration and reassignment is allowed

//Redeclaration:declaring same name variable again and again
var id=101;
var id=201;
var id=301;

console.log(id);//301
console.log(typeof id);//number

//REassignment: variable assign with new values
id=401;
id="Jay";
console.log(id);//Jay

console.log("---------let--------");
//let:For any mutable data: Redeclaration not allowed 
let toolName="Selenium";
//Cannot redeclare block-scoped variable 'toolName'.
//let toolName="Selenium";

//Block scope: if statement/for/while loop
{
console.log("Hello");
}

console.log("ToolName: "+toolName);


//let : Reassignment is allowed
toolName="Playwright";

console.log("Latest demand for automation is for : "+toolName);
console.log("---------const--------");

//const: REdeclaration and reassignment are not allowed

const vendorName="Microsoft";
//Cannot redeclare block-scoped variable 'vendorName'.
//const vendorName="Microsoft";

//Reassignment
//vendorName="Google";//TypeError: Assignment to constant variable.

console.log("----------Scope of variables------");
/*
1.Global scope
================
-When data is declare inside Js file and outside any function,class,block is called global
scope data.
-everywhere in that file you can access that data
- var,let and const global scope is applicable

2.Block scope
============
- Any variable declared inside block { } : if block,for/while loopis called block scope variable
- let and const allowed in block scope
- inside block we can access that data

3.Function scope
===================
-Any variable declared inside function like local variable is called function scope
-var is applicable for function
-inside function we can access that data

*/

console.log("------Global scope-----");
//current scope is global

var fname="Hiteshi";
let location="US";
const emailId="hiteshi@gmail.com";

console.log(`fname is: ${fname}`);
console.log(`location is: ${location}`);
console.log(`email is: ${emailId}`);


console.log("----Global scope data through function-----");

function test1()
{
console.log(`fname is: ${fname}`);
console.log(`location is: ${location}`);
console.log(`email is: ${emailId}`);
}

//call it
test1();


//function scope--->block scope--->hoisting...next session 











