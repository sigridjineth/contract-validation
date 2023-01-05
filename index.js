// Import the contractExists function from contractExists.js
const contractExists = require('./utility/contractExists');

// Import the hasFunction function from hasFunction.js
const hasFunction = require('./utility/hasFunction');

// Import the checkABI function from checkABI.js
const checkABI = require('./utility/checkABI');

// Export the contractExists, hasFunction, and checkABI functions
module.exports = {
    contractExists,
    hasFunction,
    checkABI,
};
