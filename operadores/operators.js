// -----  Operadores matematicos  -------

// Suma
let sumNumber = 5;
sumNumber = sumNumber + 10; // 15
sumNumber += 10; // 25
sumNumber++;
++sumNumber;

console.log("El resultado de la suma es:", sumNumber);

// Resta
let restNumber = 2;
restNumber = restNumber - 1;
restNumber -= 1;
restNumber--;
--restNumber;

console.log("El resultado de la resta es:", restNumber);

// Multiplicación
let multNumber = 2;
multNumber = multNumber * 2;
multNumber *= 2;

console.log("El resultado de la multiplicación es:", multNumber);

// División
let divNumber = 10;
divNumber = divNumber / 2;
divNumber /= 2;

console.log("El resultado de la división es:", divNumber);

// Módulo % --> Devuelve el resto/residuo de la división
let modNumber = 10;
modNumber = modNumber % 2;
modNumber %= 2;

let aRandomModule = 10 % 2;

console.log("El resultado del módulo es:", modNumber);

// -----  Operadores de comparación  -------

// Igualdad

// Loose equality ==
const isEqual1 = 5 == 5; // true

const isEqual2 = "Brisa" == "Gerard"; // false
const isEqual3 = "Brisa" == "Brisa"; // true

const isEqual4 = 5 == "5"; // true

// Strict equality
const isStrictEqual = 5 === 5; // true

const isStrictEqual2 = "Brisa" === "Gerard"; // false
const isStrictEqual3 = "Brisa" === "Brisa"; // true

const isStrictEqual4 = 5 === "5"; // false --> Nota que loose equality si lo considera igual

// Desigualdad
const isNotEqual1 = 5 !== "Texto"; // true
const isNotEqual2 = 5 !== 5; // false
const isNotEqual3 = 5 !== "5"; // true --> Si usaramos loose equality seria false ya que los consideraria iguales: 5 != "5" --> false

// Mayor que
const isGreaterThan1 = 5 > 10; // false
const isGreaterThan2 = 10 > 5; // true
const isGreaterThan3 = 5 > 5; // false

// Mayor o igual que
const isGreaterOrEqualThan1 = 5 >= 10; // false
const isGreaterOrEqualThan2 = 10 >= 5; // true
const isGreaterOrEqualTha32 = 5 >= 5; // true

// Menor que
const isLessThan1 = 5 < 10; // true
const isLessThan2 = 10 < 5; // false

// Menor o igual que
const isLessOrEqualThan1 = 5 <= 10; // true
const isLessOrEqualThan2 = 10 <= 5; // false

// -----  Operadores lógicos  -------

// AND (&&)--> Comprueba que todas las condiciones sean true

const andResult1 = true && true; // true
const andResult2 = true && false; // false
const andResult3 = false && true; // false
const andResult4 = false && false; // false

const ex1And = 10 > 5; // true
const ex2And = "Gerard" === "Brisa"; // false

const resultExAnd = ex1And && ex2And; // false

// OR (||) --> Comprueba que al menos una de las condiciones sea true
const orResult1 = true || true; // true
const orResult2 = true || false; // true
const orResult3 = false || true; // true
const orResult4 = false || false; // false

const ex1Or = 10 > 5; // true
const ex2Or = "Gerard" === "Brisa"; // false
const ex3Or = 10 < 5; // false

const resultExOr = ex1Or || ex2Or || ex3Or; // true

const superCombination = (ex1Or || ex2Or || ex3Or) && ex1And;

// NOT (!) --> Invierte el valor de la condición
const notResult1 = !true; // false
const notResult2 = !false; // true
