"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = exports.authenticate = exports.checkId = exports.checkPartialParams = exports.checkParams = exports.endPointNotFound = exports.logger = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const logger = (req, res, next) => {
    const reqTime = new Date();
    const method = req.method;
    const url = req.url;
    console.log({ requestTime: reqTime, method: method, requestUrl: url }, req.body);
    next();
};
exports.logger = logger;
const endPointNotFound = (req, res) => {
    res.status(404).send({ error: "oops...wrong place maybe?" });
};
exports.endPointNotFound = endPointNotFound;
const checkParams = (req, res, next) => {
    const { name, id, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).send('Error: Missing or invalid parameters');
    }
    next();
};
exports.checkParams = checkParams;
const checkPartialParams = (req, res, next) => {
    const { name, id, email } = req.body;
    if (!name && !email) {
        return res.status(400).send('Error: Missing Email and Name');
    }
    if (id) {
        return res.status(400).send('Error: Id cannot be updated');
    }
    next();
};
exports.checkPartialParams = checkPartialParams;
const checkId = (req, res, next) => {
    const { id } = req.params;
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).send("gimme a number u fish");
    }
    next();
};
exports.checkId = checkId;
const authenticate = (req, res, next) => {
    const auth = req.get('Authorization');
    if (!(auth === null || auth === void 0 ? void 0 : auth.startsWith('Bearer '))) {
        return res.status(401).send('Invalid token doesnt start with bearer');
    }
    const token = auth.substring(7);
    const secret = "poopihead";
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, secret);
        console.log(decodedToken);
        req.username = decodedToken;
        next();
    }
    catch (error) {
        return res.status(401).send('Invalid token');
    }
};
exports.authenticate = authenticate;
//! This dont work yet
const adminAuth = (req, res, next) => {
    const auth = req.get('Authorization');
    if (!(auth === null || auth === void 0 ? void 0 : auth.startsWith('Bearer '))) {
        return res.status(401).send('Invalid token- doesnt start with bearer');
    }
    const token = auth.substring(7);
    console.log(token);
    const secret = process.env.SECRET;
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, secret);
        console.log(decodedToken);
        req.username = decodedToken;
        next();
    }
    catch (error) {
        return res.status(401).send('Invalid token- not an admin');
    }
};
exports.adminAuth = adminAuth;
