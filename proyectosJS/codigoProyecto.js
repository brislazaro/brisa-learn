const flights = [
  { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

  { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

  { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

  { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

  { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

  { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },

  { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

  { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

  { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

  { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

function welcomeUser(name) {
  console.log(`Bienvenid@ ${name}`);
}

function getFlightById(flightId) {
  for (let i = 0; i < flights.length; i++) {
    const element = flights[i];

    if (flightId === element.id) {
      return element;
    }
  }
}

function printFlight(flight) {
  let msgScale = `y no tiene escala`;
  if (flight.scale === true) {
    msgScale = `y tiene escala.`;
  }

  console.log(
    `El vuelo con Origen en ${flight.from} y Destino en ${flight.to} tiene un coste de ${flight.cost} Euros ${msgScale}`
  );
}

let userName = `brisa`;

welcomeUser(userName);

let totalPrices = 0;
for (let i = 0; i < flights.length; i++) {
  const flight = flights[i];
  totalPrices = totalPrices + flight.cost;

  printFlight(flight);
}

const priceAverage = totalPrices / flights.length;

console.log(`El precio medio de los vuelos es de ${priceAverage}`);

let confirmScales = true; // esto deberia ser un confirm

if (confirmScales === true) {
  for (let i = 0; i < flights.length; i++) {
    const element = flights[i];
    if (element.scale === true) {
      console.log(
        `Los vuelos con origen en ${element.to} y destino en ${element.from} si tienen escala`
      );
    }
  }
}

let lastFlights = flights.slice(flights.length - 5);
for (let i = 0; i < lastFlights.length; i++) {
  const element = lastFlights[i];

  printFlight(element);
}

let userIdentification = `admin`;
const userOrAdmin = userIdentification.toLowerCase();
console.log(userOrAdmin);

let askForPrice = 700;

if (userOrAdmin === `user`) {
  for (let i = 0; i < flights.length; i++) {
    const element = flights[i];
    if (askForPrice <= element.cost) {
      console.log(
        `Este es un vuelo con ese precio que tiene origen en ${element.to} y destino en ${element.from}`
      );
    }
  }
  let askForId = Number(prompt(`Introduce un ID`));

  let foundFlight = getFlightById(askForId);
  printFlight(foundFlight);
}

if (userOrAdmin === `admin`) {
  let newFligthId;
  let isIdInFlights = false;

  do {
    do {
      newFligthId = Number(prompt(`Introduce el ID`));
    } while (isNaN(newFligthId) === true);

    for (let i = 0; i < flights.length; i++) {
      const element = flights[i];

      if (element.id === newFligthId) {
        isIdInFlights = true;
      }
    }
  } while (isIdInFlights === true);

  console.log(newFligthId);

  let newFligthPrice = 0;

  do {
    newFligthPrice = Number(prompt('Introduce el precio'));
  } while (isNaN(newFligthPrice) === true);

  newFligthScale = confirm('introduce una escala');

  let newFlightTo;
  let newFlightToToNumber;
  do {
    newFlightTo = prompt('Introduce un origen');

    newFlightToToNumber = Number(newFlightTo);
  } while (newFlightTo === null || isNaN(newFlightToToNumber) === false);

  let newFlightFrom;
  let newFlightFromToNumber;
  do {
    newFlightFrom = prompt('Introduce un destino');

    newFlightFromToNumber = Number(newFlightFrom);
  } while (newFlightFrom === null || isNaN(newFlightFromToNumber) === false);

  const newFlight = {
    id: newFligthId,
    to: newFlightTo,
    from: newFlightFrom,
    cost: newFligthPrice,
    scale: newFligthScale,
  };
  flights.push(newFlight);

  for (let i = 0; i < flights.length; i++) {
    const element = flights[i];
    if (element > 15) {
      console.log(`Son demasiados vuelos`);
    }
  }
}
