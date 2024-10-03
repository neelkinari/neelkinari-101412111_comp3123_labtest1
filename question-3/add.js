const fs = require('fs');
const path = require('path');

// Path to the 'logs' directory
const logsDirectory = path.join(__dirname, 'logs');

// Function to create the log files
function generateLogFiles() {
    // Create the logs directory if it doesn't already exist
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
        console.log('Created "logs" directory.');
    } else {
        console.log('"logs" directory already exists.');
    }

    // Navigate to the newly created logs directory
    process.chdir(logsDirectory);

    // Loop to generate 10 log files with content
    for (let i = 1; i <= 10; i++) {
        const logFileName = `log_${i}.txt`;
        fs.writeFileSync(logFileName, `Content of log file ${i}.`);
        console.log(`Generated file: ${logFileName}`);
    }
}

// Execute the log file creation process
generateLogFiles();