import { IFormatter } from "../Formatter/IFormatter";
import * as winston from 'winston';
export declare class ConsoleHandler {
    private level;
    private formatter;
    private handleExceptions;
    private handler;
    constructor(level?: string, formatter?: IFormatter, handleExceptions?: boolean);
    getLevel(): string;
    getformatter(): IFormatter;
    getHandleExceptions(): boolean;
    getHandler(): typeof winston.transports.Console;
}
