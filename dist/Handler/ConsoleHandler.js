"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleHandler = void 0;
const WinstonFormatter_1 = require("../Formatter/WinstonFormatter");
const winston = require('winston');
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
            handleExceptions: this.handleExceptions,
            colorize: { all: true }
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