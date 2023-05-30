"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownEndpoint = exports.logger = void 0;
const logger = (req, _res, next) => {
    var _a;
    const date = new Date();
    const padNumbers = (value) => String(value).padStart(2, "0");
    const body = req.body;
    console.log(body);
    const dateStr = `${padNumbers(date.getHours())}:${padNumbers(date.getMinutes())}:${padNumbers(date.getSeconds())}`;
    const method = req.method;
    const host = (_a = req.headers.host) !== null && _a !== void 0 ? _a : "";
    const url = new URL(req.url, `http://${host}`);
    console.log(`${dateStr} ${method} ${url.pathname}`);
    next();
};
exports.logger = logger;
const unknownEndpoint = (req, res) => {
    var _a;
    const host = (_a = req.headers.host) !== null && _a !== void 0 ? _a : "";
    const url = new URL(req.url, `http://${host}`);
    res.status(404).send({ error: `Endpoint ${url.pathname} does not exist` });
};
exports.unknownEndpoint = unknownEndpoint;
