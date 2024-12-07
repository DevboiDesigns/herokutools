import { spawnSync } from "child_process"
import { execSync } from "child_process"
import DB from "../utils/db"
import processIndex from "../utils/process.index"
import verifyApp from "../utils/verify.app"
import readEnvVariablePrams from "../utils/read.env.var"

/**
 * This will allow you to set environment variables for a Heroku app
 */

export default class Env {
  constructor(options: any, args: any) {
    new DB(options)
    if (options.index) {
      processIndex(options.index)
    }
    console.log(options, args)

    if (options.get) {
      // GET
      this.get(options.app)
      return
    }
    if (options.remove) {
      // REMOVE
      this.remove(args[0], options.app)
      return
    }
    // SET Multi - Default
    this.setMulti(readEnvVariablePrams(args), options.app)
  }

  // GET env vars from Heroku
  get = async (app?: string | null) => {
    app = verifyApp(app)
    console.log(`hasApp: ${app}`)
    if (!app) {
      return
    }
    try {
      const command = `heroku config --app ${app}`
      const child = spawnSync(command, {
        shell: true,
        stdio: "inherit",
      })
      if (child.error) {
        console.log(child.error)
      } else {
        console.log(child.stdout) // eslint-disable-line
      }
    } catch (error) {
      console.error(error)
    }
  }

  setSingle = async (key: string, value: string, app?: string | null) => {
    app = verifyApp(app)
    console.log(`hasApp: ${app}`)
    if (!app) {
      return
    }
    if (!key || !value) {
      console.error("Please provide a key and value")
      return
    }
    try {
      const command = `heroku config:set ${key}=${value} --app ${app}`
      // execSync(`heroku config:set ${key}=${value} --app ${app}`)
      const child = spawnSync(command, {
        shell: true,
        stdio: "inherit",
      })
      if (child.error) {
        console.log(child.error)
      } else {
        console.log(child.stdout) // eslint-disable-line
      }
      console.log(`Successfully set ${key}=${value}`)
    } catch (error) {
      console.error(error)
    }
  }

  // SET env var on Heroku
  setMulti = async (
    envVars: {
      [key: string]: string
    },
    app?: string | null
  ) => {
    app = verifyApp(app)
    console.log(`hasApp: ${app}`)
    if (!app) {
      return
    }
    try {
      // set all the env vars
      Object.entries(envVars).forEach(([key, value]) => {
        this.setSingle(key, value, app)
      })
      console.log(`Successfully set all environment variables`)
    } catch (error) {
      console.error(error)
    }
  }

  // REMOVE env var from Heroku
  remove = async (key: string, app?: string | null) => {
    app = verifyApp(app)
    console.log(`hasApp: ${app}`)
    if (!app) {
      return
    }
    try {
      execSync(`heroku config:unset ${key} --app ${app}`)
      console.log(`Successfully removed ${key}`)
    } catch (error) {
      console.error(error)
    }
  }
}
