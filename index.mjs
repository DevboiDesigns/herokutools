import { program } from "commander"

program.version("0.0.1").description("hl command: Heroku logs")

console.log("process.argv", process.argv)

// program.parse(process.argv).action((options) => {
//   console.log("options", options)
// })

program
  .command("hl")
  .description("Heroku logs")
  // .option("-a, --app <type>", "App name")
  // .option("-t, --tail <boolean>", "Show logs in real time")
  .action(herokuLogs)

const herokuLogs = () => {
  console.log("herokuLogs")
  const { spawnSync } = require("child_process")
  const child = spawnSync("heroku logs -a stocklift-dev --tail", {
    shell: true,
    stdio: "inherit",
  })

  console.log("error", child.error)
  console.log("stdout ", child.stdout)
  console.log("stderr ", child.stderr)
}
