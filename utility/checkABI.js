import { hasFunction } from "./hasFunction.js";

export async function checkABI(provider, address, abi) {
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

// EXAMPLE
// const abiIsCompatible = await checkABI(JsonRpcProvider, ADDRESS, ABI);
// if (abiIsCompatible) {
//     console.log("The ABI is likely to be compatible with the contract");
// } else {
//     console.log("The ABI is definitely not compatible with the contract");
// }
