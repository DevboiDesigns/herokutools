#! /usr/bin/env node
"use strict";
/**
 * This script will allow you to set environment variables for a Heroku app
 */
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
// import Env from "./commands/env"
program
    .version("0.0.1")
    .description("Heroku env: cli wrapper")
    // .option("-s --set", "Set environment variables", true)
    .option("-e --env [env]", "Environment variables to set")
    .option("-a --app [app name]", "App to set environment variables for")
    .parse(process.argv);
// const options = program.opts()
console.log(`Coming Soon! The ability to set environment variables for a Heroku app`);
// Command handler
// new Env(options.app, options.set).run()
// Example Usage with env variables
// $ heroku-cli env:set VAR1=value VAR2=value
//# sourceMappingURL=he.script.js.map