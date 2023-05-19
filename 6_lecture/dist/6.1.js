"use strict";
// Callback Timeout
let countDown = function (time, func) {
    setTimeout(() => {
        func();
    }, time);
};
countDown(1000, () => {
    console.log(3);
    countDown(1000, () => {
        console.log(2);
        countDown(1000, () => {
            console.log(1);
            countDown(1000, () => {
                console.log("GO!!!");
            });
        });
    });
});
// const moreThanHalf = function (): Promise<number> {
//     return new Promise((resolve, reject) => {
//         const number = Math.random()
//         return number > 0.5 ? resolve(number) : reject('No luck!')
//     })
// }
// moreThanHalf()
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
