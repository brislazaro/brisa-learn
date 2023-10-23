const USER_ROLE_BASIC = 'BASIC';
const USER_ROLE_SILVER = 'SILVER';
const USER_ROLE_GOLD = 'GOLD';
const USER_ROLE_PLATINUM = 'PLATINUM';

const userRole1 = USER_ROLE_GOLD;

if (userRole1 === USER_ROLE_BASIC) {
  console.log("I'm a basic user");
} else if (userRole1 === USER_ROLE_SILVER) {
  console.log("I'm a silver user");
} else if (userRole1 === USER_ROLE_GOLD) {
  console.log("I'm a gold user");
} else {
  console.log("I'm a Platinum user");
}

// Ahora haremos lo mismo, pero usando funciones que nos sirvan para saber si un usuario es de un rol
// en concreto

// Primero creamos las funciones, y luego las usaremos.

function isBasicUser(userRole) {
  if (userRole === USER_ROLE_BASIC) {
    return true;
  }

  return false;
}

function isSilverUser(userRole) {
  if (userRole === USER_ROLE_SILVER) {
    return true;
  } else {
    return false;
  }
}

function isGoldUser(userRole) {
  if (userRole === USER_ROLE_GOLD) {
    return true;
  } else {
    return false;
  }
}

function isPlatinumUser(userRole) {
  if (userRole === USER_ROLE_PLATINUM) {
    return true;
  } else {
    return false;
  }
}

const userRole2 = USER_ROLE_PLATINUM;

if (isBasicUser(userRole2)) {
  console.log('Basic');
} else if (isGoldUser(userRole2)) {
  console.log('Gold');
} else if (isSilverUser(userRole2)) {
  console.log('Silver');
} else {
  console.log('platinum');
}
