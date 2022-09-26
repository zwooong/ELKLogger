"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogstashHandler = void 0;
const winstonlogstash = require('winston3-logstash-transport');
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
        this.handler = new winstonlogstash({
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