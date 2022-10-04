export declare class LogstashHandler {
    private protocol;
    private host;
    private port;
    private applicationName;
    private handler;
    constructor(protocol: "udp" | "tcp" | undefined, host: string, port: number, applicationName: string);
    getProtocol(): "udp" | "tcp" | undefined;
    getHost(): string;
    getPort(): number;
    getApplicationName(): string;
    getHandler(): any;
}
