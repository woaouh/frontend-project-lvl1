export function getRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

export function getRandomOperator() {
  const operators = [
    { sign: '+', method: (a, b) => a + b },
    { sign: '-', method: (a, b) => a - b },
    { sign: '*', method: (a, b) => a * b },
    { sign: '/', method: (a, b) => a / b },
  ];

  return operators[Math.floor(Math.random() * operators.length)];
}
