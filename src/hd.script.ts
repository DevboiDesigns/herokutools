#! /usr/bin/env node

import { Command } from "commander"
const program = new Command()

/**
 * This script will allow you adjust your Heroku app's dynos, scale up or down and restart
 */

program
  .version("0.0.1")
  .description("Heroku dynos: cli wrapper")
  .option("-s --scale", "Scale dynos", true)
  .option("-r --restart", "Restart dynos", true)
  .option("-a --app [app name]", "App to set environment variables for")
  .parse(process.argv)

// const options = program.opts()

console.log(
  `Coming Soon! The ability to adjust your Heroku app's dynos, scale up or down and restart`
)
