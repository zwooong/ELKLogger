"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonFormatter = void 0;
const winston_1 = __importDefault(require("winston"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class WinstonFormatter {
    constructor(winstonformat, timezone = 'Asia/Seoul', timeformat = "yyyy-MM-DD HH:mm:ss", color = false) {
        this.winstonformat = winstonformat;
        this.timezone = timezone;
        this.timeformat = timeformat;
        this.color = color;
        this.timezone = timezone;
        this.timeformat = timeformat;
        this.color = color;
        this.winstonformat = winstonformat;
        this.timestamp = winston_1.default.format((info) => {
            info.timestamp = (0, moment_timezone_1.default)().tz(this.timezone).format(timeformat);
            return info;
        });
        this.format = this.color ? winston_1.default.format.combine(this.timestamp(), winston_1.default.format.colorize({ all: true }), winston_1.default.format.printf(this.winstonformat)) : winston_1.default.format.combine(this.timestamp(), winston_1.default.format.printf(this.winstonformat));
    }
    getFormat() {
        return this.format;
    }
    getTimeformat() {
        return this.timeformat;
    }
    getTimezone() {
        return this.timezone;
    }
    getColor() {
        return this.color;
    }
}
exports.WinstonFormatter = WinstonFormatter;
//# sourceMappingURL=WinstonFormatter.js.map