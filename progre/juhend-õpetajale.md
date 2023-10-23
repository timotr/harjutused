# Programmeerimise aluste juhend õpetajale

Selles juhendis on kohtumised 4 akadeemilist tundi pikad.

## Teemade ülevaade:
1. **[Esimene kohtumine](#esimene-kohtumine)** while ja for, operaatorid (max 5), if on nagu while aga ei loopi
2. **[Teine kohtumine](#teine-kohtumine)** String, boolean, number, [guessTheNumber](https://github.com/timotr/harjutused/blob/main/progre/guessTheNumber.md)
3. Arrays
4. Objects
5. [Kahoot Basics II](https://create.kahoot.it/details/91b07b47-f141-4ace-a6ae-ccb4959c0765)
6. [Kahoot Arrays](https://create.kahoot.it/details/261ab306-984d-4777-8c3f-1053a9ec1b7d)
7. Analüüsime koos [algoritme](#erinevad-algoritmid-mida-koos-analüüsida) (max 2, muidu väsivad ära)
8. [Kahoot Objects](https://create.kahoot.it/details/5fbe65d9-6f97-46f9-a2d7-4b4b79177af1)
9. Analüüsime koos [algoritme](#erinevad-algoritmid-mida-koos-analüüsida) (max 2, muidu väsivad ära)
10. 
11. Error handling, kuidas lugeda stack trace'i, try/catch, avoid nesting ifs
12. 
13. 
14. 
15. Promise?
16. 

## Esimene kohtumine

## Teine kohtumine

## Kahooti lingid

[Basic II](https://create.kahoot.it/details/91b07b47-f141-4ace-a6ae-ccb4959c0765)
[Arrays](https://create.kahoot.it/details/261ab306-984d-4777-8c3f-1053a9ec1b7d)
[Objects](https://create.kahoot.it/details/5fbe65d9-6f97-46f9-a2d7-4b4b79177af1)

## Erinevad algoritmid mida koos analüüsida

Võta korraga ainult 1-2 tükki. Kogemus näitab, et pärast teist nad väsivad ära.

### Reversed string loop
```js
let inputString = "hello";
let reversedString = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  reversedString += inputString[i];
}

console.log(reversedString); // Output: "olleh"
```

### Reversed string split reverse join
```js
let inputString = "hello";
let reversedString = inputString.split('').reverse().join('');

console.log(reversedString); // Output: "olleh"
```

### Prime numbers
```js
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
```

### Word count split
```js
let inputString = "This is a sample sentence to count words.";
let wordCount = inputString.split(" ").length;

console.log("Word count: " + wordCount); // Output: Word count: 8
```

### Word count loop
```js
let inputString = "This is a sample sentence to count words.";
let wordCount = 1; // Initialize with 1 to account for the first word

// Iterate through each character in the input string
for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === ' ') {
    // If a space is encountered, increment the word count
    wordCount++;
  }
}

console.log("Word count: " + wordCount); // Output: Word count: 8
```

### Factorial recursive
```js
function factorialUsingFunction(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorialUsingFunction(n - 1);
  }
}

const result1 = factorialUsingFunction(5);
console.log(result1); // Output: 120
```

### Factorial loop
```js
function factorialUsingWhileLoop(n) {
  let result = 1;
  let i = 2;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

const result3 = factorialUsingWhileLoop(5);
console.log(result3); // Output: 120
```

### Array map function
```js
Array.prototype.customMap = function(callback) {
  const mappedArray = [];

  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this));
  }

  return mappedArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.customMap(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

### Array filter function
```js
Array.prototype.customFilter = function(callback) {
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }

  return filteredArray;
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```
