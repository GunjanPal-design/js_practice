//Promises
//Promise is created
let a = new Promise(function (resolve, reject) {
    let b = 11;
    if (b % 2 == 0) {
        resolve("ok");
    } else {
        reject("not Ok");
    }
});
a
    .then((data) => {
        console.log("good")
    }).catch((data) => {
        console.log("not good")
    })
    