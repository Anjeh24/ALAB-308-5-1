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


// function that returns average of array
let tot = 0;
function theAvg(){
    const arrey2 = [2, 3, 5, 6];
    for (j = 0; j < arrey2.length; j++){
        tot += arrey2[j];
        
    }
    return tot / arrey2.length;
}
console.log(theAvg());//4

//returning longest string in array

let strArr = ['boy', 'girl', 'berries'];
function longstWrd(){
    let longstWrd = " ";
    for (k = 0; k < strArr.length; k++) {
        if(typeof strArr[k] === "string" && strArr[k].length > longstWrd.length) { // compares length of every word/string
            longstWrd = strArr[k]; // assigns word to variable if longer than other words.
        }
    }
    return longstWrd;
}

console.log(longstWrd());  //credit; geekforgeeks

//function to return an array of strings that are longer than a given number in the array. 

let mixedArr = ['in', 'to', 'cat', 'bubbles', 2];
function weirdArr(){
     let newArr = [];
     for (l=0; l < mixedArr.length; l++) {
        if(typeof mixedArr[l] === "string" && mixedArr[l].length > mixedArr[4]){
             newArr.push(mixedArr[l]);
        }
     }
     return newArr;
}
console.log(weirdArr());