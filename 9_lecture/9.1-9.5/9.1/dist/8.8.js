"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = ;
{
    Request, Response;
}
from;
'express';
const middleware_1 = require("./middleware");
const server = express(); //server is type express
server.use(express.json());
const students = [];
server.get("/students", (req, res) => {
    res.send(students);
});
server.post("/student", middleware_1.checkParams, (req, res) => {
    const body = req.body;
    console.log("post student:", body);
    students.push(body);
    res.status(201).send();
});
server.get("/student/:id", middleware_1.checkId, (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(stu => stu.id === id);
    return !student
        ? res.status(404).send("you fucked up")
        : res.status(201).send(student);
});
server.put("/student/:id", (req, res) => {
    // const id = parseInt(req.params.id);
    // const body: Body = req.body;
    // const student = students.find(stu => stu.id === id);
    // return !student
    //   ? res.status(404).send("you fucked up")
    //   : res.status(201).send(student);
    res.send("put request called");
});
server.use(middleware_1.checkParams);
server.use(middleware_1.checkId);
server.listen(3000, () => { console.log("listening"); });
