import { execSync } from "child_process"
import DB from "../utils/db"
import processIndex from "../utils/process.index"

export default class Dyno {
  constructor(options: any, args: any) {
    new DB(options)
    if (options.index) {
      // If the index option is passed, process the index
      options.app = processIndex(options.index)
    }
    if (options.restart) {
      this.restart(options.app)
    } else {
      this.scale(args[0], args[1], options.app)
    }
  }
  private restart = async (app?: string) => {
    if (!app) {
      app = process.env.HEROKU_TOOL_APP_1
    } else {
      console.log("No app name found")
      return
    }
    console.log(`Restarting ${app} dynos`)
    const command = `heroku restart --app ${app}`
    console.log(`Running command: ${command}`)
    // execSync(command, { stdio: "inherit" })
  }

  private scale = async (dyno: string, size: string, app?: string) => {
    if (!app) {
      app = process.env.HEROKU_TOOL_APP_1
    } else {
      console.log("No app name found")
      return
    }
    console.log(`Scaling ${app} dynos to ${size}`)
    const command = `heroku ps:scale ${dyno}=${size} --app ${app}`
    console.log(`Running command: ${command}`)
    // execSync(command, { stdio: "inherit" })
  }
}
