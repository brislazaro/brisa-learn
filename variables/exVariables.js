/* 
    1- Declara una variable/constante llamada firstName y asígnale tu nombre como valor. 
    Muestra el valor de la variable por consola con un formato amigable para el usuario.

    Output esperado: "Mi nombre es: Brisa"
*/

let firstName = 'Brisa';
console.log('Mi nombre es:', firstName);


/*
    2- Declara una variable/constante llamada lastName y asígnale tu apellido como valor.
    Muestra el valor de la variable por consola con un formato amigable para el usuario.

    Output esperado: "Mi apellido es: Lazaro"
*/
let lastName = 'Lazaro';
console.log('Mi apellido es:', lastName);
/*
    3- Declara una variable/constante fullName donde utilices las 2 anteriores (firstName y lastName) para asignarle el nombre completo.
    Muestra el valor de la variable por consola con un formato amigable para el usuario.
    Habria alguna diferencia si en lugar de usar let usamos const? Porque? ---- si, ya que con let si podemos modificar el nombre y con const solo tendriamos el mismo valor
    Output esperado: "Mi nombre completo es: Brisa Lazaro" (no te olvides del espacio entre el nombre y el apellido)
*/

let fullName = firstName + ' ' + lastName;
console.log('Mi nombre completo es:', fullName);
/*
    4- Declara una variable llamada ex4Variable sin asignarle ningún valor.
    Muestra el valor de la variable por consola. Que valor tiene? Por qué?
    Reasigna el valor de la variable y asignale el valor 10 y vuelve a mostrarla por consola.
    Reasigna el valor de la variable y asignale el valor "Hola" y vuelve a mostrarla por consola.
    Intenta hacerlo de nuevo, pero ahora declarando la variable con const en lugar de let. Qué pasa? --- marca error ya que si usamos conts es una variable constante y no nos deja cambiar el valor
*/
let ex4Variable ;
console.log(ex4Variable);
ex4Variable = 10 ;
console.log(ex4Variable);
ex4Variable = "Hola";
console.log(ex4Variable);

/*
    5- Declara una variable llamada number1 y asígnale el valor 10.
    Declara una variable llamada number2 y asígnale el valor 20
*/
let number1 = 10;
let number2 = 20;
console.log(number1, "" , number2);
/*
    6- Declara una variable llamada additionResult y asígnale el valor de la suma de las 2 variables anteriores (number1 y number2).
    Muestra el valor de la variable por consola en un formato amigable.

    Output esperado: "El resultado de la suma es: 30"
*/
let additionResult = number1 + number2;
console.log("El resultado de la suma es:", additionResult);
/*
    8- Ahora muestra el resultado de la resta, multiplicación y división de las 2 variables anteriores (number1 y number2).
    Muestra el valor de la variable por consola en un formato amigable.

    NOTA: Los operadores son:
    - Suma: +
    - Resta: -
    - Multiplicación: *
    - División: /

    Output esperado: "El resultado de la resta es: -10"
                     "El resultado de la multiplicación es: 200"
                     "El resultado de la división es: 0.5"
*/
let resta = number1 - number2;
console.log("El resultado de la resta es:", resta);
let multiplicacion = number1 * number2;
console.log('El resultado de la multiplicacion es:', multiplicacion);
let division = number1 / number2;
console.log('El resultado de la division es:', division);
/*
    9- Ejecuta este código y fijate que pasa:
    const ex9Number1 = 5;
    const ex9Number2 = "10";

    const ex9Result = ex9Number1 + ex9Number2;

    console.log("El resultado de la suma es:", ex9Result);

    Por qué pasa esto? --- porque una de las variables esta puesta como texto
     Como lo solucionarías?---- poner las dos variables como numeros para que se puedan sumar de manera correcta
*/
const ex9Number1 = 5;
const ex9Number2 = 10;
const ex9Result = ex9Number1 + ex9Number2;
console.log("El resultado de la suma es:", ex9Result);
/*
    10- Declara una variable llamada gerardName y asígnale el valor "Gerard".
    Declara una variable llamada gerardSurname y asígnale el valor "Ramon".
    Intenta no mirar los ejercicios anteriores y haz lo siguiente:
    Declara una variable llamada gerardFullName donde utilices las 2 anteriores para asignarle el nombre completo.
    Declara una variable llamada ex10Output y asignale el valor "Hola, mi nombre es " + gerardFullName.
    Muestra el valor de la variable ex10Output por consola.
    Te has dado cuenta que antes, generabas el valor amigable dentro del console log? 
    Ahora lo has hecho antes y lo has guardado en una variable, pero el resultado es el mismo.

    Output esperado: "Hola, mi nombre es Gerard Ramon"
*/
let gerardName = "Gerard";
let gerardSurname = 'Ramon';
let gerardFullName = gerardName + " " + gerardSurname;
let ex10Output = "Hola, mi nombre es" +' '+ gerardFullName;
console.log(ex10Output);

/*
    11- Declara una variable llamada myAge y asígnale tu edad como valor.
    Usando las variables anteriores (myAge y fullName del ex3) muestra por consola un mensaje que diga:
    "Hola, mi nombre es Brisa Lázaro y tengo 25 años"

    Pista: Puedes usar el operador + para concatenar strings y variables.

*/
let myAge = 25
let presentacionEdad = "Hola, mi nombre es " + fullName + " y tengo " + myAge + " anos";

let anotherResult = `Hola, mi nombre es ${fullName} y tengo ${myAge} anos`
console.log(anotherResult);
