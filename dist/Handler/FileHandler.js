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
exports.FileHandler = void 0;
const WinstonFormatter_1 = require("../Formatter/WinstonFormatter");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const winston = __importStar(require("winston"));
const basicformater = new WinstonFormatter_1.WinstonFormatter((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true);
class FileHandler {
    constructor(level = 'info', formatter = basicformater, dirname = './', filename = 'log.log', maxSize = 3000000, maxFiles = 12, tailable = true, zippedArchive = false) {
        this.level = level;
        this.formatter = formatter;
        this.dirname = dirname;
        this.filename = filename;
        this.maxSize = maxSize;
        this.maxFiles = maxFiles;
        this.tailable = tailable;
        this.zippedArchive = zippedArchive;
        if (!fs.existsSync(dirname)) {
            fs.mkdirSync(dirname);
        }
        this.level = level;
        this.formatter = formatter;
        this.dirname = dirname;
        this.zippedArchive = zippedArchive;
        this.maxFiles = maxFiles;
        this.filename = path.join(this.dirname, filename);
        this.handler = new winston.transports.File({
            level: this.level,
            format: this.formatter.getFormat(),
            filename: this.filename,
            maxsize: this.maxSize,
            maxFiles: this.maxFiles,
            tailable: this.tailable,
            zippedArchive: this.zippedArchive
        });
    }
    getLevel() {
        return this.level;
    }
    getFormatter() {
        return this.formatter;
    }
    getDirname() {
        return this.dirname;
    }
    getFilename() {
        return this.filename;
    }
    getMaxSize() {
        return this.maxSize;
    }
    getMaxFiles() {
        return this.maxFiles;
    }
    getTailable() {
        return this.tailable;
    }
    getZippedArchive() {
        return this.zippedArchive;
    }
    getHandler() {
        return this.handler;
    }
}
exports.FileHandler = FileHandler;
//# sourceMappingURL=FileHandler.js.map