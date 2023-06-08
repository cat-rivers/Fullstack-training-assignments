"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const express_1 = __importDefault(require("express"));
const argon2_1 = __importDefault(require("argon2"));
require("dotenv/config");
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.users = [{ username: "catalina", password: process.env.ADMIN_PSW, isAdmin: true },
    { username: "poop", password: "poop", isAdmin: false }];
router.post('/register', (req, res) => {
    const { username, password, isAdmin } = req.body;
    if (!username || !password) {
        res.status(404).send("missing paramteres");
    }
    if (exports.users.find((el) => el.username === username)) {
        return res.status(401).send("line 27: username already exists");
    }
    argon2_1.default.hash(password).then((result) => {
        exports.users.push({ username: username, password: result, isAdmin: false });
    });
    const payload = { isAdmin: isAdmin, username: username };
    const token = jsonwebtoken_1.default.sign(payload, "poopihead", { expiresIn: "25m" });
    res.status(200).send(token);
});
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(404).send("missing paramteres");
    }
    const user = exports.users.find((user) => user.username === username);
    if (user) {
        const verified = yield argon2_1.default.verify(yield user.password, password);
        const payload = { isAdmin: user.isAdmin, username: user.username };
        const token = jsonwebtoken_1.default.sign(payload, "poopihead", { expiresIn: "25m" });
        verified
            ? res.status(200).send(token)
            : res.status(401).send("unauthorized");
    }
    else {
        res.status(401).send("line 65: username not found");
    }
}));
exports.default = router;
