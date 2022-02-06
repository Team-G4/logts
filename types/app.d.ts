declare enum loggerLevel {
    INFO = 0,
    OK = 1,
    WARN = 2,
    FAILED = 3,
    FATAL = 4,
    EXTENSION = 5,
    DEBUG = 6
}
declare function log(level: loggerLevel, message: string): void;
export { loggerLevel, log };