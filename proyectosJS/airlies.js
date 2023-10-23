/*
    Haz una interfaz de usuario (por consola) para una companyia de vuelos, Brirlines.

    1- Tiene que pedir el nombre del usuario y darle la bienvenida por consola

    Tenemos un array de vuelos <flights> (que declaramos a nivel global) con 10 vuelos para hoy.

    2- Imprime los vuelos disponibles de una forma amigable:
      ex: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

    3- Despues de imprimir los vuelos, muestra el coste medio de estos al usuario

    4- Despues, pregunta al usuario si quiere ver los vuelos que SI qeu efectuan escalas
    puedes usar la funcion cofnirm(): https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
        4.1- Si responde OK, muestra los vuelos con escala
        4.2- Sino, no muestres ningun vuelo
    
    5- Ahora, muestra los 5 ultimos vuelos al usuario con el mismo formato que antes.

    6- Por ultimo crea una funcion para imprimir un vuelo con el formato que se te pide y usala cuando necessites imprimir
    un vuelo

    ____________________________
    _______ VERSION PRO ________
    ____________________________

    1- Despues de todo ese proceso, el programa debe pedirle al usuario si es un ADMIN o un USER.
    Debe aceptar mayúsculas y minúsculas indiferentemente

    2- Si es un USER el programa deberia permitir comprar un vuelo haciendo lo siguiente
        2.1- El usuario tiene que buscar por precio. Al pedirselo, le mostraras los vuelos con ese precio
        o mas baratos.
        
        2.2- Pedir al usuario el ID del vuelo que quiere comprar.

        2.3- Con el ID, si ese vuelo existe, le diremos al usuario gracias por su compra vuelva pronto, sino
        deberemos seguir preguntando por el ID del vuelo hasta que uno coincida.

    3- Si es ADMIN, el usuario debera poder añadir vuelos nuevos.
        3.1- Debes pedir la info de los vuelos mediante prompts. Recuerda validar las cosas
            - el ID no puede estar repetido
            - el coste tiene qeu ser un numero
            - scale tiene que ser true/false
        
        3.2- El programa no pude tener mas de 15 vuelos. Si llega al maximo, le mostraremos un alert con un error
        
        3.3- Cada vez que cree un vuelo, mostraremos todos los vuelos al usuario

    4- Ahora refactoriza el codigo haciendo funciones para bloques de codigo que te lo permitan
     ex: validaciones, el proceso de pedir la info de un vuelo...
*/

let flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];
