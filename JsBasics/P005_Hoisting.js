show();

/*
Hoisting
===============
-Hoisting is JavaScript’s default behavior of moving declarations to 
the top of the current scope (either the global scope or a function 
scope) before code execution.
-Hoisting means declaration process first before execution

Note/Rule: Js is guiding you for modern Js that declare,initialize and then call data


In Js variables and functions are hoisted
- Var and function declaration are fully hoisted

- let and const, Anonymous function and arrow function are not fully hoisted

Modern Js syntax is part of temporal dead zone(TDZ), so before initialization if you try to 
call any variable and function you will get error


What is temporal dead zone
================================
*/

//call
show();
//test1();//ERROR: ReferenceError: Cannot access 'test1' before initialization

//test2();//ReferenceError: Cannot access 'test2' before initialization

//var is fully hoisted
//test3();//TypeError: test3 is not a function: arrow function

//test4(); //TypeError: test4 is not a function


console.log(id);//undefined
var id=101;
console.log(id);//101

console.log("-----------");

//let 
//console.log(x);//from TDZ: ReferenceError: Cannot access 'x' before initialization
let x=100;
console.log(x);//100

console.log("-----------");
//console.log(msg);//from TDZ ReferenceError: Cannot access 'msg' before initialization
const msg="Hello";
console.log(msg);


console.log("---Function hoisting----------");
//function declaration type is fully hoisted

function show()
{
    console.log("Function declaration is calling....");
    
}

show();


console.log("----------Modern syntax with let and cost not fully hoisted-----");

//Anonymous
let test1=function()
{
    console.log("Anonymous function is calling");
    
}

test1();

//arrow
const test2=()=>{console.log("Arrow function is calling....")}

test2();

//var type modern function

var test3=()=>{console.log("var type function calling.....")}

test3();

var test4=function()
{
    console.log("Hello Everyone");
    
}

test4();