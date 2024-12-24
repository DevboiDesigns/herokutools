"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// DB file path
const dirString = "./data/";
const fileString = `${dirString}/env.txt`;
const dirpath = path_1.default.join(__dirname, "..", dirString);
// console.log(`DB directory path: ${dirpath}`)
const filepath = path_1.default.join(__dirname, "..", fileString);
// console.log(`DB file path: ${filepath}`)
class DB {
    constructor(options) {
        /**
         * * Get Default App Name (HEROKU_TOOL_APP_1)
         * @returns {string | undefined}
         */
        this.getDefaultAppName = () => {
            const envFile = this.readDBFile();
            return envFile.HEROKU_TOOL_APP_1 || process.env.HEROKU_TOOL_APP_1;
        };
        /**
         * * Check if env file exists
         *   If not, create it
         */
        this.checkIfDBFileExists = () => {
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
        this.saveToDBFile = (env) => {
            const envFile = this.readDBFile();
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
        this.readDBFile = () => {
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
         * @param appName
         */
        this.handleEnvParameters = (appName) => {
            let app1 = process.env.HEROKU_TOOL_APP_1;
            if (appName) {
                app1 = appName;
            }
            else {
                app1 = this.readDBFile().HEROKU_TOOL_APP_1;
            }
            let app2 = process.env.HEROKU_TOOL_APP_2;
            let app3 = process.env.HEROKU_TOOL_APP_3;
            if (app1) {
                process.env.HEROKU_TOOL_APP_1 = app1;
                this.saveToDBFile({ HEROKU_TOOL_APP_1: app1 });
            }
            if (app2) {
                process.env.HEROKU_TOOL_APP_2 = app2;
                this.saveToDBFile({ HEROKU_TOOL_APP_2: app2 });
            }
            if (app3) {
                process.env.HEROKU_TOOL_APP_3 = app3;
                this.saveToDBFile({ HEROKU_TOOL_APP_3: app3 });
            }
        };
        this.checkIfDBFileExists();
        this.handleEnvParameters(options.app);
    }
}
exports.default = DB;
//# sourceMappingURL=db.js.map