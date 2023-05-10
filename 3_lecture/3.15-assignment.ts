

const n1 = process.argv[2]
const n2 = process.argv[3]
const n3 = process.argv[4]

//initials seperated with dots
console.log(`${n1[0]}.${n2[0]}.${n3[0]}`)


//option A string length comparison


if (n1.length > n2.length && n1.length > n3.length) {
    if (n2.length > n3.length) {
        console.log([n1, n2, n3]);
    } else {
        console.log ([n1, n3, n2]);
    }
} else if (n2.length > n1.length && n2.length > n3.length) {
    if (n1.length > n3.length) {
        console.log ([n2, n1, n3]);
    } else {
        console.log([n2, n3, n1]);
    }
} else {
    if (n2.length > n1.length) {
        console.log([n3, n2, n1]);
    } else {
        console.log([n3, n1, n2]);
    }

}



// option B string length comparison
const container = [n1, n2 ,n3];
const res = container.sort( (a, b) => {
    return b.length - a.length;
});
console.log(container);