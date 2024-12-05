import { execSync } from "child_process";

export default class Dyno {
  constructor() {}
  public static async restart(app: string) {
    console.log(`Restarting ${app} dynos`)
    execSync(`heroku restart --app ${app}`, { stdio: "inherit" })
  }

  public static async scale(app: string, dyno: string, size: string) {
    console.log(`Scaling ${app} dynos to ${size}`)
    execSync(`heroku ps:scale ${dyno}=${size} --app ${app}`, { stdio: "inherit" })
  }
}