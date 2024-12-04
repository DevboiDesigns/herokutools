#! /usr/bin/env node

import { spawnSync } from "child_process"
import { Command } from "commander"
const program = new Command()

// If no arguments are passed to the program, output the help
// if (!process.argv.slice(2).length) {
//   program.outputHelp()
// }

const herokuLogs = (appName: string) => {
  if (!appName) {
    appName = "stocklift-dev"
  }
  console.log(`Fetching logs for ${appName}`)
  const child = spawnSync(`heroku logs -a ${appName} --tail`, {
    shell: true,
    stdio: "inherit",
  })

  if (child.error) {
    console.log(child.error)
  } else {
    console.log(child.stdout)
  }
}

program
  .version("0.0.1")
  .description("Heroku logs: cli wrapper")
  .option(
    "-a, --app <app name>",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

const options = program.opts()

herokuLogs(options.app)
