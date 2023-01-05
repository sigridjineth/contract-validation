# contract-validation
Simple validator to your contract using ethers.js ([original](https://gist.github.com/sigridjineth/ff7806c783fa534473ada622de0faa3f))

## Example
```
const contractValidator = require('contract-validator');

const provider = new providers.JsonRpcProvider('https://eth.bd.evmos.org:8545');

const functionExists = await contractValidator.hasFunction(provider, ADDRESS, ABI, "functionA()");

if (functionExists) {
  console.log("functionA() is likely to be present in the contract");
} else {
  console.log("functionA() is definitely not present in the contract");
}

contractValidator.contractExists('contract_addr').then(exists => {
  console.log(exists ? 'Contract exists' : 'Contract does not exist');
});

const abiIsCompatible = await contractValidator.checkABI(provider, ADDRESS, ABI);
if (abiIsCompatible) {
  console.log("The ABI is likely to be compatible with the contract");
} else {
  console.log("The ABI is definitely not compatible with the contract");
}
```
