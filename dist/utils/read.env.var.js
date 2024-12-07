"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * * Read the environment variables from the options object
 *
 * @param options
 * @returns {Object} env
 *
 */
const readEnvVariablePrams = (options) => {
    const str = options.toString(); // 'VAR1="value1", VAR2="value2", VAR3="value3"'
    const env = str.split(",").reduce((acc, curr) => {
        const [key, value] = curr.split("=");
        acc[key.trim()] = value.trim().replace(/['"]/g, "");
        return acc;
    }, {});
    return env;
};
exports.default = readEnvVariablePrams;
//# sourceMappingURL=read.env.var.js.map