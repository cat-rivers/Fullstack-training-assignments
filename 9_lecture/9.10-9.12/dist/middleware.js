"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.checkIsAdmin = exports.logger = exports.endPointNotFound = exports.checkPartialParams = exports.checkParams = exports.checkId = void 0;
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Verifies that id number is valid number input
const checkId = (req, res, next) => {
    const { id } = req.params;
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).send("gimme a number u fish :@");
    }
    next();
};
exports.checkId = checkId;
//Chacks that all aprams are in body when posting new object
const checkParams = (req, res, next) => {
    const { name, id, author, read } = req.body;
    if (!id || !name || !author || !read) {
        return res.status(400).send('Error: Missing or invalid parameters');
    }
    next();
};
exports.checkParams = checkParams;
//Checks partial params when modifying object and also doesnt allow id number to be modified
const checkPartialParams = (req, res, next) => {
    const { name, id, author, read } = req.body;
    if (id) {
        return res.status(400).send('Error: Id cannot be updated');
    }
    if (!name && !author && !read) {
        console.log(req.body);
        return res.status(400).send('missing one or more parameters');
    }
    next();
};
exports.checkPartialParams = checkPartialParams;
// Sends error when endpoint is not found
const endPointNotFound = (req, res) => {
    res.status(404).send({ error: "oops...wrong place maybe?" });
};
exports.endPointNotFound = endPointNotFound;
//Logs req information every http request
const logger = (req, res, next) => {
    res.on("finish", function () {
        const log = { "method": req.method, "URI": decodeURI(req.url), "Satus Code": res.statusCode, "StatusMessage": res.statusMessage, "timeStamp": new Date, };
        console.log(log);
    });
    next();
};
exports.logger = logger;
//Verifies if token has isAdmin: true
const checkIsAdmin = (req, res, next) => {
    const auth = req.get("Authorization");
    if (!(auth === null || auth === void 0 ? void 0 : auth.startsWith("Bearer "))) {
        return res.status(401).send("line 75: You need to login - no token found");
    }
    const token = auth.substring(7);
    const decodedToken = (0, jwt_decode_1.default)(token);
    req.isAdmin = decodedToken.isAdmin;
    next();
};
exports.checkIsAdmin = checkIsAdmin;
const authenticate = (req, res, next) => {
    const auth = req.get('Authorization');
    if (!(auth === null || auth === void 0 ? void 0 : auth.startsWith('Bearer '))) {
        return res.status(401).send('line 88: You need to login - no token found');
    }
    const token = auth.substring(7);
    const secret = "poopihead";
    try {
        const decodedToken = jsonwebtoken_1.default.verify(token, secret);
        next();
    }
    catch (error) {
        return res.status(401).send('Invalid token');
    }
};
exports.authenticate = authenticate;
