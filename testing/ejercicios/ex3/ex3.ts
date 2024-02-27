/*
    Ex3:
    Crea una funcion que reciba 2 numeros y devuelva el mayor de ellos y testeala.

    | a    | b    | resultado |
    |------|------|-----------|
    | 1    | 2    | 2         |
    | -2   | 19   | 19        |
    | -5   | -3   | -3        |
    | 400  | 198  | 400       |
    | 0    | 0    | 0         |
*/

export function getBiggerNum(a: number, b: number): number {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
