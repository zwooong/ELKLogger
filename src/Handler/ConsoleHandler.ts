import { IFormatter } from "../Formatter/IFormatter";
import { WinstonFormatter } from "../Formatter/WinstonFormatter";
const winston = require('winston')

const basicformater = new WinstonFormatter((info) => `[${info.timestamp}] [${info.level}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true)


export class ConsoleHandler{
    private handler: typeof winston.transports.Console
    constructor(private level: string='info', private formatter: IFormatter=basicformater, private handleExceptions: boolean=true){
        this.level = level;
        this.formatter = formatter;
        this.handleExceptions = handleExceptions;
        this. handler = new winston.transports.Console({
            level: this.level,
            format: this.formatter.getFormat(),
            handleExceptions: this.handleExceptions,
            colorize: {all: true}
        })
    }
    
    public getLevel() : string {
        return this.level
    }

    
    public getformatter() : IFormatter{
        return this.formatter
    }
    
    
    public getHandleExceptions() : boolean {
        return this.handleExceptions
    }
    
    
    public getHandler() : typeof winston.transports.Console {
        return this.handler
    }
    
}