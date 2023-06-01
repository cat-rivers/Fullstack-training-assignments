"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const middleware_1 = require("./middleware");
const studentsRouter_1 = __importDefault(require("./studentsRouter"));
const loginRouter_1 = __importDefault(require("./loginRouter"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/students", studentsRouter_1.default);
server.use("/user", loginRouter_1.default);
server.use(express_1.default.static('public'));
server.get('/', (req, res) => {
    res.send('OK');
});
// const passWrd= argon.hash("poopiPooP100").then((res)=> console.log(res))
server.use(middleware_1.authenticate);
server.use(middleware_1.adminAuth);
server.use(middleware_1.checkId);
server.use(middleware_1.checkPartialParams);
server.use(middleware_1.checkParams);
exports.default = server;
