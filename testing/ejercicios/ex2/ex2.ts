/*
    Testea la siguiente funcion.

    | n1   | n2   | resultado    |
    |------|------|--------------|
    | 6    | 3    | 2            |
    | -15  | -3   | 5            |
    | 100  | 25   | 4            |
    | 0    | 10   | 0            |
    | 5    | 0    | ?????        | --> Comprueba que da

    Una vez comprobado, vamos a cambiar la funcion para que si el segundo parametro es 0, devuelva 0.
    Actualiza el escenario correspondiente y comprueba que el test pasa.

*/

function division(n1: number, n2: number): number {
  return n1 / n2;
}
