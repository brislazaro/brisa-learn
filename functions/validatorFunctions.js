/*
    Podemos usar funciones para las validaciones.

    La funcion recibira el valor a validar y retornara true si es valido o false en caso contrario

    function isNumberValid(number) {
        // NO es valido --> return false

        // si es valido --> return true
    }
*/

function isValueNotNull(value) {
  if (value === null) {
    return false;
  } else {
    return true;
  }
}

/*
    En las funciones, cuando hacemos return, el código va a dejar de ejecutar esa función.
*/

function printRecipe() {
  console.log('Step 1');
  console.log('Step 2');
  console.log('Step 3');

  return 'A partir de aqui ya no se ejecutara el codigo de abajo';

  console.log('Step 4');
  console.log('Step 5');
  console.log('Step 6');
  console.log('Step 7');
}

/*
  Este comportamiento, nos permite controlar cuando queremos que deje de ejecutarse una funcion

  Nos aporta ventajas que nos permite hacer nuestro codigo mas simple.

  Por ejemplo en la funcion isValueNotNull, teniamos un bloque if-else

  Pero gracias al return, podemos eliminar el else y quedarnos solo con el if.
*/

function isValueNotNullWithoutElse(value) {
  if (value === null) {
    // Si entra en este if, va a retornar false y salir de la función, ya que el valor es invalido
    return false;
  }

  // Si llega aqui, significa que el valor no es null, y que por tanto es valido.
  // Por lo que va a retornar true
  return true;
}

/*
  Es importante ver la diferencia respecto al codigo que hemos hecho hasta ahora.
  Donde hemos visto, que si no ponemos el else, va a entrar en el if, y seguidamente ejecutar el codigo
  de las lineas siguientes.

  Pero en este caso, el return false, va a forzar a que el código salga de esa función y no continue con las lineas de abajo.
*/
