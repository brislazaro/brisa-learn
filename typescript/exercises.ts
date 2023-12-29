/* 
    1- Declara variables usando cada uno de los tipos basicos de TS. Asignale valores apropiados.
    TS basic types: number, string, boolean, null, undefined, y any. 
*/

/*
    2- Define una 'interface' Person con las propiedades: 'name', 'age' y una propiedad opcional 'email'.
    Asignale los tipos correctamente

    Luego crea un objeto llamado brisa, que sea del tipo Person con las propiedades correspondientes.
*/

/*
    3- Crea un 'type' Coordinates que será un objeto con 'latitude' y 'longitude' como numeros.
    Luego crea una constante llamada location que sea del tipo Coordinates con sus propiedades correspondientes
*/

/*
    4- Ahora crea un tipo User (con interface o type) que sea un objeto con estas propiedades:
        - name,
        - age,
        - address: { // opcional
            street,
            number
        },
        - role: va a ser un string, pero solo puede ser "admin", "guest" o "registered"

    Usa otro tipo (interface o type) para el objeto de address, no lo metas todo dentro del tipo User.
*/

/*
    5- Crea un enum DaysOfWeek con cada uno de los dias de la semana y un valor para cada dia:
        - Monday: valor 0
        - Tuesday: valor 1
        - Wednesday: valor 2
        - Thursday: valor 3
        - Friday: valor 4
        - Saturday: valor 5
        - Sunday: valor 6

    Ahora crea una constante currentDay que sea del tipo DaysOfWeek y asignale el valor de hoy.
*/

/*
    6- Caso real:

    Tenemos un equipo de futbol y queremos tipar los datos del equipo y los jugadores.

    El equipo (Team) tiene estas propiedades:
        - teamName,
        - leaguePosition: la posicion en la liga, va a ser un numero.
        - players: el listado de los jugadores

    Cada jugador (Player) tiene estas propiedades:
        - name,
        - age,
        - currentPosition: la posicion del campo, puede ser "portero", "defensa", "centro" o "delantero"
        - skills: un array con las habilidades y su puntuacion

    Cada habilidad (Skill) tiene estas propiedades:
        - name: el nombre de la habilidad, puede ser "tiro", "pase" o "regate"
        - score: la puntuacion de la habilidad. Puede ser bad, normal, good o excellent, pero tiene que ser un valor numerico (usa un enum)


    Crea los tipos necesarios para tipar estos datos y crea un array del tipo Team con 2 jugadores dentro.
*/
