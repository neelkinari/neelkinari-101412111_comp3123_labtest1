// Function to simulate a delayed success response
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const successMessage = { message: 'Operation successful after delay' };
            resolve(successMessage); // Resolve the promise with a success message
        }, 500); // Simulate a 500ms delay
    });
};

// Function to simulate a delayed error response
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Error: Operation failed after delay')); // Reject with an error message
        }, 500); // Simulate a 500ms delay
    });
};

// Handling the resolvedPromise and logging the result
resolvedPromise()
    .then(result => {
        console.log(result); // Expected output: { message: 'Operation successful after delay' }
    })
    .catch(err => {
        console.error(err);
    });

// Handling the rejectedPromise and logging the result
rejectedPromise()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error({ error: err.message }); // Expected output: { error: 'Error: Operation failed after delay' }
    });