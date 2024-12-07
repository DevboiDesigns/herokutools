#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const env_1 = __importDefault(require("./commands/env"));
/**
 * * This script will allow you to set environment variables for a Heroku app
 */
program
    .version("0.0.1")
    .description("Heroku env: cli wrapper")
    .option("-i --index", "Process index")
    .option("-g --get", "Get environment variables")
    .option("-r --remove", "Remove environment variables")
    .option("-a --app [app name]", "App to set environment variables for")
    .parse(process.argv);
const options = program.opts();
// Command handler
new env_1.default(options, program.args);
//# sourceMappingURL=he.script.js.map