import { IFormatter } from "./IFormatter";
declare type funcType = (info: any) => string;
export declare class WinstonFormatter implements IFormatter {
    private winstonformat;
    private timezone;
    private timeformat;
    private color;
    private format;
    private timestamp;
    constructor(winstonformat: funcType, timezone?: string, timeformat?: string, color?: boolean);
    getFormat(): any;
    getTimeformat(): string;
    getTimezone(): string;
    getColor(): boolean;
}
export {};
