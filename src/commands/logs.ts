import { spawnSync } from "child_process"
import handleEnv from "../utils/persist"

export default class HLogs {
  constructor(options: any) {
    handleEnv(options.app)
    if (options.index) {
      // If the index option is passed, process the index
      options.app = this.processIndex(options.index)
    }
    this.herokuLogsCommand(options.app, options.tail)
  }

  /**
   * * Process the index
   * @param index
   * @returns
   */
  processIndex = (index: string) => {
    const app1 = process.env.HEROKU_TOOL_APP_1
    const app2 = process.env.HEROKU_TOOL_APP_2
    const app3 = process.env.HEROKU_TOOL_APP_3
    switch (index) {
      case "1":
        return app1
      case "2":
        return app2
      case "3":
        return app3
      default:
        console.log("Invalid index")
    }
  }

  /**
   * * Heroku logs command
   * @param appName
   * @param tail
   */
  herokuLogsCommand = (appName?: string, tail: boolean = true) => {
    if (!appName) {
      appName = process.env.HEROKU_TOOL_APP_1 || "no_app_name"
    }
    console.log("Fetching logs for...", appName)
    const command = `heroku logs -a ${appName}` + (tail ? " --tail" : "")
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
