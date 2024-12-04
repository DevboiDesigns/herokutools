#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const logs_1 = require("./commands/logs");
// If no arguments are passed to the program, output the help
// if (!process.argv.slice(2).length) {
//   program.outputHelp()
// }
program
    .version("0.0.1")
    .description("Heroku logs: cli wrapper")
    .option("-t --tail", "Tail the logs", true)
    .option("-i --index [index]", "Index of the app to log")
    .option("-a, --app [app name]", "Logs for your Heroku app, defaults to the saved app name")
    .parse(process.argv);
const options = program.opts();
// If the index option is passed, process the index
if (options.index) {
    options.app = (0, logs_1.processIndex)(options.index);
}
// Command handler
(0, logs_1.herokuLogsCommand)(options.app, options.tail);
//# sourceMappingURL=hl.script.js.map