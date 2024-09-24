// Import the 'os' module using ES module syntax
import os from 'os';

// Log the platform information
console.info('Platform:', os.platform());

// Log the CPU details in table format
console.table(os.cpus());
