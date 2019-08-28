const log4js = require('log4js');

log4js.configure({
    levels: { "nsibull": { value: 550, colour: "green" } },
    appenders: { ewoo: { type: "file", filename: "ewoo.log" } },
    categories: { default: { appenders: ['ewoo'], level: "nsibull" } }
})

const logger = log4js.getLogger("nsibull");
logger.trace("this is a trace message");
logger.debug("Some debug messages");
logger.info("info message");
logger.warn("be warned");
logger.error("an error has occurred");
logger.fatal("this is a fatal error!");
logger.mark("this is the 'mark' logging level");
logger.nsibull("this is a custom logging level called nsibull");