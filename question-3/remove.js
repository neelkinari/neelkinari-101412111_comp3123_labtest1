const fs = require('fs');
const path = require('path');

// Define the path to the 'logs' directory
const logsPath = path.join(__dirname, 'logs');

// Function to delete log files and the logs directory
function deleteLogFiles() {
    // Check if the logs directory exists
    if (fs.existsSync(logsPath)) {
        // Read the contents of the logs directory
        fs.readdir(logsPath, (error, files) => {
            if (error) {
                console.error('Error reading the logs directory:', error);
                return;
            }

            // List the files to be deleted
            console.log('Deleting the following files:');
            files.forEach(file => {
                console.log(file);
                const filePath = path.join(logsPath, file);

                // Delete each file in the logs directory
                fs.unlink(filePath, (unlinkError) => {
                    if (unlinkError) {
                        console.error('Error removing file:', unlinkError);
                    }
                });
            });

            // Once files are deleted, remove the logs directory
            fs.rmdir(logsPath, (rmdirError) => {
                if (rmdirError) {
                    console.error('Error deleting the logs directory:', rmdirError);
                } else {
                    console.log('Successfully removed the logs directory.');
                }
            });
        });
    } else {
        console.log('The logs directory does not exist.');
    }
}

// Execute the log file removal process
deleteLogFiles();