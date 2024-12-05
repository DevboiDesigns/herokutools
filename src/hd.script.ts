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
  // .option("-d --dyno [dyno type]", "Dyno type to scale")
  .option(
    "-a, --app [app name]",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()

if (options.restart) {
  Dyno.restart(options.app)
} else {
  const args = program.args
  console.log(args)
  Dyno.scale(options.app, args[0], args[1])
}

