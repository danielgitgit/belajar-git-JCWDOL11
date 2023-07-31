//Multiplication table
let n = 2;
for (let x = 1; x <= 10; x++) {
    console.log(n, " X ", x);
}

// Check Palindrome

let strPC = "kalaks";
let bool;

if (strPC.length % 2 != 0) {
    for (let i = 0; i < (Math.floor(strPC.length / 2)); i++) {
        //for (let x = strPC.length-1; x > (Math.ceil(strPC.length/2)); x--)
        //{
        if (strPC[i] != strPC[strPC.length - 1 - i]) {
            bool = false;
            console.log(i);
            // console.log(strPC[i]);
            // console.log(strPC[x]);
            break;
        }
        else if (strPC[i] == strPC[strPC.length - 1 - i]) {
            bool = true;
        }
        //}
    }
}
else if (strPC.length % 2 == 0) {
    for (let i = 0; i < strPC.length / 2; i++) {
        //for (let x = strPC.length-1; x > strPC.length/ 2 + 1; x--)
        //{
        if (strPC[i] != strPC[strPC.length - 1 - i]) {
            bool = false;
            break;
        }
        else if (strPC[i] == strPC[strPC.length - 1 - i]) {
            bool = true;
        }
        //}
    }
}
if (bool == true) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}

//Centimeter to kilo meter
let centi = 20000;
let kilo = centi / 100000;
console.log(centi, " Centimeter equals to ", kilo, " Kilometers");

//Number to Currency IDR

let num = 1000;

let idr = new Intl.NumberFormat('de-DE', {
});

console.log("Rp.", idr.format(num), ",00");


//Remove search string

let stringMain = "hello world";
let stringSearch = "ell";

for (let i = 0; i < stringSearch.length; i++) {
    for (let x = 0; x < stringMain.length; x++) {
        console.log("i=",i," x= ",x);
        if (stringSearch[i]==stringMain[x])
        {
            let newStr=stringMain.replace(stringSearch[i],"");
            stringMain=newStr;
            break;
        }
        else{}

    }
}
console.log(stringMain);


