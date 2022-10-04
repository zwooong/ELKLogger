"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogstashHandler = void 0;
const winston_logstash_ts_1 = require("winston-logstash-ts");
class LogstashHandler {
    constructor(protocol = "udp", host, port, applicationName) {
        this.protocol = protocol;
        this.host = host;
        this.port = port;
        this.applicationName = applicationName;
        this.protocol = protocol;
        this.host = host;
        this.port = port;
        this.applicationName = applicationName;
        this.handler = new winston_logstash_ts_1.LogstashTransport({
            protocol: this.protocol,
            host: this.host,
            port: this.port,
        });
    }
    getProtocol() {
        return this.protocol;
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