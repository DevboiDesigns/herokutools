import { execSync } from "child_process"

export default class Dyno {
  constructor() {}
  public static async restart(app: string) {
    console.log(`Restarting ${app} dynos`)
    const command = `heroku restart --app ${app}`
    console.log(`Running command: ${command}`)
    // execSync(command, { stdio: "inherit" })
  }

  public static async scale(app: string, dyno: string, size: string) {
    console.log(`Scaling ${app} dynos to ${size}`)
    const command = `heroku ps:scale ${dyno}=${size} --app ${app}`
    console.log(`Running command: ${command}`)
    // execSync(command, { stdio: "inherit" })
  }
}
