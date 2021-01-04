import readlineSync from 'readline-sync';
import { getRandomNum, getRandomOperator } from '../helpers.js';

export default function calcGame(userName) {
  const firstNumber = getRandomNum();
  const secondNumber = getRandomNum();
  const operator = getRandomOperator();

  console.log(`Question: ${firstNumber} ${operator.sign} ${secondNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = operator.method(firstNumber, secondNumber);

  if (Number(userAnswer) === rightAnswer) {
    console.log('Correct!');
  } else if (userAnswer !== rightAnswer) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  return true;
}
