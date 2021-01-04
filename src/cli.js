import readlineSync from 'readline-sync';

export function askPlayerName() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

export function greet() {
  console.log('Welcome to the Brain Games!');
}
