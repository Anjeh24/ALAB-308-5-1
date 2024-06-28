
//function that returns the sum of an array of numbers
let sum = 0;
function theSum(){
    const arrey1 = [1, 2, 3, 4, 5];

    for(var i=0; i < arrey1.length; i++){
    sum += arrey1[i];
    }
    return sum;
}
console.log(theSum());
