let seedrandom;
try {
  seedrandom = require('seedrandom');
} catch (error) {
  console.warn("seedrandom is not installed. Falling back to Math.random().");
}

// Sample array of player names (replace with your own list)
const playerNames = ['John', 'Alice', 'Bob', 'Eve', 'Charlie', 'Grace', 'David', 'Emma', 'Frank', 'Hannah'];

function generatePlayerScores(numEntries, format = 'array', seed = null) {
  const rng = seedrandom ? seedrandom(seed) : Math.random;

  const playerScores = [];
  
  for (let i = 0; i < numEntries; i++) {
    const randomName = playerNames[Math.floor(rng() * playerNames.length)];
    const randomScore = Math.floor(rng() * 900) + 100; // Generates a random integer between 100 and 999

    if (format === 'array') {
      playerScores.push([randomName, randomScore]);
    } else if (format === 'object') {
      playerScores.push({ firstName: randomName, score: randomScore });
    }
  }

  const formattedData = JSON.stringify(playerScores);
  const outputString = `let scores = ${formattedData};`;

  return outputString;
}

// Example usage with a seed (if seedrandom is installed, it will use it, otherwise it will use Math.random())
const numberOfEntries = 200;
const seedValue = 'yourSeedHere'; // Replace with your desired seed value
const outputData = generatePlayerScores(numberOfEntries, 'array', seedValue);

// Printing the generated output string
console.log(outputData);
