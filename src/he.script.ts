#! /usr/bin/env node
import { Command } from "commander"
const program = new Command()
import Env from "./commands/env"

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
  .parse(process.argv)

const options = program.opts()
// Command handler
new Env(options, program.args)
