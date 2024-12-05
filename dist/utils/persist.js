"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// save env variables to a file
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * * Persist environment variables to a file
 * @param env
 */
const saveEnvVariablesToFile = (env) => {
    const envPath = path_1.default.join(process.cwd(), "./data/data.txt");
    const envFile = readEnv();
    const newEnv = Object.assign(Object.assign({}, envFile), env);
    const writeStream = fs_1.default.createWriteStream(envPath, {
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
        saveEnvVariablesToFile({ HEROKU_TOOL_APP_1: app1 });
    }
    if (app2) {
        saveEnvVariablesToFile({ HEROKU_TOOL_APP_2: app2 });
    }
    if (app3) {
        saveEnvVariablesToFile({ HEROKU_TOOL_APP_3: app3 });
    }
    // console.log("envFile", envFile)
};
/**
 * * Get Default App Name (HEROKU_TOOL_APP_1)
 * @returns {string}
 */
const getDefaultAppName = () => {
    const envFile = readEnv();
    return envFile.HEROKU_TOOL_APP_1 || process.env.HEROKU_TOOL_APP_1;
};
// handler
const handleEnv = (appName) => {
    let app1 = process.env.HEROKU_TOOL_APP_1;
    if (!app1) {
        app1 = readEnv().HEROKU_TOOL_APP_1;
    }
    if (appName) {
        app1 = appName;
    }
    let app2 = process.env.HEROKU_TOOL_APP_2;
    let app3 = process.env.HEROKU_TOOL_APP_3;
    if (app1) {
        process.env.HEROKU_TOOL_APP_1 = app1;
        saveEnvVariablesToFile({ HEROKU_TOOL_APP_1: app1 });
    }
    if (app2) {
        process.env.HEROKU_TOOL_APP_2 = app2;
        saveEnvVariablesToFile({ HEROKU_TOOL_APP_2: app2 });
    }
    if (app3) {
        process.env.HEROKU_TOOL_APP_3 = app3;
        saveEnvVariablesToFile({ HEROKU_TOOL_APP_3: app3 });
    }
};
exports.default = handleEnv;
//# sourceMappingURL=persist.js.map