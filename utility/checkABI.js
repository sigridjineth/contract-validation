const hasFunction = require("../utility/hasFunction");

module.exports = async function checkABI(provider, address, abi) {
    let isCompatible = true;

    for (const functionDefinition of abi) {
        if (functionDefinition.type === "function") {
            const functionSignature = `${functionDefinition.name}(${functionDefinition.inputs.map(input => input.type).join(",")})`;
            const exists = await hasFunction(provider, address, abi, functionSignature);
            if (exists === false) {
                isCompatible = false;
                break;
            }
        }
    }

    return isCompatible;
}
