function a(){

    var b=10;

    c();

    function c(){
        console.log(b);

    }
}
a();


//whenever an function is invoked and execution space is created along with the lexical memoory also created inside call stack

//lexical memory points to to memory space of it lexical parent along with lexical memory

//Global execution space has the lexical memory whose parent memory in null

//the carrying of the lexical memory from the parents is known as SCOPE CHAIN 

//SCOPE CHAIN = LEXICAL MEMORY