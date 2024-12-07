"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * * Verify if the app name is provided
 * @param app
 * @returns  The app name
 */
const verifyApp = (app) => {
    if (!app) {
        app = process.env.HEROKU_TOOL_APP_1;
    }
    if (!app || app === "" || app === undefined || app === null) {
        console.log("No app name found");
        return null;
    }
    return app;
};
exports.default = verifyApp;
//# sourceMappingURL=verify.app.js.map