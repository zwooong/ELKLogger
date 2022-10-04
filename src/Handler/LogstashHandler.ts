import { LogstashTransport } from "winston-logstash-ts";

export class LogstashHandler{
    private handler : any
    constructor(private protocol:"udp" | "tcp" | undefined= "udp", private host: string, private port: number, private applicationName: string){
        this.protocol = protocol;
        this.host = host;
        this.port = port;
        this.applicationName = applicationName;
        this.handler = new LogstashTransport({
            protocol: this.protocol,
            host: this.host,
            port: this.port,
        })
    }
    public getProtocol() : "udp" | "tcp" | undefined{
        return this.protocol
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
    
    public getHandler() : any {
        return this.handler
    }
}