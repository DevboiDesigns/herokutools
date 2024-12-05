#! /usr/bin/env node

import { Command } from "commander"
const program = new Command()
import Dyno from "./commands/dynos"

/**
 * This script will allow you adjust your Heroku app's dynos, scale up or down and restart
 */

program
  .version("0.0.1")
  .description("Heroku dynos: cli wrapper")
  // .option("-s --scale", "Scale dynos")
  .option("-r --restart", "Restart dynos")
  .option("-a --app [app name]", "App to set environment variables for")
  .option("-d --dyno [dyno type]", "Dyno type to scale")
  .parse(process.argv)

const options = program.opts()

if (options.restart) {
  Dyno.restart(options.app)
} else {
  Dyno.scale(options.app, options.dyno, "free")
}

console.log(
  `Coming Soon! The ability to adjust your Heroku app's dynos, scale up or down and restart`
)
