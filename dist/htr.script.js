#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
const transfer_1 = require("./commands/transfer");
//heroku apps:transfer -a appname email@email.com
/**
 * Command line interface for Hero Transfer
 *
 * @param {number} index - Index of the app to log
 * @param {string} app - Heroku app name
 * @param {string} email - Email to transfer the app to
 * @returns {void}
 * @example hl -a app-name -e email
 * @example hl -i 1 -e email
 * @example hl -e email
 *
 * @description
 * This script will allow you to transfer a Heroku app to another account
 *
 */
program
    .version("0.0.1")
    .name("hl")
    .description("HTransfer: wrapper for Heroku App Transfer")
    .option("-i --index [index]", "Index of the app to log")
    .option("-e --email [email]", "Email to transfer the app to")
    .option("-a, --app [app name]", "Logs for your Heroku app, defaults to the saved app name")
    .parse(process.argv);
const options = program.opts();
// START
new transfer_1.TransferApp(options);
//# sourceMappingURL=htr.script.js.map