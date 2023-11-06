function x() {
    var a = 8;
    function y() {
        console.log(a);
    }

    var a = 100;
    return y;
}

var z = x();

console.log(z);
////............some lines of code
z();



function z(){
    var b = 900;
    function x(){
        var a = 200;
        function y (){
            console.log(a,b);
        }
        y();
    }
    x();

}
z();


function outer(b){
    var a = 10;
    function inner(){
        console.log( "()()" + a, b);
    }
    return inner;

}

//outer()();
var close = outer("hello world");
close();



//-----
//()() -> calling the inner function 
//even if we use let also it will in a block function then the result will be same.
//closure is a bundle of functions along with its lexical memory 


//Function along with its lexical scope bundled together forms a closure

//data hiding and encapsulation
//if we have a variable and we want to have data privacy and other codes cannot access it


function Counter(){
var count = 10;
this.incrementCounter = function(){
    count++;
    console.log(count);
}

this.decrementCounter = function (){
    count--;
    console.log(count);
}

}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();


//disadvantages of closures
//overconsumption of memory it consumes lots of memory
//sometimes closed over variables are not garbage collected till the program expires 
//if not handled properly it can lead to memory leaks, it can freeze the browser if not handled properly
//Garbage collector is like a program in the browser/javascript engine which kind of freeze up the un utlilized memory
//in javascript engine when there is unused variable it frezze up th memory
//garbage collector and javascript engine
//browser like chrome smartly garbage collects the unused variables



console.log("Garbage Collector");


function a(){
    var x=0, u=10;
    return function b(){
        console.log(x);
    }
}

var y = a();
//...

y();

