#! /usr/bin/env node

import { Command } from "commander"
import figlet from "figlet"

console.log(figlet.textSync("heroutools"))

const program = new Command()

if (!process.argv.slice(2).length) {
  // If no arguments are passed to the program, output the help
  program.outputHelp()
}

program
  .version("0.0.1")
  .description("Heroku CLI wrapper for common tasks")
  .option("-l, --ls  [value]", "List directory contents") // 'ls' is an option that can be passed to the program
  .option("-m, --mkdir <value>", "Create a directory")
  // .option("-t, --touch <value>", "Create a file")
  .parse(process.argv)

const options = program.opts()

if (options.ls) {
  // will capture the value of the option with the name 'ls'
  console.log("ls", options.ls)
}
