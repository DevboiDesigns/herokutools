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
Object.defineProperty(exports, "__esModule", { value: true });
class Dyno {
    constructor() { }
    static restart(app) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Restarting ${app} dynos`);
            const command = `heroku restart --app ${app}`;
            console.log(`Running command: ${command}`);
            // execSync(command, { stdio: "inherit" })
        });
    }
    static scale(app, dyno, size) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Scaling ${app} dynos to ${size}`);
            const command = `heroku ps:scale ${dyno}=${size} --app ${app}`;
            console.log(`Running command: ${command}`);
            // execSync(command, { stdio: "inherit" })
        });
    }
}
exports.default = Dyno;
//# sourceMappingURL=dynos.js.map