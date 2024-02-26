/*
    Aqui tienes una funcion que recibe un array de alumnos (objetos) con sus notas.

    Esta funcion devuelve un array de strings con los nombres de los alumnos que han aprobado.

    1- Lee la funcion y asegurate de entendela. No podemos testear una funcion si no la entendemos.

    Testea esta funcion. Aqui tienes 1 escenario, pero añade 3 mas como minimo (array vacio, solo un alumno, todos suspendidos, otros que se te ocurran)

    const students = [
        { name: 'Pepe', grade: 5 },
        { name: 'Juan', grade: 0 },
        { name: 'Alicia', grade: 7 },
    ];

    const expected = ['Pepe', 'Alicia'];

    ----- EX 7 -----
    Nos hemos dado cuenta de que el codigo para el ejercicio anterior (ex6) nos complica la vida, ya que no ordena
    a los alumnos por orden alfabetico.

    Modificala para que antes de retornar los alumnos, los ordene por orden alfabetico.

    Nota: Puedes usar la funcion sort de los arrays. Busca informacion sobre ella si no la conoces.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    Si no le pasas nada al sort, ordena los strings alfabeticamente. Si le pasas una funcion, puedes ordenarlos como quieras.

    Siguen funcionando los tests que hiciste para el ejercicio anterior?
*/

type Student = {
  name: string;
  grade: number;
};

function getPassingStudents(students: Student[]): string[] {
  // Filtramos los estudiantes que han aprobado (eliminamos los suspendidos)
  const passingStudents = students.filter((student) => student.grade >= 5);

  // Devolvemos un array con los nombres de los estudiantes aprobados
  const passingStudentsNames = passingStudents.map((student) => student.name);

  return passingStudentsNames;
}
