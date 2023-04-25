import greeting from './greeting.js';
import evenIteration from './games/even.js';
import calcIteration from './games/calc.js';
import gcdIteration from './games/gcd.js';

const task = {
  even: 'Answer "yes" if the number is even, otherwise answer "no".',
  calc: 'What is the result of the expression?',
  gcd: 'Find the greatest common divisor of given numbers.',
};

const gameProcess = (mode) => {
  const userName = greeting();
  console.log(task[`${mode}`]);

  for (let i = 1; i <= 3; i += 1) {
    const answer = eval(`${mode}Iteration`)();
    if (answer === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;
