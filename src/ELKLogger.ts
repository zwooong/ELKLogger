import * as winston from 'winston'
import moment from 'moment-timezone'
const WinstonLogstash = require('winston3-logstash-transport')

type metaType = {
    [key: string] : any
}

type cpuType = {
    user: number,
    system: number
}

type memType = {
    rss: number,
    heapTotal: number,
    heapUsed: number,
    external: number
}

class ELKLogger {
    private logger: winston.Logger
    private handler: Array<winston.transport> = []
    private meta : metaType ={
        action : "unknown",
        user_name : "unknown",
        user_group : "unknown",
        user_id : "unknown",
        start_time : "unknown",
        end_time : "unknown",
        line_id : "unknown",
        process_id : "unknown",
        metro_ppid : "unknown",
        time_lapse : 0,
        rows : 0,
        wafer_list : [],
        cpuUsage: 0,
        memUsage: 0
    }
    private log: string=''
    private prevcpuUsage: cpuType = {user: 0, system: 0}
    private prevmemUsage: memType = {rss: 0, heapTotal: 0, heapUsed: 0, external: 0}
    private startTime : number = 0
    
    constructor() {
        this.logger = winston.createLogger()
    }
    
    public getLogger() : winston.Logger {
        return this.logger
    }
    
    public getHandler() : Array<winston.transport | typeof WinstonLogstash>{
        return this.handler;
    }
    
    public addHandler(handler: winston.transport | typeof WinstonLogstash){
        this.handler.push(handler)
        this.logger.add(handler);
    }

    public setMeta(key: string, value: string | number | Array<string>){
        this.meta[key] = value
    }

    public getMeta() : metaType {
        return this.meta
    }

    public startTrace() {
        this.prevcpuUsage = process.cpuUsage()
        this.prevmemUsage = process.memoryUsage();
        this.meta['start_time'] = moment.tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss')
        this.startTime = Date.now();
    }

    public async setLog(message: string){
        let cpuUsage = process.cpuUsage(this.prevcpuUsage)
        let cpuPercentage = Math.round(100 * (cpuUsage.user + cpuUsage.system) / ((Date.now() - this.startTime)*1000)*100)/100
        let memUsage = (process.memoryUsage().heapUsed - this.prevmemUsage.heapUsed) >= 0 ? (process.memoryUsage().heapUsed - this.prevmemUsage.heapUsed) : -(process.memoryUsage().heapUsed - this.prevmemUsage.heapUsed)
        this.meta['cpuUsage'] = `${cpuPercentage}%`
        this.meta['memUsage'] = `${Math.round(memUsage / 1024 / 1024 * 100) / 100}MB`
        this.meta['end_time'] = moment.tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss');
        this.meta['time_lapse'] = Math.round(((Date.now() - this.startTime) / 1000) * 100) / 100;
        this.log = `${message} start_time : ${this.meta['start_time']}, end_time : ${this.meta['end_time']}, time_lapse : ${this.meta['time_lapse']}, cpu_usage : ${this.meta['cpuUsage']}, mem_usage : ${this.meta['memUsage']}`
    }

    public getLog() : string {
        return this.log;
    }

    public async debug(message: string){
        await this.setLog(message)
        this.logger.debug(this.log)
    }

    public async info(message: string){
        await this.setLog(message)
        this.logger.info(this.log)
    }

    public async warn(message: string){
        await this.setLog(message)
        this.logger.warn(this.log)
    }

    public async error(message: string){
        await this.setLog(message)
        this.logger.error(this.log)
    }
}

export const logger = new ELKLogger();