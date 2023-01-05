const ethers = require("ethers");

module.exports = async function hasFunction(provider, address, abi, functionSignature) {
    const bytecode = await provider.getCode(address);

    // No code : function is definitely not there
    if (bytecode.length <= 2) {
        return false;
    }

    // If the bytecode doesn't include the function selector, the function is definitely not present
    if (!bytecode.includes(ethers.utils.id(functionSignature).slice(2, 10))) {
        return false;
    }

    // Check if a fallback function is defined : if it is, return true
    try {
        await provider.estimateGas({ to: address });
        return true;
    } catch {}

    // If gas estimation doesn't revert then an execution is possible
    // given the provided function selector
    try {
        const contract = new ethers.Contract(address, abi, provider);
        await contract.estimateGas[functionSignature]();
        return true;
    } catch {
        // Otherwise (revert) we assume that there is no entry in the jump table
        // meaning that the contract doesn't include the function
        return false;
    }
}
