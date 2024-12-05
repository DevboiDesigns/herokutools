"use strict";
// save env variables to a file
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.persistEnv = exports.setEnv = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
// set app default env variables
const app1 = process.env.HEROKU_TOOL_APP_1;
const app2 = process.env.HEROKU_TOOL_APP_2;
const app3 = process.env.HEROKU_TOOL_APP_3;
const setEnv = () => {
    console.log("Setting default env variables...");
    if (app1) {
        persistEnv({ HEROKU_TOOL_APP_1: app1 });
    }
    if (app2) {
        persistEnv({ HEROKU_TOOL_APP_2: app2 });
    }
    if (app3) {
        persistEnv({ HEROKU_TOOL_APP_3: app3 });
    }
};
exports.setEnv = setEnv;
setEnv();
//# sourceMappingURL=persist.js.map