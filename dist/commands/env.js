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
const child_process_2 = require("child_process");
const db_1 = __importDefault(require("../utils/db"));
const process_index_1 = __importDefault(require("../utils/process.index"));
const verify_app_1 = __importDefault(require("../utils/verify.app"));
/**
 * This will allow you to set environment variables for a Heroku app
 */
class Env {
    constructor(options, args) {
        // GET env vars from Heroku
        this.get = (app) => __awaiter(this, void 0, void 0, function* () {
            (0, verify_app_1.default)(app);
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
        // SET env var on Heroku
        this.set = (key, value, app) => __awaiter(this, void 0, void 0, function* () {
            (0, verify_app_1.default)(app);
            try {
                (0, child_process_2.execSync)(`heroku config:set ${key}=${value} --app ${app}`);
                console.log(`Successfully set ${key}=${value}`);
            }
            catch (error) {
                console.error(error);
            }
        });
        // REMOVE env var from Heroku
        this.remove = (key, app) => __awaiter(this, void 0, void 0, function* () {
            (0, verify_app_1.default)(app);
            try {
                (0, child_process_2.execSync)(`heroku config:unset ${key} --app ${app}`);
                console.log(`Successfully removed ${key}`);
            }
            catch (error) {
                console.error(error);
            }
        });
        new db_1.default(options);
        if (options.index) {
            (0, process_index_1.default)(options.index);
        }
        console.log(options, args);
        if (options.get) {
            // GET
            this.get(options.app);
        }
        if (options.set) {
            // SET
            this.set(args[0], args[1], options.app);
        }
        if (options.remove) {
            // REMOVE
            this.remove(args[0], options.app);
        }
    }
}
exports.default = Env;
//# sourceMappingURL=env.js.map