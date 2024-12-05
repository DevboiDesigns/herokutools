import { execSync } from "child_process"

export default class Dyno {
  constructor(options: any, args: any) {
    if (options.restart) {
      this.restart(options.app)
    } else {
      this.scale(options.app, args[0], args[1])
    }
  }
  private restart = async (app: string) => {
    console.log(`Restarting ${app} dynos`)
    const command = `heroku restart --app ${app}`
    console.log(`Running command: ${command}`)
    // execSync(command, { stdio: "inherit" })
  }

  private scale = async (app: string, dyno: string, size: string) => {
    console.log(`Scaling ${app} dynos to ${size}`)
    const command = `heroku ps:scale ${dyno}=${size} --app ${app}`
    console.log(`Running command: ${command}`)
    // execSync(command, { stdio: "inherit" })
  }
}
