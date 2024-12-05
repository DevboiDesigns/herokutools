"use strict";
const readEnvVariablePrams = (options) => {
    const str = options.env; // 'VAR1="value1", VAR2="value2", VAR3="value3"'
    const env = str.split(",").reduce((acc, curr) => {
        const [key, value] = curr.split("=");
        acc[key.trim()] = value.trim().replace(/['"]/g, "");
        return acc;
    }, {});
    console.log(env);
};
//# sourceMappingURL=read.env.var.js.map