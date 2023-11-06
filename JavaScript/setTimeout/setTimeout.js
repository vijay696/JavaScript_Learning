function x(){
    for (let i = 1; i <= 5; i++){
        setTimeout(function(){
            console.log(i);
    }, i*1000);
}
console.log("namaste Javascript");

}
x();

////if case if we want to use var only
function z(){
    for(var i = 1; i <=5; i++){
function close(z){
    setTimeout(function(){
        console.log("var"+ " " +z);
}, z * 1000);
    }
    close(i);
}

console.log("javascript");
}
z();

//if we use var insted of let the closure function will reference to same memory space allocated for var i whose value is 6 now
//after 1 sec it will search for the reference value i whose value is 6 so it will print 6 as value 5 times in the console

//if we use let it will allocate a seperate memory in the block scope so in the block it will create 6 different memory space
