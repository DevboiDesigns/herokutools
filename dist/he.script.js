#! /usr/bin/env node
"use strict";
/**
 * This script will allow you to set environment variables for a Heroku app
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const env_1 = __importDefault(require("./commands/env"));
program
    .version("0.0.1")
    .description("Heroku env: cli wrapper")
    // .option("-s --set", "Set environment variables", true)
    .option("-e --env [env]", "Environment variables to set")
    .option("-a --app [app name]", "App to set environment variables for")
    .parse(process.argv);
const options = program.opts();
// Command handler
new env_1.default(options, program.args);
console.log(`🌟 Coming Soon 🌟\n\n...from herokutools...\n\nThe ability to set environment variables 🔐 for your app!`);
//# sourceMappingURL=he.script.js.map