//Part 1
//function that returns the sum of an array of numbers
let sum = 0;
function theSum(){
    const arrey1 = [1, 2, 3, 4, 5];

    for(var i=0; i < arrey1.length; i++){
    sum += arrey1[i];
    }
    return sum;
}
console.log(theSum());//15

let tot = 0;
function theAvg(){
    const arrey2 = [2, 3, 5, 6];
    for (j = 0; j < arrey2.length; j++){
        tot += arrey2[j];
        
    }
    return tot / arrey2.length;
}
console.log(theAvg());//4
