#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
console.log(figlet_1.default.textSync("heroutools"));
const program = new commander_1.Command();
if (!process.argv.slice(2).length) {
    // If no arguments are passed to the program, output the help
    program.outputHelp();
}
program
    .version("0.0.1")
    .description("Heroku CLI wrapper for common tasks")
    .option("-l, --ls  [value]", "List directory contents") // 'ls' is an option that can be passed to the program
    .option("-m, --mkdir <value>", "Create a directory")
    // .option("-t, --touch <value>", "Create a file")
    .parse(process.argv);
const options = program.opts();
if (options.ls) {
    // will capture the value of the option with the name 'ls'
    console.log("ls", options.ls);
}
//# sourceMappingURL=index.js.map