//Check it is an even number

function even(n) {
    if (n % 2 == 0) {
        console.log("It is an even number");
    }
}
even(8)

//Check it is an odd number
function odd(n) {
    if (n % 2 != 0) {
        console.log("It is an odd number");
    }
}
odd(1)

//Array multiply by 2
let arr = [1, 6, 7, 8, 10];
for (let i = 0; i < arr.length; i++) {
    mul = arr[i] * 2;
    console.log(mul);
}


// Compare data types
function data(a, b) {
    if (a == b) {
        console.log("a is equal to b");
    }

    else {
        console.log("a is not equal to b");
    }
}


data(10, 10)

//Compare data types
function data1(a, b) {
    if (a === b) {
        console.log("a is equal to b along with type");
    }

    else {
        console.log("a is not equal to b");
    }
}


data1(10, 10)

//Stars pattern
function star(x) {
    for (let i = 1; i <= x; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row += "*"
        }
        console.log(row);
    }

}
star(5)


//palindrome number
function Palindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {

        if (str[i] != str[len - 1 - i]) {
            console.log('It is not a palindrome');
            return;
        }
    }
    console.log('It is a palindrome');
}
Palindrome("hey")



// //Prime number
//  Prime Number
function prime(val) {
    if (val % 3 != 0 && val % 2 != 0 || val == 2 || val == 5) {
        console.log("It is a prime number");
    }
    else {
        console.log("It is not a prime number");
    }
}
prime(1)


















































































