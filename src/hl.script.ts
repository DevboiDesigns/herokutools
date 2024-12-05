#! /usr/bin/env node
import { Command } from "commander"
const program = new Command()
import HLogs from "./commands/logs"
import { setEnv } from "./utils/persist"
setEnv()

/**
 * Command line interface for Heroku logs
 *
 * @param {number} index - Index of the app to log
 * @param {boolean} tail - Tail the logs
 * @param {string} app - Heroku app name
 * @returns {void}
 * @example hl -a app-name -t
 * @example hl -i 1 -t
 * @example hl -t
 * @example hl
 *
 * @description
 * The command line interface for Heroku logs.
 *
 */

program
  .version("0.0.1")
  .name("hl")
  .description("HLogs: wrapper for Heroku logs")
  .option("-t --tail", "Tail the logs", true)
  .option("-i --index [index]", "Index of the app to log")
  .option(
    "-a, --app [app name]",
    "Logs for your Heroku app, defaults to the saved app name"
  )
  .parse(process.argv)

// Command handler
new HLogs(program.opts())
