#! /usr/bin/env node

import { Command } from "commander"
const program = new Command()
import { herokuLogsCommand, processIndex } from "./commands/logs"

// If no arguments are passed to the program, output the help
// if (!process.argv.slice(2).length) {
//   program.outputHelp()
// }

program
  .version("0.0.1")
  .description("Heroku logs: cli wrapper")
  .option("-t --tail", "Tail the logs", true)
  .option("-i --index [index]", "Index of the app to log")
  .option(
    "-a, --app [app name]",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()
// If the index option is passed, process the index
if (options.index) {
  options.app = processIndex(options.index)
}
// Command handler
herokuLogsCommand(options.app, options.tail)
