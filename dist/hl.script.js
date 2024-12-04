#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
commander_1.program.version("0.0.1").description("hl command: Heroku logs");
console.log("process.argv", process.argv);
// program.parse(process.argv).action((options) => {
//   console.log("options", options)
// })
commander_1.program
    .command("hl")
    .description("Heroku logs")
    // .option("-a, --app <type>", "App name")
    // .option("-t, --tail <boolean>", "Show logs in real time")
    .action(herokuLogs);
function herokuLogs() {
    console.log("herokuLogs");
    const { spawnSync } = require("child_process");
    const child = spawnSync("heroku logs -a stocklift-dev --tail", {
        shell: true,
        stdio: "inherit",
    });
    console.log("error", child.error);
    console.log("stdout ", child.stdout);
    console.log("stderr ", child.stderr);
}
//# sourceMappingURL=hl.script.js.map