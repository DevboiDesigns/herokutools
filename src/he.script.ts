#! /usr/bin/env node

/**
 * This script will allow you to set environment variables for a Heroku app
 */

import { Command } from "commander"
const program = new Command()
import Env from "./commands/env"

program
  .version("0.0.1")
  .description("Heroku env: cli wrapper")
  .option("-i --index", "Process index")
  .option("-g --get", "Get environment variables")
  .option("-r --remove", "Remove environment variables")
  .option("-a --app [app name]", "App to set environment variables for")
  .parse(process.argv)

const options = program.opts()
// Command handler
new Env(options, program.args)

// console.log(
//   `🌟 Coming Soon 🌟\n\n...from herokutools...\n\nThe ability to set environment variables 🔐 for your app!`
// )
