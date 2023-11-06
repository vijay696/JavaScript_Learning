

console.log(" start here");

setTimeout(function cb(){
    console.log("cb");
}, 5000);

console.log(" end here ");

let startDate= new Date().getTime();
let endDate= startDate;
while(endDate < startDate + 10000){
    endDate = new Date.getTime();

}

console.log("while expires");