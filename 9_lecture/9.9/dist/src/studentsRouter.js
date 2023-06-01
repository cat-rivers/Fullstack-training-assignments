"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
let students = [];
const router = express_1.default.Router();
//gets all students
router.get('/', middleware_1.authenticate, (req, res) => {
    res.send(students);
});
//gets student by id
router.get("/:id", middleware_1.authenticate, middleware_1.checkId, (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(stu => stu.id === id);
    return !student
        ? res.status(404).send("you fucked up")
        : res.status(201).send(student);
});
//!adminAuth not working
router.put("/:id", middleware_1.authenticate, middleware_1.adminAuth, middleware_1.checkPartialParams, (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    const studentExists = students.find((student) => student.id === id);
    if (!studentExists) {
        res.status(404).send("student doesnt exist");
    }
    students = students.map(student => {
        if (student.id === id) {
            return Object.assign(Object.assign({}, student), body);
        }
        return student;
    });
    res.status(204).send(students);
});
//! adminAuth not working
//create new student object
router.post("/register", middleware_1.authenticate, middleware_1.adminAuth, middleware_1.checkParams, (req, res) => {
    const body = req.body;
    students.push(body);
    res.status(200).send();
});
//! adminAuth not working
router.delete("/:id", middleware_1.authenticate, middleware_1.adminAuth, middleware_1.checkId, (req, res) => {
    const id = parseInt(req.params.id);
    const studentExists = students.find(student => student.id === id);
    if (!studentExists) {
        res.status(404).send("student doesnt exist");
    }
    students = students.filter(student => student.id !== id);
    res.status(204).send();
});
exports.default = router;
