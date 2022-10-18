import * as winston from 'winston';
import { WinstonLogstash } from 'winston3-logstash-transport';
declare type metaType = {
    [key: string]: any;
};
declare class ELKLogger {
    private logger;
    private handler;
    private meta;
    private log;
    private prevcpuUsage;
    private prevmemUsage;
    private startTime;
    constructor();
    getLogger(): winston.Logger;
    getHandler(): Array<winston.transport | typeof WinstonLogstash>;
    addHandler(handler: winston.transport | typeof WinstonLogstash): void;
    setMeta(key: string, value: string | number | Array<string>): void;
    getMeta(): metaType;
    startTrace(): void;
    setLog(message: string): Promise<void>;
    getLog(): string;
    debug(message: string): Promise<void>;
    info(message: string): Promise<void>;
    warn(message: string): Promise<void>;
    error(message: string): Promise<void>;
}
export declare const logger: ELKLogger;
export {};
