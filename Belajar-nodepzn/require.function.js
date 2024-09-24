// Import the 'os' module using require (CommonJS module syntax)
const os = require('os');

// Log the platform information
console.info(os.platform());

// Log the CPU details in table format
console.table(os.cpus());
