let userInput = prompt('Introduce el numero');

if (userInput === null) {
  console.log('El valor no es valido');
} else {
  console.log('si es valido');
  let number = Number(userInput);

  debugger;
  if (isNaN(number)) {
    console.log('Esto no es un numero');
  } else {
    console.log('Numero 1 es correcto, sigo pidiendo el signo...');

    const operation = number * 9999;

    alert(operation);
  }
}

////////////////////////

let sign = prompt('Inserte un signo (+, -, *, /)');

if (sign !== '+' && sign !== '-' && sign !== '*' && sign !== '/') {
  console.log('Esto no es un signo');
} else {
  console.log('Todo OK, sigo pidiendo cosas....');
}
