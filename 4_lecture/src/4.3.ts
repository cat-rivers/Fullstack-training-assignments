//Function flavours

function adder1(a: number, b: number, c: number  = 0) {
   
    return a +b +c
}

console.log(adder1(2, 2));
console.log(adder1(2, 2, 3));

//---------------------------------------------

const adder2 = function (a: number, b: number, c: number = 0) {
    return a + b + c;
};

console.log(adder2(2,2));
console.log(adder2(2,2,3));


//---------------------------------------------


const adder3 = (a: number, b: number, c: number = 0) => {
    return a + b + c;
};

console.log(adder3(2,2));
console.log(adder3(2, 2, 3));