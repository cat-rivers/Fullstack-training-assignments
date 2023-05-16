"use strict";
//Check exam
function checkExam(testKey, answers) {
    let score = 0;
    for (let i = 0; i < testKey.length; i++) {
        testKey[i] === answers[i]
            ? (score += 4)
            : answers[i] == " "
                ? (score += 0)
                : (score -= 1);
    }
    console.log(score <= 0 ? 0 : score);
}
checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
checkExam(["a", "a", "c", "b"], ["a", "a", "b", " "]);
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]);
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]);
