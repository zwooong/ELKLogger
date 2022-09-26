"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandler = void 0;
const WinstonFormatter_1 = require("../Formatter/WinstonFormatter");
const winston = require('winston');
const basicformater = new WinstonFormatter_1.WinstonFormatter((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true);
const fs = require('fs');
const path = require('path');
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