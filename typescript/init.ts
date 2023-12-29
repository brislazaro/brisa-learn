/*
    string
    number
    boolean
    undefined
    null
    unknown
    any --> el ultimo recurso, NO SE DEBE USAR
    Date --> para las fechas
*/

let username: string = "brisa";

let age: number = 20;

const isGirl: boolean = true;

// Funciones

function sumar(n1: number, n2: number): number {
  return n1 + n2;
}

const sumarAF = (n1: number, n2: number): string => {
  return `result: ${n1 + n2}`;
};

const n1 = 20;
const n2 = 10;

const result = sumarAF(n1, n2);

// Arrays

const names: string[] = ["bri", "ger", "sara", "max"];

// Objetos

// interfaces

interface User {
  name: string;
  age: number;
  address?: {
    street: string;
    number: number;
  };
}

const user: User = {
  name: "Brisa",
  age: 26,
  address: {
    street: "annibal",
    number: 59,
  },
};

const userOther: User = {
  name: "Brisa",
  age: 26,
  address: {
    street: "annibal",
    number: 59,
  },
};

// types

type Engine = {
  model?: string;
  power: number;
};

type Fuel = "diesel" | "gasolina95" | "gasolina98";

type Car = {
  brand: string;
  model: string;
  engine: Engine;
  fuel: Fuel;
};

const car: Car = {
  brand: "bmw",
  model: "m3",
  engine: {
    model: "v8",
    power: 250,
  },
  fuel: "gasolina95",
};

type UserRole = "admin" | "registered" | "guest";

type User2 = {
  name: string;
  age: number;
  address: {
    street: string;
  };
};

let user2: User2 | null = null;

fetch("/userDetail")
  .then((res) => res.json())
  .then((data: any) => {
    user2 = data;
    console.log(user2?.address?.street);
  });

// Arrays de tipos custom

const fetchedUsers: User[] = [user, userOther];

type Move = {
  name: string;
  url: string;
};

interface ApiResponse {
  pokemonName: string;
  moves: Move[];
}

// Enums
enum UserType {
  guest = "guest",
  admin = "admin",
  registered = "registered",
}

const myUserType: UserType = UserType.guest;

enum Size {
  small = 0,
  medium = 1,
  large = 2,
}

const shirtSize: Size = Size.small;
