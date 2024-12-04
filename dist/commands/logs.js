"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const herokuLogsCommand = (appName) => {
    console.log("Fetching logs...", appName);
    if (!appName) {
        appName = process.env.HCI_APP_1 || "no_app_name_found";
    }
    console.log(`Fetching logs for ${appName}`);
    const child = (0, child_process_1.spawnSync)(`heroku logs -a ${appName} --tail`, {
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
exports.default = herokuLogsCommand;
//# sourceMappingURL=logs.js.map