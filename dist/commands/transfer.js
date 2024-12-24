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
exports.TransferApp = void 0;
const child_process_1 = require("child_process");
const process_index_1 = __importDefault(require("../utils/process.index"));
const inquirer_1 = __importDefault(require("inquirer"));
class TransferApp {
    constructor(options) {
        /**
         * * Transfer an app to another account
         * @param app
         * @param email
         * @returns
         */
        this.transferApp = (app, email) => {
            if (!email) {
                console.log("Please provide an email address");
                return;
            }
            if (!app) {
                app = process.env.HEROKU_TOOL_APP_1 || "no app name found";
                if (app === "no app name found") {
                    inquirer_1.default
                        .prompt([
                        {
                            type: "input",
                            name: "app",
                            message: `What app do you want to transfer?`,
                            validate: function (value) {
                                if (value.length) {
                                    return true;
                                }
                                else {
                                    return "Please enter the app name";
                                }
                            },
                        },
                    ])
                        .then((result) => {
                        app = result.app;
                        inquirer_1.default
                            .prompt([
                            {
                                type: "confirm",
                                name: "answer",
                                message: `Are you sure you want to transfer the ${app} app to ${email}?`,
                                choices: ["y", "n"],
                            },
                        ])
                            .then((result) => __awaiter(this, void 0, void 0, function* () {
                            const { answer } = result;
                            console.log(answer);
                            if (answer === false) {
                                console.log("Exiting...");
                                return;
                            }
                            const command = `heroku apps:transfer -a ${app} ${email}`;
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
                        }));
                    });
                }
            }
        };
        if (options.index) {
            // If the index option is passed, process the index
            options.app = (0, process_index_1.default)(options.index);
        }
        this.transferApp(options.app, options.email);
    }
}
exports.TransferApp = TransferApp;
//# sourceMappingURL=transfer.js.map