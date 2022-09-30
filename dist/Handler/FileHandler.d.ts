import { IFormatter } from "../Formatter/IFormatter";
import * as winston from 'winston';
export declare class FileHandler {
    private level;
    private formatter;
    private dirname;
    private filename;
    private maxSize;
    private maxFiles;
    private tailable;
    private zippedArchive;
    private handler;
    constructor(level?: string, formatter?: IFormatter, dirname?: string, filename?: string, maxSize?: number, maxFiles?: number, tailable?: boolean, zippedArchive?: boolean);
    getLevel(): string;
    getFormatter(): IFormatter;
    getDirname(): string;
    getFilename(): string;
    getMaxSize(): number;
    getMaxFiles(): number;
    getTailable(): boolean;
    getZippedArchive(): boolean;
    getHandler(): typeof winston.transports.File;
}
