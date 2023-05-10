"use strict";
const n1 = process.argv[2];
const n2 = process.argv[3];
const n3 = process.argv[4];
if (n1.length > n2.length && n1.length > n3.length) {
    if (n2.length > n3.length) {
        console.log([n1, n2, n3]);
    }
    else {
        ([n1, n3, n2]);
    }
}
else if (n2.length > n1.length && n2.length > n3.length) {
    if (n1.length > n3.length) {
        ([n2, n1, n3]);
    }
    else {
        ([n2, n3, n1]);
    }
}
else {
    if (n2.length > n1.length) {
        ([n3, n2, n1]);
    }
    else {
        ([n3, n1, n2]);
    }
}
