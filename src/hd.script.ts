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
  .option("-r --restart", "Restart dynos")
  .option(
    "-a, --app [app name]",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()
// Command handler
new Dyno(options, program.args)
