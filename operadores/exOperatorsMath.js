/*
    1- Con este codigo, que crees que pasara?--- no funcionara Porque?-- ya que esta hecho con la variable const y no se le puede hacer suma ya que es una variable que no cambia 
    const sumNumber = 5;
    sumNumber = sumNumber + 1;

    Vuelve a escribir el codigo para que funcione correctamente y muestra el resultado de forma amigable

    Output: "El resultado de la suma es: 6"
*/
let sumNumber = 5;
sumNumber = sumNumber + 1;
console.log ("El resultado de la suma es:", sumNumber);



/*
    2- Con la variable sumNumber del ex anterior, aumenta su valor en 10.
    Muestra el resultado de forma amigable.

    Porque el valor es 16 y no 15? porque en el ejercicio anterior hicimos una parte donde siempre al sumNumber se le suma 1

    Output: "El resultado de la suma es: 16"
*/
console.log ("El resultado de la suma es:", sumNumber + 10);
/*
    3- Declara una variable ex3Sum y asignale el valor 0.
    Aumenta su valor en 1 usando el operador += y muestra el resultado por consola.

    Output: "El resultado de la suma es: 1"
*/
let ex3Sum = 0;
ex3Sum+= 1;
console.log ("El resultado de la suma es:", ex3Sum);
/*
    4- Declara una variable ex4Sum y asignale el valor 0.
    RESTALE su valor en 1 usando el operador -- y muestra el resultado por consola.

    Output: "El resultado de la resta es: -1"
*/
let ex4Sum = 0;
ex4Sum--;
console.log("El resultado de la resta es:",ex4Sum);

/*
    5- Declara una variable ex5Number y asignale el valor 2.
    MULTIPLICALA por 2 usando el operador *= y muestra el resultado por consola.

    Output: "El resultado de la multiplicación es: 4"
*/
let ex5Number = 2;
ex5Number*= 2;
console.log("El resultado de la multiplicacion es:", ex5Number);
/*
    6- Declara una variable ex6Number y asignale el valor 10.
    DIVIDELA por 2 usando el operador /= y muestra el resultado por consola.

    Output: "El resultado de la división es: 5"
*/
let ex6Number = 10
ex6Number/= 2;
console.log("El resultado de la division es:", ex6Number);
/*
    7- Lee el siguiente codigo y adivina que mostrara por consola antes de ejecutarlo.
    Copialo, pegalo y ejecutalo para ver el resultado.
    Porque se da este resultado? en la primera es 6 ya que le estamos subando uno con ++ y en el segundo es 5 ya que solo se nos muestra el numero que le pusimos a la variable 

    let ex7Number = 5;
    
    let ex7Result = ++ex7Number;

    console.log("ex7Number es:", ex7Number);
    console.log("El resultado es:", ex7Result);
*/

let ex7Number = 5;
    
let ex7Result = ex7Number++;

console.log("ex7Number es:", ex7Number);
console.log("El resultado es:", ex7Result);

/*
    8- Lee el siguiente codigo e adivina que mostrara por consola antes de ejecutarlo.
    Copialo, pegalo y ejecutalo para ver el resultado.

    let ex8Number1 = 5;

    let ex8Result = ex8Number1 * 2;
    ex8Result += 1;

    ex8Result++;

    exResult = ex8Number1 / 2

    console.log("El resultado es:", exResult);
*/

let ex8Number1 = 5;

let ex8Result = ex8Number1 * 2;
ex8Result += 1;

ex8Result++;

exResult = ex8Number1 / 2

console.log("El resultado es:", exResult);