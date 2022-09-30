import winstonlogstash from 'winston3-logstash-transport'

export class LogstashHandler{
    private handler : typeof winstonlogstash
    constructor(private mode:string='tcp', private host: string, private port: number, private applicationName: string){
        this.mode = mode;
        this.host = host;
        this.port = port;
        this.applicationName = applicationName;
        this.handler = new winstonlogstash({
            mode: this.mode,
            host: this.host,
            port: this.port,
            applicationName: this.applicationName
        })
    }
    public getMode() : string{
        return this.mode
    }

    
    public getHost() : string {
        return this.host
    }

    
    public getPort() : number {
        return this.port
    }
    
    
    public getApplicationName() : string {
        return this.applicationName
    }
    
    public getHandler() : typeof winstonlogstash {
        return this.handler
    }
}