import readlineSync from 'readline-sync';
import getRandomNum from '../src/helpers.js';

export default function runCalculatorGame(userName) {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();

  console.log(`Question: ${firstNumber} + ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = firstNumber + secondNumber;

  if (Number(userAnswer) === rightAnswer) {
    console.log('Correct!');
  } else if (userAnswer !== rightAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
}
