//Sort Array

let xTry = [5, 6, 7, 8, 9, 2, 3, 8, 10, 11, 2, 3];
function sortingArray(x) {
    let xMax = 0;
    let xMin = 9999999999;
    let xAvg = 0;

    for (let i = 0; i < x.length - 1; i++) {
        if (x[i] > xMax) {
            xMax = x[i];
        }
        else { }

        if (x[i] < xMin) {
            xMin = x[i];
        }
        else { }
        xAvg = xAvg + x[i];
    }

    console.log("MAX :", xMax);
    console.log("MIN :", xMin);
    console.log("AVG :", Math.round(xAvg / x.length));
}

sortingArray(xTry);

//Concatenate commas and AND
let wordsTry = ["aji", "moon", "mona", "joko", "jenni", "moana", "mariska", "kirina", "hasibuan"];

function commasAnd(words) {
    let finalString;
    for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            finalString = words[i];
        }

        else if (i != 0 && i < words.length - 1) {
            finalString = finalString + " , " + words[i];
        }
        else if (i == words.length - 1) {
            finalString = finalString + " and " + words[i];
        }
    }
    return finalString
}
console.log(commasAnd(wordsTry));

//Split function with no method
let stringNormies = "Hello World who are you";


function split(stringNorm) {
    let arrayWords = [""];
    for (var i = 0; i < stringNorm.length; i++) {
        if (stringNorm[i] !== " ") {
            arrayWords[arrayWords.length - 1] += stringNorm[i];
        }
        else if (arrayWords[arrayWords.length - 1]) {
            arrayWords.push("");
        }

    }
    console.log(arrayWords);
}
split(stringNormies);

//Summation of two arrays

array1 = [1, 2, 3, 4];
array2 = [2, 3, 4, 5];

function summArray(x, y) {
    let z = [];
    let failString = "Array Length are not Equal, cannot sum!"
    if (x.length == y.length) {
        for (let i = 0; i < x.length; i++) {
            z.push(x[i] + y[i]);
        }
        return z;
    }
    else if (x.length != y.length) {
        return failString;
    }
}

console.log(summArray(array1, array2));

//Function add element
let elementInsert = 10;

let arrayOfElements = [6, 7, 8, 9, 0, 2, 1];

function addElement(array, x) {
    let checkBool;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != x) {
            checkBool = true;
        }
        else if (array[i] == x) {
            checkBool = false;
            break;
        }
    }

    if (checkBool == true) {
        array.push(x);
        return array;
    }
    else if (checkBool == false) {
        let failStringz = "Element already exists in array!";
        return failStringz;
    }
}

console.log(addElement(arrayOfElements, elementInsert));

//Remove odd numbers

function oddRemover(array)
{
    arrayNew=[];
    for(let i=0;i<array.length;i++)
    {
        if(array[i]%2==0)
            arrayNew.push(array[i]);
        else if(array[i]%2!=0)
            {}
    }
    return arrayNew;

}
let arrayOfRandoms = [1,3,4,5,6,7,8,9,4,6,8];

console.log(oddRemover(arrayOfRandoms));