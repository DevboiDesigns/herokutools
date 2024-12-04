#! /usr/bin/env node

import { Command } from "commander"
const program = new Command()

// import Env from "./commands/env"

program
  .version("0.0.1")
  .description("Heroku env: cli wrapper")
  // .option("-s --set", "Set environment variables", true)
  .option("-e --env [env]", "Environment variables to set")
  .option("-a --app [app name]", "App to set environment variables for")
  .parse(process.argv)

const options = program.opts()

// console.log(options.env.split(","))
const str = options.env as string // 'VAR1="value1", VAR2="value2", VAR3="value3"'

const env = str.split(",").reduce((acc: { [key: string]: string }, curr) => {
  const [key, value] = curr.split("=")
  acc[key.trim()] = value.trim().replace(/['"]/g, "")
  return acc
}, {})

console.log(env)

// Command handler
// new Env(options.app, options.set).run()

// Example Usage with env variables
// $ heroku-cli env:set VAR1=value VAR2=value
