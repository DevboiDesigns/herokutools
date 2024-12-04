import { spawnSync } from "child_process"

const herokuLogsCommand = (appName: string) => {
  console.log("Fetching logs...", appName)
  if (!appName) {
    appName = process.env.HCI_APP_1 || "no_app_name_found"
  }
  console.log(`Fetching logs for ${appName}`)
  const child = spawnSync(`heroku logs -a ${appName} --tail`, {
    shell: true,
    stdio: "inherit",
  })

  if (child.error) {
    console.log(child.error)
  } else {
    console.log(child.stdout)
  }
}

export default herokuLogsCommand
