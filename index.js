import chalk from 'chalk';
import randomColor from 'randomcolor';

const color = randomColor();
const square = [
  '###############################',
  '###############################',
  '###############################',
  '#####                     #####',
  `#####       ${color}       #####`,
  '#####                     #####',
  '###############################',
  '###############################',
  '###############################',
];

square.forEach((line) => console.log(chalk.hex(`${color}`).bold(line)));
