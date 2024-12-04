import { spawnSync } from "child_process"

const herokuLogsCommand = (appName: string) => {
  if (!appName) {
    appName = "stocklift-dev"
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
