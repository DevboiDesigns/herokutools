import { spawnSync } from "child_process"
import { execSync } from "child_process"
import DB from "../utils/db"
import processIndex from "../utils/process.index"
import verifyApp from "../utils/verify.app"

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
    }
    if (options.set) {
      // SET
      this.set(args[0], args[1], options.app)
    }
    if (options.remove) {
      // REMOVE
      this.remove(args[0], options.app)
    }
  }

  // GET env vars from Heroku
  get = async (app?: string) => {
    verifyApp(app)
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

  // SET env var on Heroku
  set = async (key: string, value: string, app?: string) => {
    verifyApp(app)
    try {
      execSync(`heroku config:set ${key}=${value} --app ${app}`)
      console.log(`Successfully set ${key}=${value}`)
    } catch (error) {
      console.error(error)
    }
  }

  // REMOVE env var from Heroku
  remove = async (key: string, app?: string) => {
    verifyApp(app)
    try {
      execSync(`heroku config:unset ${key} --app ${app}`)
      console.log(`Successfully removed ${key}`)
    } catch (error) {
      console.error(error)
    }
  }
}
