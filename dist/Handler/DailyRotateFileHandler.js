"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyRotateFileHandler = void 0;
const WinstonFormatter_1 = require("../Formatter/WinstonFormatter");
const winston = require('winston');
require('winston-daily-rotate-file');
const basicformater = new WinstonFormatter_1.WinstonFormatter((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true);
const fs = require('fs');
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
        this.handler = new winston.transports.DailyRotateFile({
            level: this.level,
            format: this.formatter.getFormat(),
            datePatern: this.datePattern,
            dirname: this.dirname,
            filename: this.filename,
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