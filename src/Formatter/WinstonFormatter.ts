import { IFormatter } from "./IFormatter";
import winston from "winston";
import moment from 'moment-timezone'

type funcType = (info : any) => string
export class WinstonFormatter implements IFormatter{
    private format: any
    private timestamp: any

    constructor(private winstonformat: funcType, private timezone: string='Asia/Seoul',
    private timeformat: string="yyyy-MM-DD HH:mm:ss", private color: boolean=false){
        this.timezone = timezone;
        this.timeformat =timeformat;
        this.color = color;
        this.winstonformat = winstonformat;
        this.timestamp = winston.format((info) => {
            info.timestamp = moment().tz(this.timezone).format(timeformat);
            return info
        })
        this.format = this.color ? winston.format.combine(
            this.timestamp(),
            winston.format.colorize({all: true}),
            winston.format.printf(this.winstonformat)
        ) : winston.format.combine(
            this.timestamp(),
            winston.format.printf(this.winstonformat)
        )
    }

    public getFormat(): any {
        return this.format
    }

    public getTimeformat(): string {
        return this.timeformat;
    }

    public getTimezone(): string {
        return this.timezone;
    }

    public getColor(): boolean {
        return this.color;
    }
}