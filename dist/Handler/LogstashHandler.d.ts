import winstonlogstash from 'winston3-logstash-transport';
export declare class LogstashHandler {
    private mode;
    private host;
    private port;
    private applicationName;
    private handler;
    constructor(mode: string, host: string, port: number, applicationName: string);
    getMode(): string;
    getHost(): string;
    getPort(): number;
    getApplicationName(): string;
    getHandler(): typeof winstonlogstash;
}
