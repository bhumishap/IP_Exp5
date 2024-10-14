class Calculator {
    static calculate(num1, num2, operation) {
      return new Promise((resolve, reject) => {
        if (operation === '+') {
          resolve(num1 + num2);
        } else if (operation === '-') {
          resolve(num1 - num2);
        } else if (operation === '*') {
          resolve(num1 * num2);
        } else if (operation === '/') {
          if (num2 === 0) {
            reject('Error: Division by zero is not allowed.');
          } else {
            resolve(num1 / num2);
          }
        } else {
          reject('Error: Invalid operation.');
        }
      });
    }
  }
  
  class SquareIterator {
    constructor(numbers) {
      this.numbers = numbers;
      this.index = 0;
    }
  
    next() {
      if (this.index < this.numbers.length) {
        const square = this.numbers[this.index] ** 2;
        this.index++;
        return { value: square, done: false };
      } else {
        return { done: true };
      }
    }
  }
  
  function* generatePrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }
  
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
  
  // Event listeners
  document.getElementById('calculate').addEventListener('click', async () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    try {
      const result = await Calculator.calculate(num1, num2, operation);
      document.getElementById('calcResult').innerText = 'Result: ' + result;
    } catch (error) {
      document.getElementById('calcResult').innerText = error;
    }
  });
  
  document.getElementById('squareBtn').addEventListener('click', () => {
    const numbers = document.getElementById('numbers').value.split(',').map(num => parseFloat(num.trim()));
    const iterator = new SquareIterator(numbers);
    
    const squaresList = document.getElementById('squaresList');
    squaresList.innerHTML = ''; // Clear previous results
  
    let result = iterator.next();
    while (!result.done) {
      const listItem = document.createElement('li');
      listItem.innerText = result.value;
      squaresList.appendChild(listItem);
      result = iterator.next();
    }
  });
  
  document.getElementById('generatePrimes').addEventListener('click', () => {
    const limit = parseInt(document.getElementById('limit').value);
    const primeGenerator = generatePrimes(limit);
    
    const primesList = document.getElementById('primesList');
    primesList.innerHTML = ''; // Clear previous results
  
    for (const prime of primeGenerator) {
      const listItem = document.createElement('li');
      listItem.innerText = prime;
      primesList.appendChild(listItem);
    }
  });
  