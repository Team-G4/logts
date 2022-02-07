// log.ts - src/app.ts
// Written by Quinn Lane - https://quinnlane.dev/

import chalk from "chalk";
const l = console.log

enum loggerLevel {
  INFO,
  OK,
  WARN,
  FAILED,
  FATAL,
  EXTENSION,
  DEBUG
}

function log (level: loggerLevel, message: string): void {
  switch (level) {
    case loggerLevel.INFO:
      l(`[ INFO ] ${message}`)
      break
    case loggerLevel.OK:
      l(`[  ${chalk.greenBright('OK')}  ] ${message}`)
      break
    case loggerLevel.WARN:
      l(`[ ${chalk.yellowBright("WARN")} ] ${message}`)
      break
    case loggerLevel.FAILED:
      l(`[${chalk.redBright("FAILED")}] ${message}`)
      break
    case loggerLevel.FATAL:
      l(`[ ${chalk.whiteBright.bgRedBright("FATL")} ] ${message}`)
      break
    case loggerLevel.EXTENSION:
      l(`          -> ${message}`)
      break
    case loggerLevel.DEBUG:
      l(`[ ${chalk.blue("DBUG")} ] ${message}`)
      break
    default:
      throw new Error(`[${chalk.redBright("FAILED")}] Parameter level is not of type LoggerLevel!`)
      break
  }
}

export {
  loggerLevel,
  log
}
