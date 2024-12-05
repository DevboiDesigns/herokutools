"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * * Process the index
 * @param index
 * @returns
 */
const processIndex = (index) => {
    const app1 = process.env.HEROKU_TOOL_APP_1;
    const app2 = process.env.HEROKU_TOOL_APP_2;
    const app3 = process.env.HEROKU_TOOL_APP_3;
    switch (index) {
        case "1":
            return app1;
        case "2":
            return app2;
        case "3":
            return app3;
        default:
            console.log("Invalid index");
    }
};
exports.default = processIndex;
//# sourceMappingURL=process.index.js.map