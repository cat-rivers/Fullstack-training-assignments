"use strict";
//Studetn grades
const students = [
    { name: 'Markku', score: 99 },
    { name: 'Karoliina', score: 58 },
    { name: 'Susanna', score: 69 },
    { name: 'Benjamin', score: 77 },
    { name: 'Isak', score: 49 },
    { name: 'Liisa', score: 89 },
];
const highestScoringStudent = students
    .reduce((a, c) => (c.score > a.score
    ? c
    : a));
const lowestScoringStudent = students
    .reduce((a, c) => (c.score < a.score
    ? c
    : a));
const averageScore = students
    .reduce((a, c) => (a + c.score), 0) / students.length;
function gradingStudents(arr) {
    arr.forEach(student => {
        student.score < 40
            ? (student.grade = 1)
            : student.score < 60
                ? (student.grade = 2)
                : student.score < 80
                    ? (student.grade = 3)
                    : student.score < 95
                        ? (student.grade = 4)
                        : (student.grade = 5);
    });
    return students;
}
console.log("highest scoring student: ", highestScoringStudent);
console.log("\nLowest scoring student: ", lowestScoringStudent);
//print students with scores above average
console.log("\nStudents with higher than average score: ", students.filter(function (student) {
    return student.score > averageScore;
}));
console.log("Students after grading: ", gradingStudents(students));
