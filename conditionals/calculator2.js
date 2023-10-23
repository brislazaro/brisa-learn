let number1 = Number(prompt('Inserte numero')); // 8
let sign = prompt('Inserte signo (+,-,*,/)'); // /
let number2 = Number(prompt('Inserte numero')); // 2

let result = 0;

if (sign === '+') {
  result = number1 + number2;
} else if (sign === '-') {
  result = number1 - number2;
} else if (sign === '*') {
  result = number1 * number2;
} else if (sign === '/') {
  result = number1 / number2;
}

let moduleResult = result % 1;
if (moduleResult !== 0) {
  result = result.toFixed(3);
}

alert(result);
