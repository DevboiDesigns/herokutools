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
    .option("-r --restart", "Restart dynos")
    .option("-a, --app [app name]", "Logs for your Heroku app, defaults to the saved app name")
    .parse(process.argv);
const options = program.opts();
// Command handler
new dynos_1.default(options, program.args);
//# sourceMappingURL=hd.script.js.map