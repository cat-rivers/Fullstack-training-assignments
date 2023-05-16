"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const read = fs_1.default.readFileSync('./forecast_data.json', 'utf-8');
let weather = JSON.parse(read);
weather.temperature = 30;
const jsonString = JSON.stringify(weather);
fs_1.default.writeFileSync('./forecast_data.json', jsonString, 'utf-8');
