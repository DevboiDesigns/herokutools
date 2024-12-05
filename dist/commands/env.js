"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../utils/db"));
const process_index_1 = __importDefault(require("../utils/process.index"));
/**
 * This will allow you to set environment variables for a Heroku app
 */
class Env {
    constructor(options, args) {
        new db_1.default(options);
        if (options.index) {
            (0, process_index_1.default)(options.index);
        }
        // console.log(options, args)
    }
}
exports.default = Env;
//# sourceMappingURL=env.js.map