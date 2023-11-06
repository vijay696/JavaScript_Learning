console.log("Namaste Javascript");


a();
b();
//anonymous function
//First Class Funcions in Javascript
//function Statement vs function expression vs function declaration

// function statement aka function declaration

function a(){

    console.log("a called");
}

a();

//function Expression

var b = function xyz(){
    console.log(" b called");
}

b();
xyz();

//Differnce betwenn function statement and function expression is hoisting.

//Anonymous function - doesnot have its own identity and are useful where functions are used as values in the ex: in the above

//function () {
 //   console.log(" anonymous function");
//
//}

//NAmed function expression

//First Class Function  - the ability to use function as values/Ability to be used like values

//Arrow Functions

//things learned
 
/*

1.  What is Function Statement ?
		A.  A normal function that we create using Naming convention.
		For Ex  -  function xyz(){
		                      console.log("Function Statement");
		                 }

		2.  What is Function Expression ?
		A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
		For Ex - var a = function(){
		                      console.log("Function Expression");
		              }

		3.  What is Anonymous Function ?
		A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
		For Ex - function(){
		               }

		4.  What is Named Function Expression ?
		A.  A function with a name is known as Named Function Expression.
		For Ex - var a = function xyx(){
		                      console.log("Names Function Expression");
		               }

		5.  Difference b/w Parameters and Arguments ?
		A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
		 For Ex - function ab( param1, param2 ){
		                        console.log("
		                }
		 & When we call this function & pass a variabel in this ( ) that is our Arguments
		 For Ex - ab( 4, 5 );

		6.  What is First Class Function Or First class citizens?
		A.   The Ability of use function as value,
		*     Can be passed as an Argument,
		*     Can be executed inside a closured function &
		*     Can be taken as return form.
		 For Ex - var b = function(param){
		                       return function xyz(){
		                               console.log(" F C F ");
		                       }
		               } 

		7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.
*/