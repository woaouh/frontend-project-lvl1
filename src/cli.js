import readlineSync from 'readline-sync';

export default function askUserNameAndSayHello() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
