"use strict";
const string = process.argv[2];
switch (string) {
case 'es':
    console.log("Hola mundo!");
    break;
case 'en':
    console.log("Hello world!");
    break;
case 'fi':
    console.log("Moi maailman!");
    break;
case 'it':
    console.log("ciao mundo!");
    break;
default: console.log("hello world :)");
}
