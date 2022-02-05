// log.ts - src/test/app.ts
// Written by Quinn Lane - https://quinnlane.dev

import {log, loggerLevel} from '../main.js'

log(loggerLevel.OK, "This is a log entry with the severity level 'OK'")
log(loggerLevel.INFO, "This is a log entry with the severity level 'INFO'")
log(loggerLevel.EXTENSION, "This is a log entry with the severity level 'EXTENSION'")
log(loggerLevel.DEBUG, "This is a log entry with the severity level 'DEBUG'")
log(loggerLevel.WARN, "This is a log entry with the severity level 'WARN'")
log(loggerLevel.FAILED, "This is a log entry with the severity level 'FAILED'")
log(loggerLevel.FATAL, "This is a log entry with the severity level 'FATAL'")
