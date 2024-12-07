"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const db_1 = __importDefault(require("../utils/db"));
const process_index_1 = __importDefault(require("../utils/process.index"));
const verify_app_1 = __importDefault(require("../utils/verify.app"));
const read_env_var_1 = __importDefault(require("../utils/read.env.var"));
/**
 * This will allow you to set environment variables for a Heroku app
 */
class Env {
    constructor(options, args) {
        /**
         * * GET env vars from Heroku
         * @param app
         * @returns
         */
        this.get = (app) => __awaiter(this, void 0, void 0, function* () {
            app = (0, verify_app_1.default)(app);
            if (!app) {
                return;
            }
            try {
                const command = `heroku config --app ${app}`;
                const child = (0, child_process_1.spawnSync)(command, {
                    shell: true,
                    stdio: "inherit",
                });
                if (child.error) {
                    console.log(child.error);
                }
                else {
                    console.log(child.stdout); // eslint-disable-line
                }
            }
            catch (error) {
                console.error(error);
            }
        });
        /**
         * * SET env var on Heroku
         * @param key
         * @param value
         * @param app
         * @returns
         */
        this.setSingle = (key, value, app) => __awaiter(this, void 0, void 0, function* () {
            app = (0, verify_app_1.default)(app);
            if (!app) {
                return;
            }
            if (!key || !value) {
                console.error("Please provide a key and value");
                return;
            }
            try {
                const command = `heroku config:set ${key}=${value} --app ${app}`;
                const child = (0, child_process_1.spawnSync)(command, {
                    shell: true,
                    stdio: "inherit",
                });
                if (child.error) {
                    console.log(child.error);
                }
                else {
                    console.log(child.stdout); // eslint-disable-line
                }
                console.log(`Successfully set ${key}=${value}`);
            }
            catch (error) {
                console.error(error);
            }
        });
        /**
         * * SET multiple env vars on Heroku
         * @param envVars
         * @param app
         * @returns
         */
        this.setMulti = (envVars, app) => __awaiter(this, void 0, void 0, function* () {
            app = (0, verify_app_1.default)(app);
            if (!app) {
                return;
            }
            try {
                // set all the env vars
                Object.entries(envVars).forEach(([key, value]) => {
                    this.setSingle(key, value, app);
                });
                console.log(`Successfully set all environment variables`);
            }
            catch (error) {
                console.error(error);
            }
        });
        /**
         * * UNSET env var on Heroku
         * @param key
         * @param value
         * @param app
         * @returns
         */
        this.unsetSingle = (key, value, app) => __awaiter(this, void 0, void 0, function* () {
            app = (0, verify_app_1.default)(app);
            if (!app) {
                return;
            }
            if (!key || !value) {
                console.error("Please provide a key and value");
                return;
            }
            try {
                const command = `heroku config:unset ${key}=${value} --app ${app}`;
                // execSync(`heroku config:set ${key}=${value} --app ${app}`)
                const child = (0, child_process_1.spawnSync)(command, {
                    shell: true,
                    stdio: "inherit",
                });
                if (child.error) {
                    console.log(child.error);
                }
                else {
                    console.log(child.stdout); // eslint-disable-line
                }
                console.log(`Successfully unset ${key}=${value}`);
            }
            catch (error) {
                console.error(error);
            }
        });
        /**
         * * REMOVE multiple env vars on Heroku
         * @param envVars
         * @param app
         * @returns
         */
        this.removeMulti = (envVars, app) => __awaiter(this, void 0, void 0, function* () {
            app = (0, verify_app_1.default)(app);
            if (!app) {
                return;
            }
            try {
                // set all the env vars
                Object.entries(envVars).forEach(([key, value]) => {
                    this.unsetSingle(key, value, app);
                });
                console.log(`Successfully unset environment variables`);
            }
            catch (error) {
                console.error(error);
            }
        });
        new db_1.default(options);
        if (options.index) {
            (0, process_index_1.default)(options.index);
        }
        if (options.get) {
            // GET
            this.get(options.app);
            return;
        }
        if (options.remove) {
            // REMOVE
            this.removeMulti((0, read_env_var_1.default)(args), options.app);
            return;
        }
        // SET Multi - Default
        this.setMulti((0, read_env_var_1.default)(args), options.app);
    }
}
exports.default = Env;
//# sourceMappingURL=env.js.map