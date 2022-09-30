import { IFormatter } from "../Formatter/IFormatter";
import { WinstonFormatter } from "../Formatter/WinstonFormatter";
import DailyRotateFile from 'winston-daily-rotate-file'
import * as fs from "fs"

const basicformater = new WinstonFormatter((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true)

export class DailyRotateFileHandler{
    private handler: DailyRotateFile
    constructor(private level:string='info', private formatter:IFormatter=basicformater, private handleExceptions:boolean=true, private datePattern: string='YYYY-MM-DD', private dirname: string='./',
    private filename:string = 'log-%Date%.log', private zippedArchive: boolean=true, private maxFiles:number | string = '30d'){
        if(!fs.existsSync(dirname)){
            fs.mkdirSync(dirname)
        }
        this.level = level;
        this.formatter = formatter;
        this.handleExceptions = handleExceptions;
        this.datePattern = datePattern;
        this.dirname = dirname;
        this.filename = filename;
        this.zippedArchive = zippedArchive;
        this.maxFiles = maxFiles;
        this.handler = new DailyRotateFile({
            level: this.level,
            format: this.formatter.getFormat(),
            datePattern: this.datePattern,
            filename: this.filename,
            dirname: this.dirname,
            zippedArchive: this.zippedArchive,
            maxFiles: this.maxFiles,
            handleExceptions: this.handleExceptions
        })
    }
    
    public getLevel() : string {
        return this.level
    }

    
    public getFormatter() : IFormatter {
        return this.formatter;
    }
    
    
    public getHandleExceptions() : boolean {
        return this.handleExceptions;
    }
    
    public getDatePattern(): string{
        return this.datePattern;
    }

    
    public getDirname() : string {
        return this.dirname;
    }
    
    public getFilename() : string{
        return this.filename;
    }

    
    public getzippedArchive() : boolean {
        return this.zippedArchive;
    }
    
    
    public getMaxFiles() : number | string {
        return this.maxFiles
    }

    
    public getHandler() : DailyRotateFile {
        return this.handler;
    }
    
    
}