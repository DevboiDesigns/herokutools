import fs from "fs"
import path from "path"

// DB file path
const filepath = path.join(process.cwd(), "./heroku.tool/data.txt")
const dirpath = path.join(process.cwd(), "./heroku.tool")

export default class DB {
  constructor(options: any) {
    this.checkIfEnvFileExists()
    this.handleEnv(options.app)
  }

  /**
   * * Get Default App Name (HEROKU_TOOL_APP_1)
   * @returns {string}
   */
  public getDefaultAppName = (): string | undefined => {
    const envFile = this.readEnv()
    return envFile.HEROKU_TOOL_APP_1 || process.env.HEROKU_TOOL_APP_1
  }

  /**
   * * Check if env file exists
   *   If not, create it
   */
  private checkIfEnvFileExists = () => {
    if (!fs.existsSync(filepath)) {
      const dir = fs.mkdirSync(dirpath, {
        recursive: true,
      })
      if (dir) {
        fs.writeFileSync(filepath, "")
      }
    }
  }

  /**
   * * Persist environment variables to a file
   * @param env
   */
  private saveToFile = (env: { [key: string]: string }) => {
    const envFile = this.readEnv()
    const newEnv = { ...envFile, ...env }
    const writeStream = fs.createWriteStream(filepath, {
      flags: "w",
    })
    Object.entries(newEnv).map(([key, value]) => {
      console.log(`Setting ${key} to: ${value}`)
      writeStream.write(`${key}=${value}\n`)
    })
    writeStream.end()
  }

  /**
   * * Read environment variables from a file
   * @returns
   */
  private readEnv = () => {
    const envFile = fs.readFileSync(filepath, "utf8")
    const env = envFile
      .split("\n")
      .filter((line) => line)
      .reduce((acc: { [key: string]: string }, curr) => {
        const [key, value] = curr.split("=")
        acc[key] = value
        return acc
      }, {})
    return env
  }

  /**
   * * Handle environment variables
   * @param appName {string}
   */
  private handleEnv = (appName?: string) => {
    let app1 = process.env.HEROKU_TOOL_APP_1
    if (appName) {
      app1 = appName
    } else {
      app1 = this.readEnv().HEROKU_TOOL_APP_1
    }
    let app2 = process.env.HEROKU_TOOL_APP_2
    let app3 = process.env.HEROKU_TOOL_APP_3

    if (app1) {
      process.env.HEROKU_TOOL_APP_1 = app1
      this.saveToFile({ HEROKU_TOOL_APP_1: app1 })
    }
    if (app2) {
      process.env.HEROKU_TOOL_APP_2 = app2
      this.saveToFile({ HEROKU_TOOL_APP_2: app2 })
    }
    if (app3) {
      process.env.HEROKU_TOOL_APP_3 = app3
      this.saveToFile({ HEROKU_TOOL_APP_3: app3 })
    }
  }
}
