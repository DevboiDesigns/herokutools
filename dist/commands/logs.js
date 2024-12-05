"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const db_1 = __importDefault(require("../utils/db"));
const process_index_1 = __importDefault(require("../utils/process.index"));
class HLogs {
    constructor(options) {
        /**
         * * Heroku logs command
         * @param appName
         * @param tail
         */
        this.herokuLogsCommand = (app, tail = true) => {
            if (!app) {
                app = process.env.HEROKU_TOOL_APP_1 || "no app name found";
            }
            console.log("Fetching logs for...", app);
            const command = `heroku logs -a ${app}` + (tail ? " --tail" : "");
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
        new db_1.default(options);
        if (options.index) {
            // If the index option is passed, process the index
            options.app = (0, process_index_1.default)(options.index);
        }
        this.herokuLogsCommand(options.app, options.tail);
    }
}
exports.default = HLogs;
//# sourceMappingURL=logs.js.map