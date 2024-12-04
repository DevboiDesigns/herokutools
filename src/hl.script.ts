#! /usr/bin/env node

import { Command } from "commander"
const program = new Command()
import herokuLogsCommand from "./commands/logs"

// If no arguments are passed to the program, output the help
// if (!process.argv.slice(2).length) {
//   program.outputHelp()
// }

program
  .version("0.0.1")
  .description("Heroku logs: cli wrapper")
  .option(
    "-a, --app <app name>",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()

herokuLogsCommand(options.app)
