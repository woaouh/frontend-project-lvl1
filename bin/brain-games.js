#!/usr/bin/env node
import askUserNameAndSayHello from '../src/cli.js';
import runBrainEvenGame from './brain-even.js';

console.log('Welcome to the Brain Games!');
const userName = askUserNameAndSayHello();
runBrainEvenGame(userName);
