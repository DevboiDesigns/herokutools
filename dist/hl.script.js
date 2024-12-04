#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const logs_1 = __importDefault(require("./commands/logs"));
// If no arguments are passed to the program, output the help
// if (!process.argv.slice(2).length) {
//   program.outputHelp()
// }
program
    .version("0.0.1")
    .description("Heroku logs: cli wrapper")
    .option("-a, --app <app name>", "Logs for your Heroku app, defaults to the saved app name")
    .parse(process.argv);
const options = program.opts();
(0, logs_1.default)(options.app);
//# sourceMappingURL=hl.script.js.map