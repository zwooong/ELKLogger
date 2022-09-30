import { IFormatter } from "../Formatter/IFormatter";
import DailyRotateFile from 'winston-daily-rotate-file';
export declare class DailyRotateFileHandler {
    private level;
    private formatter;
    private handleExceptions;
    private datePattern;
    private dirname;
    private filename;
    private zippedArchive;
    private maxFiles;
    private handler;
    constructor(level?: string, formatter?: IFormatter, handleExceptions?: boolean, datePattern?: string, dirname?: string, filename?: string, zippedArchive?: boolean, maxFiles?: number | string);
    getLevel(): string;
    getFormatter(): IFormatter;
    getHandleExceptions(): boolean;
    getDatePattern(): string;
    getDirname(): string;
    getFilename(): string;
    getzippedArchive(): boolean;
    getMaxFiles(): number | string;
    getHandler(): DailyRotateFile;
}
