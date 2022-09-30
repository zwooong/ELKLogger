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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyRotateFileHandler = void 0;
const WinstonFormatter_1 = require("../Formatter/WinstonFormatter");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const fs = __importStar(require("fs"));
const basicformater = new WinstonFormatter_1.WinstonFormatter((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true);
class DailyRotateFileHandler {
    constructor(level = 'info', formatter = basicformater, handleExceptions = true, datePattern = 'YYYY-MM-DD', dirname = './', filename = 'log-%Date%.log', zippedArchive = true, maxFiles = '30d') {
        this.level = level;
        this.formatter = formatter;
        this.handleExceptions = handleExceptions;
        this.datePattern = datePattern;
        this.dirname = dirname;
        this.filename = filename;
        this.zippedArchive = zippedArchive;
        this.maxFiles = maxFiles;
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname);
        }
        this.level = level;
        this.formatter = formatter;
        this.handleExceptions = handleExceptions;
        this.datePattern = datePattern;
        this.dirname = dirname;
        this.filename = filename;
        this.zippedArchive = zippedArchive;
        this.maxFiles = maxFiles;
        this.handler = new winston_daily_rotate_file_1.default({
            level: this.level,
            format: this.formatter.getFormat(),
            datePattern: this.datePattern,
            filename: this.filename,
            dirname: this.dirname,
            zippedArchive: this.zippedArchive,
            maxFiles: this.maxFiles,
            handleExceptions: this.handleExceptions
        });
    }
    getLevel() {
        return this.level;
    }
    getFormatter() {
        return this.formatter;
    }
    getHandleExceptions() {
        return this.handleExceptions;
    }
    getDatePattern() {
        return this.datePattern;
    }
    getDirname() {
        return this.dirname;
    }
    getFilename() {
        return this.filename;
    }
    getzippedArchive() {
        return this.zippedArchive;
    }
    getMaxFiles() {
        return this.maxFiles;
    }
    getHandler() {
        return this.handler;
    }
}
exports.DailyRotateFileHandler = DailyRotateFileHandler;
//# sourceMappingURL=DailyRotateFileHandler.js.map