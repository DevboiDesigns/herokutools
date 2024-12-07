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
    // console.log(str)
    const env = str.split(",").reduce((acc, curr) => {
        const [key, value] = curr.split("=");
        acc[key.trim()] = value.trim().replace(/['"]/g, "");
        return acc;
    }, {});
    // convert it into an array
    const envArray = Object.entries(env);
    //TODO: remvoe console.log
    console.log(env);
    // console.log(envArray)
    return env;
};
exports.default = readEnvVariablePrams;
// TEST
// readEnvVariablePrams(["TEST=me", "THIS=that"])
//# sourceMappingURL=read.env.var.js.map