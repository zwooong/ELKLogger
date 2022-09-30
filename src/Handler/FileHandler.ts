import { IFormatter } from "../Formatter/IFormatter";
import { WinstonFormatter } from "../Formatter/WinstonFormatter";
import * as fs from "fs"
import * as path from "path"
import * as winston from 'winston'

const basicformater = new WinstonFormatter((info) => `[${info.timestamp}] [${info.level.toUpperCase()}] ${info.message}`, 'Asia/Seoul', 'yyyy-MM-DD HH:mm:ss', true)

export class FileHandler{
    private handler: typeof winston.transports.File
    constructor(private level:string='info', private formatter:IFormatter=basicformater, private dirname: string='./',
    private filename:string = 'log.log', private maxSize: number=3000000, private maxFiles:number=12, private tailable:boolean=true, private zippedArchive: boolean=false){
        if(!fs.existsSync(dirname)){
            fs.mkdirSync(dirname)
        }
        this.level = level;
        this.formatter = formatter;
        this.dirname =dirname;
        this.zippedArchive = zippedArchive;
        this.maxFiles = maxFiles;
        this.filename = path.join(this.dirname, filename);
        this.handler = new winston.transports.File({
            level: this.level,
            format: this.formatter.getFormat(),
            filename: this.filename,
            maxsize: this.maxSize,
            maxFiles: this.maxFiles,
            tailable: this.tailable,
            zippedArchive: this.zippedArchive
        })
    }
    public getLevel() : string {
        return this.level
    }

    
    public getFormatter() : IFormatter {
        return this.formatter;
    }

    public getDirname() : string {
        return this.dirname;
    }
    
    public getFilename() : string{
        return this.filename;
    }

    
    public getMaxSize() : number {
        return this.maxSize
    }
    
    
    public getMaxFiles() : number {
        return this.maxFiles
    }

    
    public getTailable() : boolean {
        return this.tailable
    }

    
    public getZippedArchive() : boolean {
        return this.zippedArchive
    }
    
    
    public getHandler() : typeof winston.transports.File {
        return this.handler;
    }
    
}
