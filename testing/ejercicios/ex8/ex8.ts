/*
    En el ejercicio anterior, la parte para ordenar los alumnos para nuestro negocio es de suma importancia.

    Nos han pedido que nos aseguremos que esa parte funciona perfectamente, por lo que tenemos que testearla.

    Ahora mismo, la parte para ordenar los alumnos depende de la funcion getPassingStudents, por lo que no podemos testearla de forma aislada.

    Como podemos hacerlo para testear solamente esa parte de la funcion?

    Hazlo y testea la parte para ordenar los alumnos de forma aislada y con multiples escenarios.
*/

// Copia y pega la funcion que hiciste en el ejericico anterior (ex7) y haz el refactor necesario.

type Student = {
  name: string;
  grade: number;
};

export function sortStudents(passingStudentsNames: string[]) {
  const sortedStudents = passingStudentsNames.toSorted();
  return sortedStudents;
}

export function getPassingStudents(students: Student[]): string[] {
  // Filtramos los estudiantes que han aprobado (eliminamos los suspendidos)
  const passingStudents = students.filter((student) => student.grade >= 5);

  // Devolvemos un array con los nombres de los estudiantes aprobados
  const passingStudentsNames = passingStudents.map((student) => student.name);
  const sortedStudentNames = sortStudents(passingStudentsNames);

  return sortedStudentNames;
}
