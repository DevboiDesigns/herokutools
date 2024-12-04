import { spawnSync } from "child_process"

const processIndex = (index: string) => {
  const app1 = process.env.HCI_APP_1
  const app2 = process.env.HCI_APP_2
  const app3 = process.env.HCI_APP_3
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

const herokuLogsCommand = (appName: string, tail: boolean) => {
  if (!appName) {
    appName = process.env.HCI_APP_1 || "no_app_name_found"
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

export { herokuLogsCommand, processIndex }
