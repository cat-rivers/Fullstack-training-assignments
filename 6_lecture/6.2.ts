// let countDown1 = function(time,func){
//     setTimeout(()=> {
//         func()
//     }, time)
// }

// const bleh = new Promise((resolve, reject) => {
//     countDown1(1000, () => console.log(3));
    
// })

// bleh.then(() =>
//     new Promise((resolve, reject) => {
//         countDown1(1000, () => console.log(2))}
//     )).then(() =>
//     new Promise((resolve, reject) => {
//         countDown1(1000, () => console.log(1))}
//     ))


function countDown4(time: number, text: number | string){
    return new Promise <number | string>((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, time);
    });
}
    
countDown4(1000, 3)
    .then(val => {
        console.log(val);
        return countDown4(1000, 2);
    }).then(val => {
        console.log(val);
        return countDown4(1000, 1);
    }).then(val => {
        console.log(val);
        return countDown4(1000, "go");
    }).then(val => {
        console.log(val);
        return countDown4(500, " ")
    })

/*

function countDown() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("d");
    }, 1000);
  });
}
countDown()
  .then(() => {
    console.log(3);
    return countDown();
  })
  .then(() => {
    console.log(2);
    return countDown();
  })
  .then(() => {
    console.log(1);
    return countDown();
  })
  .then(() => {
    console.log("GO");
    return countDown();
  });*/
