import readlineSync from 'readline-sync';

function getRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function runBrainEvenGame(userName) {
  const rounds = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
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
    if (!result) break;
    if (rounds === 3) console.log(`Congratulations, ${userName}!`);
  }
}
