#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const dynos_1 = __importDefault(require("./commands/dynos"));
/**
 * This script will allow you adjust your Heroku app's dynos, scale up or down and restart
 */
program
    .version("0.0.1")
    .description("Heroku dynos: cli wrapper")
    // .option("-s --scale", "Scale dynos")
    .option("-r --restart", "Restart dynos")
    // .option("-d --dyno [dyno type]", "Dyno type to scale")
    .option("-a, --app [app name]", "Logs for your Heroku app, defaults to the saved app name")
    .parse(process.argv);
const options = program.opts();
if (options.restart) {
    dynos_1.default.restart(options.app);
}
else {
    const args = program.args;
    console.log(args);
    dynos_1.default.scale(options.app, args[0], args[1]);
}
//# sourceMappingURL=hd.script.js.map