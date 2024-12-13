import { spawnSync } from "child_process"
import processIndex from "../utils/process.index"
import inquirer from "inquirer"

export class TransferApp {
  constructor(options: any) {
    if (options.index) {
      // If the index option is passed, process the index
      options.app = processIndex(options.index)
    }
    this.transferApp(options.app, options.email)
  }

  /**
   * * Transfer an app to another account
   * @param app 
   * @param email 
   * @returns 
   */
  transferApp = (app: string, email: string) => {
    if (!email) {
      console.log("Please provide an email address")
      return
    }
    if (!app) {
      app = process.env.HEROKU_TOOL_APP_1 || "no app name found"
      if (app === "no app name found") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "app",
              message: `What app do you want to transfer?`,
              validate: function (value) {
                if (value.length) {
                  return true
                } else {
                  return "Please enter the app name"
                }
              },
            },
          ])
          .then((result) => {
            app = result.app
            inquirer
              .prompt([
                {
                  type: "confirm",
                  name: "answer",
                  message: `Are you sure you want to transfer the ${app} app to ${email}?`,
                  choices: ["y", "n"],
                },
              ])
              .then(async (result) => {
                const { answer } = result
                console.log(answer)
                if (answer === false) {
                  console.log("Exiting...")
                  return
                }
                const command = `heroku apps:transfer -a ${app} ${email}`
                const child = spawnSync(command, {
                  shell: true,
                  stdio: "inherit",
                })
                if (child.error) {
                  console.log(child.error)
                } else {
                  console.log(child.stdout)
                }
              })
          })
      }
    }
  }
}
