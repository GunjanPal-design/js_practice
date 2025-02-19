//Spread operator
// const arr = [2, 5, 6, 3, 7]
// const arr2 = [4, 9, 4, 6, 3]
//
// const total = [...arr,...arr2];
// console.log(total);

// //rest operator
// function Hello(...value) {
//     console.log("print the numbers", value)
// }
// Hello(6, 7, 4, 8)


// //Destructuring
// var obj = {
//     name: "Gunjan",
//     roll: 23,
//     Height: 156
// }
// const { name } = obj;
// const roll = obj.roll;
// console.log(name);
// console.log(roll);


//map
//Make changes in new array
// const arr3 = [5, 7, 9, 3, 5];
// arr3.map((x, index) => {
//     console.log(x, index);
// });

// //example 2
// // const users = [
// //     { name: 'Alice', age: 25 },
// //     { name: 'Bob', age: 30 },
// //     { name: 'Charlie', age: 35 }
// // ];

// // const updatedUsers = users.map(user => ({
// //     ...user,  // Spread the current properties
// //     age: user.age + 1  // Increment the age by 1
// // }));

// // console.log(updatedUsers);

// // //for each
// // //Make changes in old array

// // //Array filter
// // const A = [3, 5, 7, 8,];
// // const result = A.filter((x) =>
// //     x != 7);
// // console.log(result);


// //second option
// const numbers = [10, 20, 30, 40, 50];

// const numberseven = numbers.filter((num, index) => index % 2 === 0);

// console.log(numberseven);



// //Number divisible by 3
// const div = [4, 7, 9, 10, 12];
// const div2 = div.filter((num) => num % 3 === 0);
// console.log(div2);

// //Concatenate two array
// const div1 = [5, 7, 3, 9,];
// const div3 = [6, 8, 3, 1];
// const div4 = [...div1, ...div3];
// console.log(div4);


// //Push an item to the array
// const item = [5, 6, 3, 3,];
// const item2 = item.push(3);
// console.log(item2);

//Find the index of an array

// const a = [7, 4, 3, 4];
// const index = a.indexOf(3);
// console.log(index);


