1.// //Sum of two numbers
// function sum(a, b) {
//     return a + b;
// }
// let result = sum(5, 3);
// console.log(result);


2.// //maximum number

// let arr = [5, 8, 2, 9];
// let max = Math.max(...arr);
// console.log(max);

3.// //PAllindrome
// function pallindrome(str) {
//     let strreverse = str.split('').reverse('').join('');
//     return str === strreverse;
// }
// let str = "hello";
// console.log(pallindrome(str));

4.//print the strings from array
// let arr = [4, 3, 6, "hello", "gunjan", 3];
// let arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "string") {
//         arr1.push((arr[i]));
//     }
// }
// console.log(arr1);

//Another way
// let arr = [4, 3, 6, "hello", "gunjan", 3];
// let filterData = arr.filter(item => typeof item !== "string")
// {
//     console.log(filterData);
// }

5.//Reverse a string
// function reverse(str) {
//     let reversestr = str.split('').reverse().join('');
//     return reversestr;
// }
// let output = reverse("hello")
// console.log(output);

6.//return array with only even numbers 
// function array(number) {

//     return number.filter(item => item % 2 == 0);
// }
// let output = array([5, 3, 8, 16, 4])
// console.log(output);


7.//Factorial of a number
// function factorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {

//         return number * factorial(number - 1);

//     }

// }
// let output = factorial(5)
// console.log(output);

8.//prime number
function Prime(number) {
    if (number <= 1) {
        return false
    }
    for (i = 2; Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }

    }
    return true

}
let output = Prime(15)
console.log("testssss")
console.log(output);


9.//







