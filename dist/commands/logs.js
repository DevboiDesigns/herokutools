"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class HLogs {
    constructor(options) {
        /**
         * * Process the index
         * @param index
         * @returns
         */
        this.processIndex = (index) => {
            const app1 = process.env.HEROKU_TOOL_APP_1;
            const app2 = process.env.HEROKU_TOOL_APP_2;
            const app3 = process.env.HEROKU_TOOL_APP_3;
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
        /**
         * * Heroku logs command
         * @param appName
         * @param tail
         */
        this.herokuLogsCommand = (appName, tail) => {
            if (!appName) {
                appName = process.env.HEROKU_TOOL_APP_1 || "no_app_name_found";
            }
            else {
                if (!process.env.HEROKU_TOOL_APP_1) {
                    console.log("Setting HEROKU_TOOL_APP_1 to: ", appName);
                    process.env.HEROKU_TOOL_APP_1 = appName;
                }
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
        if (options.index) {
            // If the index option is passed, process the index
            options.app = this.processIndex(options.index);
        }
        this.herokuLogsCommand(options.app, options.tail);
    }
}
exports.default = HLogs;
//# sourceMappingURL=logs.js.map