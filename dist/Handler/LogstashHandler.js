"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogstashHandler = void 0;
const winston3_logstash_transport_1 = __importDefault(require("winston3-logstash-transport"));
class LogstashHandler {
    constructor(mode = 'tcp', host, port, applicationName) {
        this.mode = mode;
        this.host = host;
        this.port = port;
        this.applicationName = applicationName;
        this.mode = mode;
        this.host = host;
        this.port = port;
        this.applicationName = applicationName;
        this.handler = new winston3_logstash_transport_1.default({
            mode: this.mode,
            host: this.host,
            port: this.port,
            applicationName: this.applicationName
        });
    }
    getMode() {
        return this.mode;
    }
    getHost() {
        return this.host;
    }
    getPort() {
        return this.port;
    }
    getApplicationName() {
        return this.applicationName;
    }
    getHandler() {
        return this.handler;
    }
}
exports.LogstashHandler = LogstashHandler;
//# sourceMappingURL=LogstashHandler.js.map