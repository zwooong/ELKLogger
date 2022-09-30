"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleHandler = void 0;
const WinstonFormatter_1 = require("../Formatter/WinstonFormatter");
const winston = __importStar(require("winston"));
const basicformater = new WinstonFormatter_1.WinstonFormatter((info) => `[${info.timestamp}] [${info.level}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true);
class ConsoleHandler {
    constructor(level = 'info', formatter = basicformater, handleExceptions = true) {
        this.level = level;
        this.formatter = formatter;
        this.handleExceptions = handleExceptions;
        this.level = level;
        this.formatter = formatter;
        this.handleExceptions = handleExceptions;
        this.handler = new winston.transports.Console({
            level: this.level,
            format: this.formatter.getFormat(),
            handleExceptions: this.handleExceptions
        });
    }
    getLevel() {
        return this.level;
    }
    getformatter() {
        return this.formatter;
    }
    getHandleExceptions() {
        return this.handleExceptions;
    }
    getHandler() {
        return this.handler;
    }
}
exports.ConsoleHandler = ConsoleHandler;
//# sourceMappingURL=ConsoleHandler.js.map