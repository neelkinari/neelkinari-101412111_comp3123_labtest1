function lowerCaseWords(inputArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputArray)) {
            reject(new Error("Provided input is not an array"));
        } else {
            const wordsOnly = inputArray.filter(element => typeof element === 'string');
            const lowerCaseWords = wordsOnly.map(word => word.toLowerCase());
            resolve(lowerCaseWords);
        }
    });
}

// Test the function
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Expected output: ['pizza', 'wings']
    .catch(error => console.error(error.message));