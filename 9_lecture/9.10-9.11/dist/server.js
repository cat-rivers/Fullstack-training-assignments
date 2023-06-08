"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./userRouter"));
const middleware_1 = require("./middleware");
const booksRouter_1 = __importDefault(require("./booksRouter"));
const helmet_1 = __importDefault(require("helmet"));
const server = (0, express_1.default)();
server.use(middleware_1.logger);
server.use((0, helmet_1.default)());
server.use(express_1.default.json());
server.use("/api/v1/books", booksRouter_1.default);
server.use("/api/v1/user", userRouter_1.default);
server.get('/', (req, res) => {
    res.send('OK');
});
server.use(middleware_1.endPointNotFound);
exports.default = server;
