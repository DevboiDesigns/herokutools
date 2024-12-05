import { spawnSync } from "child_process"
import DB from "../utils/db"
import processIndex from "../utils/process.index"

export default class HLogs {
  constructor(options: any) {
    new DB(options)
    if (options.index) {
      // If the index option is passed, process the index
      options.app = processIndex(options.index)
    }
    this.herokuLogsCommand(options.app, options.tail)
  }

  /**
   * * Heroku logs command
   * @param appName
   * @param tail
   */
  herokuLogsCommand = (app?: string, tail: boolean = true) => {
    if (!app) {
      app = process.env.HEROKU_TOOL_APP_1 || "no app name found"
    }
    console.log("Fetching logs for...", app)
    const command = `heroku logs -a ${app}` + (tail ? " --tail" : "")
    const child = spawnSync(command, {
      shell: true,
      stdio: "inherit",
    })
    if (child.error) {
      console.log(child.error)
    } else {
      console.log(child.stdout)
    }
  }
}
