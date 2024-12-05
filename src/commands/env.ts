import { execSync } from "child_process"
import DB from "../utils/db"
import processIndex from "../utils/process.index"

/**
 * This will allow you to set environment variables for a Heroku app
 */

export default class Env {
  constructor(options: any, args: any) {
    new DB(options)
    if (options.index) {
      processIndex(options.index)
    }
    // console.log(options, args)
  }
}
