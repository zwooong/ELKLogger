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
exports.logger = void 0;
const winston = __importStar(require("winston"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class ELKLogger {
    constructor() {
        this.handler = [];
        this.meta = {
            action: "unknown",
            user_name: "unknown",
            user_group: "unknown",
            user_id: "unknown",
            start_time: "unknown",
            end_time: "unknown",
            line_id: "unknown",
            process_id: "unknown",
            metro_ppid: "unknown",
            time_lapse: 0,
            rows: 0,
            wafer_list: []
        };
        this.log = '';
        this.prevcpuUsage = { user: 0, system: 0 };
        this.prevmemUsage = { rss: 0, heapTotal: 0, heapUsed: 0, external: 0 };
        this.startTime = 0;
        this.logger = winston.createLogger();
    }
    getLogger() {
        return this.logger;
    }
    getHandler() {
        return this.handler;
    }
    addHandler(handler) {
        this.handler.push(handler);
        this.logger.add(handler);
    }
    setMeta(key, value) {
        this.meta[key] = value;
    }
    getMeta() {
        return this.meta;
    }
    startTrace() {
        this.prevcpuUsage = process.cpuUsage();
        this.prevmemUsage = process.memoryUsage();
        this.meta['start_time'] = moment_timezone_1.default.tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss');
        this.startTime = Date.now();
    }
    setLog(message) {
        return __awaiter(this, void 0, void 0, function* () {
            let cpuUsage = process.cpuUsage(this.prevcpuUsage);
            let cpuPercentage = Math.round(100 * (cpuUsage.user + cpuUsage.system) / ((Date.now() - this.startTime) * 1000) * 100) / 100;
            let memUsage = process.memoryUsage().heapUsed - this.prevmemUsage.heapUsed;
            this.meta['end_time'] = moment_timezone_1.default.tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss');
            this.log = `${this.meta['action']} >> user_name : ${this.meta['user_name']}, user_group : ${this.meta['user_group']}, user_id : ${this.meta['user_id']}, start_time : ${this.meta['start_time']}, end_time : ${this.meta['end_time']}, line_id : ${this.meta['line_id']}, process_id : ${this.meta['process_id']}, metro_ppid : ${this.meta['metro_ppid']}, wafer_list : [${this.meta['wafer_list'].toString()}], time_lapse : ${this.meta['time_lapse']}, rows : ${this.meta['rows']}, cpu_usage : ${cpuPercentage}%, mem_usage : ${memUsage}, detail_message : ${message}`;
        });
    }
    getLog() {
        return this.log;
    }
    debug(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setLog(message);
            this.logger.debug(this.log);
        });
    }
    info(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setLog(message);
            this.logger.info(this.log);
        });
    }
    warn(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setLog(message);
            this.logger.warn(this.log);
        });
    }
    error(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setLog(message);
            this.logger.error(this.log);
        });
    }
}
exports.logger = new ELKLogger();
//# sourceMappingURL=ELKLogger.js.map