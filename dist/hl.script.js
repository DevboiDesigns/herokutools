#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const logs_1 = __importDefault(require("./commands/logs"));
/**
 * Command line interface for Heroku logs
 *
 * @param {number} index - Index of the app to log
 * @param {boolean} tail - Tail the logs
 * @param {string} app - Heroku app name
 * @returns {void}
 * @example hl -a app-name -t
 * @example hl -i 1 -t
 * @example hl -t
 * @example hl
 *
 * @description
 * The command line interface for Heroku logs.
 *
 */
program
    .version("0.0.1")
    .name("hl")
    .description("HLogs: wrapper for Heroku logs")
    .option("-t --tail", "Tail the logs", true)
    .option("-i --index [index]", "Index of the app to log")
    .option("-a, --app [app name]", "Logs for your Heroku app, defaults to the saved app name")
    .parse(process.argv);
// Command handler
new logs_1.default(program.opts());
//# sourceMappingURL=hl.script.js.map