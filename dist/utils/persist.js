"use strict";
// save env variables to a file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultAppName = exports.readEnv = exports.persistEnv = exports.setEnv = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * * Persist environment variables to a file
 * @param env
 */
const persistEnv = (env) => {
    const envPath = path_1.default.join(process.cwd(), "./data/data.txt");
    const envFile = fs_1.default.createWriteStream(envPath);
    Object.entries(env).forEach(([key, value]) => {
        console.log(`Setting ${key} to: ${value}`);
        envFile.write(`${key}=${value}\n`);
    });
    envFile.end();
};
exports.persistEnv = persistEnv;
/**
 * * Read environment variables from a file
 * @returns
 */
const readEnv = () => {
    const envPath = path_1.default.join(process.cwd(), "./data/data.txt");
    const envFile = fs_1.default.readFileSync(envPath, "utf8");
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
exports.readEnv = readEnv;
/**
 * * Set environment variables
 */
const setEnv = (defaulName) => {
    const envFile = readEnv();
    // set app default env variables
    const app1 = process.env.HEROKU_TOOL_APP_1 || envFile.HEROKU_TOOL_APP_1;
    const app2 = process.env.HEROKU_TOOL_APP_2 || envFile.HEROKU_TOOL_APP_2;
    const app3 = process.env.HEROKU_TOOL_APP_3 || envFile.HEROKU_TOOL_APP_3;
    if (app1 || defaulName) {
        persistEnv({ HEROKU_TOOL_APP_1: app1 });
    }
    if (app2) {
        persistEnv({ HEROKU_TOOL_APP_2: app2 });
    }
    if (app3) {
        persistEnv({ HEROKU_TOOL_APP_3: app3 });
    }
    // console.log("envFile", envFile)
};
exports.setEnv = setEnv;
/**
 * * Get Default App Name (HEROKU_TOOL_APP_1)
 * @returns {string}
 */
const getDefaultAppName = () => {
    const envFile = readEnv();
    return envFile.HEROKU_TOOL_APP_1 || process.env.HEROKU_TOOL_APP_1;
};
exports.getDefaultAppName = getDefaultAppName;
//TODO: - refactor
setEnv();
//# sourceMappingURL=persist.js.map