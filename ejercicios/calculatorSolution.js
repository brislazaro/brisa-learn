function askNumber() {
  let number;

  do {
    number = Number(prompt('inserte un numero'));
  } while (isNaN(number) === true);

  return number;
}

function askForOperator() {
  let operator;

  do {
    operator = prompt('inserte un operador(+,-,*,/');
  } while (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
  );

  return operator;
}

function suma(number1, number2) {
  const patata = number1 + number2;
  return patata;
}

function resta(number1, number2) {
  const result = number1 - number2;
  return result;
}

function multiplicacion(number1, number2) {
  const result = number1 * number2;
  return result;
}

function division(number1, number2) {
  const result = number1 / number2;
  return result;
}

let userNumber1 = askNumber();

let operator = askForOperator();

let userNumber2 = askNumber();

let result = 0;

if (operator === '+') {
  result = suma(userNumber1, userNumber2);
} else if (operator === '-') {
  result = resta(userNumber1, userNumber2);
} else if (operator === '*') {
  result = multiplicacion(userNumber1, userNumber2);
} else if (operator === '/') {
  result = division(userNumber1, userNumber2);
}

let isResultInteger = Number.isInteger(result);

if (isResultInteger === true) {
  alert(`${userNumber1} ${operator} ${userNumber2} = ${result}`);
} else {
  let decimals = result.toFixed(2);

  alert(`${userNumber1} ${operator} ${userNumber2} = ${decimals}`);
}
