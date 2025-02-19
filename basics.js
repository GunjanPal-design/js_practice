//Write a program to print "Hello, World!" to the console.
/*console.log("Hello,World!");

//Create a program that takes two numbers as input and print their sum.
var a = 10;
var b = 30;
console.log(a + b);

//Write a pr(ogram to find whether the number is odd or even.
function fun(a) {
    if (a % 2 == 0) {
        console.log('It is an even number');
    }
    else {
        console.log("It is an odd number");
    }
}
fun(19)

//Implement a program to find the factorial of a number
function fact(a) {
    let n = 1;
}

//2. Conditionals and Loops
//Write a program to check if a number is positive,negative or zero.
function fun(a) {

    if (a > 0) {
        console.log("It is a positive number");

    }
    else if (a < 0) {
        console.log("It is a negative number");
    }
    else {
        console.log("The number is zero");
    }
}
fun(-3)


//Print all numbers from 1 to 100 that are divisible by 3 and
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Numbers divisible by 3 and 5", i)
    }
}

//Write a program to generate multiplication table of a given number
function fun(a) {
    for (i = 1; i <= 10; i++) {
        mul = a * i;
        console.log(a + "*" + i + "=", mul);
    }
}
fun(8)

//Write a program to calculate the sum of numbers from 1 to n
function fun(n) {
    var s = 0;
    for (let i = 0; i <= n; i++) {
        s = s + i;
    }
    console.log(s);

}
fun(60)

//String
//Count the number of vowels and consonants in a string



function count(str) {
    let Vowels = 0;
    let Cons = 0;

    for (let i = 0; i < str.length; i++) {
        let chr = str[i]
        if ("aeiou".includes(chr)) {
            Vowels++;
        } else if (chr >= 'a' && chr <= 'z') {
            Cons++;
        }
    }

    console.log("Number of vowels:", Vowels);
    console.log("Number of consonants:", Cons);
}

count("Helo");


//Reverse a string without using a built in function
function rev(str) {
    let strrev = str.split('').reverse('').join('');
    console.log(strrev);
}
rev("Hello")
//Find the first non-repeating character in a string*/
let str = "happygunjan";
let res = null;
for (let chr of str) {
    if (str.indexOf(chr) === str.lastIndexOf(chr)) {
        res = chr;
        break;  
    }
}
console.log(str);
console.log(res);






//Find the largest and smallest number in an array
/*function largest(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}

const num1 = [10, 15, 18, 20, 23];
const result = largest(num1);

console.log("The largest element in the array is:" + result);

// print the smallest number
function smallest(arr) {
    let smallestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}

const num2 = [10, 15, 18, 20];
const res = smallest(num2);

console.log("The smallest element in the array is:" + result);
*/
// //Largest number in another way
// const arr = [23, 55, 21, 87, 56];
// let maxValue = Math.max(...arr);
// console.log(maxValue);



// //Write  a program to sort an array in ascending order

// const points = [40, 100, 1, 5, 25, 10];
// const a = points.sort(function (a, b) { return a - b });
// console.log(a);

// //Write a program to sort an array in descending order
// const points2 = [45, 67, 54, 98, 1];
// const b = points2.sort(function (a, b) { return (b - a) });
// console.log(b);



// //Remove duplicate elements from the array
// const arr5 = [1, 2, 2, 3, 4, 4, 5, 6, 6];
// const noduplicate = [...new Set(arr5)];
// console.log(noduplicate);








