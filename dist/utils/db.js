"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// save env variables to a file
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// ENV file path
const filepath = path_1.default.join(process.cwd(), "./heroku.tool/data.txt");
const dirpath = path_1.default.join(process.cwd(), "./heroku.tool");
class DB {
    constructor(options) {
        /**
         * * Get Default App Name (HEROKU_TOOL_APP_1)
         * @returns {string}
         */
        this.getDefaultAppName = () => {
            const envFile = this.readEnv();
            return envFile.HEROKU_TOOL_APP_1 || process.env.HEROKU_TOOL_APP_1;
        };
        /**
         * * Check if env file exists
         *   If not, create it
         */
        this.checkIfEnvFileExists = () => {
            if (!fs_1.default.existsSync(filepath)) {
                const dir = fs_1.default.mkdirSync(dirpath, {
                    recursive: true,
                });
                if (dir) {
                    fs_1.default.writeFileSync(filepath, "");
                }
            }
        };
        /**
         * * Persist environment variables to a file
         * @param env
         */
        this.saveEnvVariablesToFile = (env) => {
            const envFile = this.readEnv();
            const newEnv = Object.assign(Object.assign({}, envFile), env);
            const writeStream = fs_1.default.createWriteStream(filepath, {
                flags: "w",
            });
            Object.entries(newEnv).map(([key, value]) => {
                console.log(`Setting ${key} to: ${value}`);
                writeStream.write(`${key}=${value}\n`);
            });
            writeStream.end();
        };
        /**
         * * Read environment variables from a file
         * @returns
         */
        this.readEnv = () => {
            const envFile = fs_1.default.readFileSync(filepath, "utf8");
            const env = envFile
                .split("\n")
                .filter((line) => line)
                .reduce((acc, curr) => {
                const [key, value] = curr.split("=");
                acc[key] = value;
                return acc;
            }, {});
            return env;
        };
        /**
         * * Handle environment variables
         * @param appName {string}
         */
        this.handleEnv = (appName) => {
            let app1 = process.env.HEROKU_TOOL_APP_1;
            if (appName) {
                app1 = appName;
            }
            else {
                app1 = this.readEnv().HEROKU_TOOL_APP_1;
            }
            let app2 = process.env.HEROKU_TOOL_APP_2;
            let app3 = process.env.HEROKU_TOOL_APP_3;
            if (app1) {
                process.env.HEROKU_TOOL_APP_1 = app1;
                this.saveEnvVariablesToFile({ HEROKU_TOOL_APP_1: app1 });
            }
            if (app2) {
                process.env.HEROKU_TOOL_APP_2 = app2;
                this.saveEnvVariablesToFile({ HEROKU_TOOL_APP_2: app2 });
            }
            if (app3) {
                process.env.HEROKU_TOOL_APP_3 = app3;
                this.saveEnvVariablesToFile({ HEROKU_TOOL_APP_3: app3 });
            }
        };
        this.checkIfEnvFileExists();
        this.handleEnv(options.app);
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map