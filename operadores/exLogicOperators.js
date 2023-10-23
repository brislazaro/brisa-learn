/*
    1- Que valores tendran las siguientes variables?
*/

const ex1Equality1 = 1 === 1; //true

const ex1Equality2 = 1 === 2;//false

const ex1Equality3 = 1 !== 1;//false

const ex1Equality5 = "Hola" === "Hola";//true

const ex1Equality6 = "Hola" === "hola";//false

const ex1Equality4 = "Hola" !== "Hola";//false

const ex1Equality7 = 1 < 2;//true

const ex1Equality8 = 1 > 2;//false

const ex1Equality9 = 1 <= 2;//true

const ex1Equality10 = 1 >= 2;//false

const ex1Equality11 = 1 <= 1;//true

const ex1Equality12 = 1 >= 1;//true

const ex1Equality13 = 5 == "5";//true

const ex1Equality14 = 5 === "5";//false

/*
    2- Que valores tendran las siguientes variables?
*/

const ex2Equality1 = 1 === 1; //true 

const ex2Equality2 = !ex2Equality1; //false --> !true

const ex2Equality3 = !ex2Equality2; //true --> !false

/*
    3- Que valores tendran las siguientes variables?
*/

const ex3Equality1 = 1 === 1;// true 
const ex3Equality2 = 1 <= 2;//true
const ex3Equality3 = ex3Equality1 && ex3Equality2;//true

const ex3Equality4 = 1 !== 200;//true 
const ex3Equality5 = 1 >= -1;//true 
const ex3Equality6 = "Hola" === "Hola";//true 
const ex3Equality7 = ex3Equality4 && ex3Equality5 && ex3Equality6;//true 

const ex3Equality8 = 1 === 1;//true 
const ex3Equality9 = 1 === 2;//false
const ex3Equality10 = "Hola" === "Hola";//true 
const ex3Equality11 = "Hola" === "1234";//false
const ex3Equality12 = "Hola" !== "1234";//true
const ex3Equality13 =
  ex3Equality8 &&
  ex3Equality9 &&
  ex3Equality10 &&
  ex3Equality11 &&
  ex3Equality12;//false

const ex3Equality14 =
  ex3Equality8 ||
  ex3Equality9 ||
  ex3Equality10 ||
  ex3Equality11 ||
  ex3Equality12;//true



/*
    4- Que valor tendra la variable canAcces?
    
    Pista: Resuelve las expresiones de dentro de los parentesis primero para luego resolver el resto.
    Para que sea mas facil, puedes poner al lado de cada expresion el valor que tendria, asi lo ves mas claro.
*/

const isGreaterThan18 = true;

const hasBasicMembership = false;
const hasUpgradedMembership = false;
const hasVIPMembership = true;

const isUserAdmin = false;
const isUserModerator = true;
const isUserReceptionist = false;
 
const canAccess =
  isGreaterThan18 &&//true
  !hasBasicMembership &&//true
  (hasUpgradedMembership || hasVIPMembership) && // true
  !isUserReceptionist &&//true
  (isUserAdmin || isUserModerator);//true
  //true