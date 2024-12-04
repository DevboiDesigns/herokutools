"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processIndex = exports.herokuLogsCommand = void 0;
const child_process_1 = require("child_process");
const processIndex = (index) => {
    const app1 = process.env.HCI_APP_1;
    const app2 = process.env.HCI_APP_2;
    const app3 = process.env.HCI_APP_3;
    switch (index) {
        case "1":
            return app1;
        case "2":
            return app2;
        case "3":
            return app3;
        default:
            console.log("Invalid index");
    }
};
exports.processIndex = processIndex;
const herokuLogsCommand = (appName, tail) => {
    if (!appName) {
        appName = process.env.HCI_APP_1 || "no_app_name_found";
    }
    console.log("Fetching logs for...", appName);
    const command = `heroku logs -a ${appName}` + (tail ? " --tail" : "");
    const child = (0, child_process_1.spawnSync)(command, {
        shell: true,
        stdio: "inherit",
    });
    if (child.error) {
        console.log(child.error);
    }
    else {
        console.log(child.stdout);
    }
};
exports.herokuLogsCommand = herokuLogsCommand;
//# sourceMappingURL=logs.js.map