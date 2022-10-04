import * as winston from 'winston'
import { LogstashTransport } from "winston-logstash-ts";
import moment from 'moment-timezone'

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
        wafer_list : []
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
    
    public getHandler() : Array<winston.transport> {
        return this.handler;
    }
    
    public addHandler(handler: winston.transport){
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
        let memUsage = process.memoryUsage().heapUsed - this.prevmemUsage.heapUsed
        this.meta['end_time'] = moment.tz('Asia/Seoul').format('yyyy-MM-DD HH:mm:ss')
        this.log = `${this.meta['action']} >> user_name : ${this.meta['user_name']}, user_group : ${this.meta['user_group']}, user_id : ${this.meta['user_id']}, start_time : ${this.meta['start_time']}, end_time : ${this.meta['end_time']}, line_id : ${this.meta['line_id']}, process_id : ${this.meta['process_id']}, metro_ppid : ${this.meta['metro_ppid']}, wafer_list : [${this.meta['wafer_list'].toString()}], time_lapse : ${this.meta['time_lapse']}, rows : ${this.meta['rows']}, cpu_usage : ${cpuPercentage}%, mem_usage : ${memUsage}, detail_message : ${message}`
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