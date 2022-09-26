import { IFormatter } from "../Formatter/IFormatter";
declare const winston: any;
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
export {};
