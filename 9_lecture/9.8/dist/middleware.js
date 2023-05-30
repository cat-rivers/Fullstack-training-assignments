"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkId = exports.checkParams = exports.endPointNotFound = exports.middlewear = void 0;
const middlewear = (req, res, next) => {
    const reqTime = new Date();
    const method = req.method;
    const url = req.url;
    console.log({ requestTime: reqTime, method: method, requestUrl: url }, req.body);
    next();
};
exports.middlewear = middlewear;
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
const checkId = (req, res, next) => {
    const { id } = req.params;
    if (!id || Number.isNaN(parseInt(id))) {
        return res.status(400).send("gimme a number u fish");
    }
    next();
};
exports.checkId = checkId;
