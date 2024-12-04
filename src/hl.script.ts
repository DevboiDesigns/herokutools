#! /usr/bin/env node

import { Command } from "commander"
import { spawnSync } from "child_process"
const program = new Command()

// program.version("0.0.1").description("hl command: Heroku logs")

// console.log("process.argv", process.argv)

if (!process.argv.slice(2).length) {
  // If no arguments are passed to the program, output the help
  program.outputHelp()
}

program
  .version("0.0.1")
  .description("Heroku logs: wrapper")
  // .option("-a, --app <type>", "App name")
  // .option("-t, --tail <boolean>", "Show logs in real time")
  .option("-a, --app <app name>", "Logs for an app")
  // .option("-t, --touch <value>", "Create a file")
  .parse(process.argv)

const options = program.opts()

if (options.app) {
  herokuLogs(options.app)
}

function herokuLogs(appName: string) {
  console.log("herokuLogs for:", appName)

  const child = spawnSync(`heroku logs -a ${appName} --tail`, {
    shell: true,
    stdio: "inherit",
  })

  // console.log("error", child.error)
  console.log("stdout ", child.stdout)
  // console.log("stderr ", child.stderr)
}
