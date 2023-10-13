// import { rejects } from "assert";
// import { promises } from "dns";
// import { resolve } from "path";

import { promises } from "dns";

// const promisA = new Promise((resolve, reject) => {
//     resolve("return data");
// });

// //promisA.then((data) => console.log(data));

// const promisB = new Promise((resolve, reject) => {
//     reject(new Error("return error"));
// });

// //promisB.catch((err) => console.error(err));

// console.log("done");

const promisX = (x: number): Promise<any> => {
    return new Promise((resolve, reject) => {
        if(typeof x === "number"){
            resolve(x);
        } else {
            reject(new Error("return error"));
        }
    })
};

const logAndDouble = (num: number) => {
    console.log(num);
    return num * 2;
}

promisX(1)
    .then((data) => logAndDouble(data))
    .then((data) => logAndDouble(data))
    .then((data) => logAndDouble(data))
    .catch((data) => console.log(data))