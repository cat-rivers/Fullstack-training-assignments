"use strict";
// Random async
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getValue = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random());
        }, Math.random() * 1500);
    });
};
const get2values = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield getValue(), yield getValue());
});
get2values();
//_________________________________
const randomNum = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random());
        }, Math.random() * 1500);
    });
};
randomNum().then((res1) => {
    randomNum().then((res2) => console.log(res1, res2));
});
