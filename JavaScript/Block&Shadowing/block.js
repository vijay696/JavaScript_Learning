
var a = 100;
let b = 150;
const c = 200;

x();
function x(){
    var a = 10;
    let b = 20;
    const c = 30;


    console.log(a);
    console.log(b);
    console.log(c);
}



    console.log(a);
    console.log(b);
    console.log(c);

//shadowing
console.log("shadowing");
var y = 100;
function z(){
    var y=30;
    console.log(window.y);
    window.y =20;
}
z();
console.log(y);


//illegal shadowing
console.log(" ");
console.log("Illegal Showding");
let k = 10;
{
    let k = 20;
    {
        let k = 30;
        console.log("inside block level2 " + k);
        {
            let k = 40;
        console.log("inside block level3 " + k);
        }
    }

    console.log("inside block level1 " + k);
}
console.log("inside Script Scope " + k);

//illegal shadowing is allowed in case of var if variable is in global space otherwise syntax error(Uncaught SyntaxError: Identifier 'k' has already been declared ) will throw
//illegal shadowing follows lexical scope pattern

//let and const are stored in a seperate memory stack --> under block 

//if you assign a key with var ex: var a = 10; inside a block and try to access the same value outside the block the value will be printed is the of the block scope
//but if you use function block and and invoke a function then the var value assinged in global space will be use i.e a=100;
//if you assing using window.a and this.a then that can be shadowed
//assigning the values of the inside block shadowing the outside/global scope value is known as shadowing 

//in case of let and const if use only block chain also it will not allow to print the block scope values it will be assinged in a seperate memory space called block scope

//let and const will have seperate memory space called Script