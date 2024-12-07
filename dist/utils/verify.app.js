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
    if (!app) {
        console.log("No app name found");
        process.exit(1);
    }
    return app;
};
exports.default = verifyApp;
//# sourceMappingURL=verify.app.js.map