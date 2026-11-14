
/*
Variable
===========
- Name of storage location is called variable

- Js uses keyword to declare variable
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
3. template string (back tick) `Hello` ES6

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

const frameworkName="Playwright";


let info1=frameworkName+" is WebUI automation Framework";
console.log(info1);

let info2=`${frameworkName} is WebUI and API automation Framework`;
console.log(info2);

console.log("-------------");

/*
undefined
=============
If any variable declare without initialization then type and value
of that variable will become undefined

In Js we dont have any default value


*/

let marks;
console.log(marks);//undefined
console.log(typeof marks);//undefined

console.log("---------------");
/*
null
===========
null means unknown type if data or something we have store intentionally as null data

what is data type of null?
---------------------------
- lagacy bug available in Js language
- type of null will be always object type

"null is a primitive value, but typeof null returns "object" because of a 
historical legacy behavior." 
typeof null returns "object" because of a historical bug in JavaScript's 
original implementation. Although null is a primitive value, this behavior 
was retained for backward compatibility, so it is now considered a legacy 
behavior of the language.

*/

let studentAddress=null;
console.log(studentAddress);//null
console.log(typeof studentAddress);//object

studentAddress="UK";
console.log(studentAddress);//UK
console.log(typeof studentAddress);//string

//empty data
let data="";
console.log("Data is: "+data);
console.log(typeof data);//string



console.log("------ES6 version data types-----");
/*
6.bigInt
7.symbol
*/

let num=789809809809807867875;
console.log(num);//789809809809807900000
console.log(typeof num);//number
//for bigint number declaration add n as suffix value
num=789809809809807867875n;
console.log(num);
console.log(typeof num);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

let x=1.7976931348623157e+308;
console.log(x);
console.log(typeof x);

x=17976931348623157308n;
console.log(x);
console.log(typeof x);



console.log("-----------------");
/*
Symbol
===========
- It is applicable for Js Object
- It is used to create unique keys in Js Object

-Object is any real world entity which has state and Behavior
- Object is instance of class
- Object is nonprimitive

In Js we have 4 ways to declare object
==============================
1. Object literal: Key:value
2. Class level Object (ES6)

3. Constructor function(ES6)
4. Prototype based object

*/

console.log("----Object Literal----");

//{}

let user={};
console.log(user);//{} empty object
console.log(typeof user);//object

//Array is Js dynamic Object: []
let studentId=[101,102,103];
console.log(studentId);
console.log(typeof studentId);//object

//Object literal with key and value
let person={
  id:1010,
  fname:"Sarang"
}


console.log(person);//{ id: 1010, fname: 'Sarang' }
console.log(typeof person);//object

//Operations: CRUD-->create/add, read, upadate ,delete

/*
To read any value
=================
1. dot notation syntax
------------------------
ObjectName.keyname

2.square bracket notation syntax
---------------------------------
objectName['key'];//string key

*/

//accessing current properties of Object
console.log(person.id);
console.log(person.fname);

console.log(person[`id`]);
console.log(person['fname']);

//Add new Property in Object: dot notation
person.address="Mumbai";
console.log(person);//{ id: 1010, fname: 'Sarang', address: 'Mumbai' }

//modify any property of object
person.address="Pune";
person.fname="Sneha";
console.log(person);//{ id: 1010, fname: 'Sneha', address: 'Pune' }

//delete any property
delete person.address;
console.log(person);//{ id: 1010, fname: 'Sneha' }

delete person.id;
console.log(person);//{ fname: 'Sneha' }


console.log("---------Symbol--------");
//assign unique key to object we have symbol type

let profile1=Symbol("QA");
console.log(profile1);//Symbol(QA)
console.log(typeof profile1);//symbol

/*
Scenario: Same employee working on two different application and I wanted to assign as per app 
different id to same employee
*/

let employee={
  empName:"Sameer",
  profile:"QA",
  project:["Project1","Project2"]
}

console.log(employee);

//assign id to Sameer: Application(HR)
employee.id=111;


//assign id to Sameer: Application(Payroll)
employee.id=222;
console.log(employee);

//we can set unique ids only using symbol type
//declared two symbol type variable
let hrId=Symbol("id");
let payrollId=Symbol("id");

//assign it to employee object
employee[hrId]=111;
employee[payrollId]=222;

console.log(employee);
console.log(employee[hrId]);
console.log(employee[payrollId]);

console.log("---------");

/*
Scenario2: we wanted assign unique id for two different students
*/

let student1={
  name:"Kavitha",
  subject:"Testing"
}

let student2={
  name:"Amit",
  subject:"Testing"
}


console.log(student1);
console.log(student2);

//assign unique id for both student
let stdId=Symbol("id");// unique Key
student1[stdId]=101;
student2[stdId]=201;

console.log(student1);
console.log(student2);













































