var a=10;

function b(){

    var x= 100;

    console.log(x);

}

console.log(window);

console.log(window.a);

console.log(a);

console.log(this);

console.log(this.a);

console.log(a.this);

//console.log(x);

//when ever a program is executed an global variable along with global execution space and this keyword is created and attached with it.

// this === window  --> true 

//javascript engine assumes window keyword before the global space variables  Ex:  console.log(a)  ==  console.log(window.a)
