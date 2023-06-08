"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const router = express_1.default.Router();
let books = [{
        "id": 1,
        "name": "book1",
        "author": "bobo",
        "read": true
    },
    {
        "id": 2,
        "name": "book1",
        "author": "bobo",
        "read": true
    }];
//Posts a book
router.post("/", middleware_1.checkIsAdmin, middleware_1.checkParams, (req, res) => {
    const body = req.body;
    const bookIdVerifier = books.find((book) => book.id === body.id);
    if (bookIdVerifier) {
        res.status(400).send("id exists already ");
    }
    else {
        books.push(body);
        res.status(201).send("book added");
    }
});
//gets all books
router.get("/", middleware_1.authenticate, (req, res) => {
    res.status(201).send(books);
});
//gets one book by id
router.get("/:id", middleware_1.authenticate, middleware_1.checkId, (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    return !book
        ? res.status(404).send("book id not available- try different id")
        : res.status(201).send(book);
});
//modifies an existing book
router.put("/:id", middleware_1.checkPartialParams, (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body;
    const bookExists = books.find((book) => book.id === id);
    if (!bookExists) {
        res.status(404).send("book doesnt exist");
    }
    books = books.map(book => {
        if (book.id === id) {
            return Object.assign(Object.assign({}, book), body);
        }
        return book;
    });
    res.status(204).send("book modified");
});
//Removes a book by id number
router.delete("/:id", middleware_1.checkIsAdmin, (req, res) => {
    const id = parseInt(req.params.id);
    const bookExists = books.find(book => book.id === id);
    if (!bookExists) {
        res.status(404).send("book doesn't exist");
    }
    if (req.isAdmin) {
        books = books.filter(book => book.id !== id);
        res.status(204).send();
    }
    else {
        res.status(401).send("line 95: you need to be admin to delete");
    }
});
exports.default = router;
