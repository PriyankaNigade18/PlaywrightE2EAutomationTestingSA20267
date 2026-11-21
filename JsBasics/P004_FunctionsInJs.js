/*
Function
=============
- Group of statements which perform some functionality that is called function

Javascript support two types function
====================================
1. Function declaration
2. Function Expression
        2.1. Anonymous function: function declare without name
        2.2. Arrow function :shorthand function
*/

console.log("----function declaration-----");


function show()
{
  console.log("This is function declaration is calling....");
    
}

//call
show();
console.log(typeof show);//function
//Function.name: string,Returns the name of the function.
console.log(show.name);//show




console.log("----Anonymous function-----");


let test1=function()
            {
                console.log("This is Anonymous function is calling...");
                
            }

//call
test1();
console.log(typeof test1);//function
console.log('Name of function:'+test1.name);//test1


console.log("----Arrow function-----");

let test2=()=>{console.log("This is Arrow function is calling....");}   
            


//call
test2();
console.log(typeof test2);//function
console.log("Name of function: "+test2.name);//test2





