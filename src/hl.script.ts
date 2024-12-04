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
  .option("-i --index [index]", "Index of the app to log")
  .option(
    "-a, --app [app name]",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()
if (options.index) {
  const app1 = process.env.HCI_APP_1
  const app2 = process.env.HCI_APP_2
  const app3 = process.env.HCI_APP_3
  switch (options.index) {
    case "1":
      options.app = app1
      break
    case "2":
      options.app = app2
      break
    case "3":
      options.app = app3
      break
    default:
      console.log("Invalid index")
  }
}

// Command handler
herokuLogsCommand(options.app)
