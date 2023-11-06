var x = 1 ;
a();
b();

console.log(x);

function a (){

    var x = 10;
    console.log(x);
}

function b(){

    var x = 100;
    console.log(x);
}

//Javascript is an synronous single threaded language where the execution takes places line by line

//when the execution starts in the memory phase var x will be having the special value undefined inotial along with the function a (its code ) and function b(its code)

//once coming to execution phase it will assign the var x = 1 which is in Global space

// and come to function a where it will again create the local execution context inside which function a wil be executed // similar to bfunction as well

// initiall call stack will have Global Execution Context(GEC)

//function A will be added and then popped out from call stack

//function B will be addded and then popped out from the call stack

//Once console.log(x) is executed in line no 5 there will be no further action to be performed as a result the Call Stack will pop up the Global Execution Context as well




console.log(1);

setTimeout(() => {
    console.log(2)
}, 1000);

setTimeout(() => {
    console.log(3)
}, 0);


console.log(4);

console.log(5);