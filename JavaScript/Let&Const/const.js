



let a = 9;

console.log(a);

var b = 7;

//let is used in place of variable where you cannot define another variable with same name

//let can be declared and assigned the values in the later stage of code ex: let a;  a= 10;

//if you use const keyword for a variable along with it you must declare an value ex: const a = 1000; if you dont assign the value the const will throw an syntax error, the programme will not run 

//let and const are deckared inside the temporal dead zone which will be seen inside a Script context in the source

//temporal dead zone is time since when the let variable is hpisted till it is initiated some value 

//when variables are in temporal dead zone you cannot assign values to them

//different types of error 1. Reference Error(  you cannot access it, not defined, undefined

// 2. Syntax Error (Mising the initalizer , if syntax is not properly closed)
//
// 3. Type Error ( if const is not correctly declared )
//