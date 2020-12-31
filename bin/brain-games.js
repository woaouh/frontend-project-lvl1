#!/usr/bin/env node
import askUserNameAndSayHello from '../src/cli.js';
import runGameCycle from '../src/index.js';
import runBrainEvenGame from './brain-even.js';
import runCalculatorGame from './brain-calc.js';

console.log('Welcome to the Brain Games!');
const userName = askUserNameAndSayHello();
runGameCycle(userName, runBrainEvenGame);
runGameCycle(userName, runCalculatorGame);
