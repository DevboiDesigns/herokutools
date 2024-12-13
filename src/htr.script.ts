#! /usr/bin/env node
import { Command } from "commander"
const program = new Command()
import { TransferApp } from "./commands/transfer"

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
  .option(
    "-a, --app [app name]",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()
// START
new TransferApp(options)
