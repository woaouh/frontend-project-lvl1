import readlineSync from 'readline-sync';
import { getRandomNum } from '../helpers.js';

export default function evenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result;
  const randomNum = getRandomNum();
  console.log(`Question: ${randomNum}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === 'yes') {
    result = randomNum % 2 === 0;
    console.log(result ? 'Correct!' : '"yes" is wrong answer ;(. Correct answer was "no".');
  } else if (userAnswer === 'no') {
    result = randomNum % 2 !== 0;
    console.log(result ? 'Correct!' : '"no" is wrong answer ;(. Correct answer was "yes".');
  } else {
    console.log('The answer must be "yes" or "no"!');
    result = false;
  }
  if (!result) {
    return false;
  }
  return true;
}
