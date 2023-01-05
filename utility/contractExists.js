import { ethers } from "ethers";

export async function contractExists(contractAddress, providerURL) {
    // Connect to the Ethereum network using the provided RPC endpoint
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    // Get the contract bytecode
    const code = await provider.getCode(contractAddress);

    // If the code is not "0x", the contract exists
    const contractExists = code !== '0x';
    console.log(contractExists ? 'Contract exists' : 'Contract does not exist');
    return contractExists;
}
