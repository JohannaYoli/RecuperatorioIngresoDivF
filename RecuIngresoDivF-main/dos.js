function mostrar() {
    /*
    Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
    nombre 
    carrera("Quimica";"Fisica";"Sistemas")
    sexo (masculino - femenino - no binario)
    cantidad de materias(entre 1 y 5)
    Nota promedio del alumno (entre 0 y 10)
    edad (validar)
    se debe informar de existir, o informar que no existe , en el caso que corresponda.
    a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    b) El nombre de la alumna mas joven.
    c) Porcentaje de estudiantes que estudia cada carrera.
    d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica
    */

    let nombre;
    let edad;
    let sexo;
    let cantMaterias;
    let nota;

    let flagPromFisica = 1;
    let maxPromFisica = 0;
    let maxPromFisicaNombre = 0;

    let flagMujerJoven = 1;
    let edadMujerJoven = 100;
    let nombreMujerJoven;

    let contFisica = 0;
    let contQuimica = 0;
    let contSistemas = 0;
    let promFisica = 0;
    let promQuimica = 0;
    let promSistemas = 0;

    let flagmaxMaterias = 1;
    let maxMaterias = 5;
    let maxMateriasNombre;
    let maxMateriasEdad;

    for (let index = 0; index < 500; index++) {

        nombre = prompt("Ingrese nombre: ");
		while (!isNaN(nombre)) {
			nombre = parseInt(prompt("Error. Ingrese nombre: "));
		}

        carrera = prompt("Ingrese carrera quimica/fisica/sistemas: ").toLowerCase();
        while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {
            carrera = prompt("Error. Ingrese carrera quimica/fisica/sistemas: ").toLowerCase();
        }

        sexo = prompt("Ingrese sexo f/m/nb: ").toLowerCase();
        while (sexo != "f" && sexo != "m" && sexo != "nb") {
            sexo = prompt("Error. Ingrese sexo f/m/nb: ").toLowerCase();
        }

        cantMaterias = parseInt(prompt("Ingrese cantidad de materias (1 a 5)"));
        while (cantMaterias < 1 || cantMaterias > 5 || isNaN(cantMaterias)) {
            cantMaterias = parseInt(prompt("Error. Ingrese cantidad de materias"));
        }

        nota = parseInt(prompt("Ingrese nota"));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Error. Ingrese nota"));
        }

        edad = parseInt(prompt("Ingrese edad: "));
        while (edad <= 0 || isNaN(edad)) {
            edad = parseInt(prompt("Error. Ingrese edad: "));
        }

        // a)
        if (carrera == 'fisica' && (flagPromFisica || maxPromFisica < nota)) {
            maxPromFisica = nota;
            maxPromFisicaNombre = nombre;
            flagPromFisica = 0;
        }

        // b)
        if (sexo == 'f' && (flagMujerJoven || edadMujerJoven > edad)) {
            edadMujerJoven = edad;
            nombreMujerJoven = nombre;
            flagMujerJoven = 0;
        }

        // c)
        switch (carrera) {
            case 'fisica':
                contFisica++;
                break;
            case 'quimica':
                contQuimica++;
                break;
            case 'sistemas':
                contSistemas++;
                break;
        }

        // d)
        if (carrera !== 'quimica' && (flagmaxMaterias || maxMaterias < cantMaterias)) {
            maxMaterias = cantMaterias;
            maxMateriasNombre = nombre;
            maxMateriasEdad = edad;
            flagmaxMaterias = 0;
        }

    }

    if (contFisica != 0) {
        promFisica = (contFisica * 100) / 500.
    }

    if (contQuimica != 0) {
        promQuimica = (contQuimica * 100) / 500.
    }

    if (contSistemas != 0) {
        promSistemas = (contSistemas * 100) / 500.
    }

    // a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    if (flagPromFisica == 1) {
        console.log("No se ingresaron alumnos que estudien física.");
    } else {
        console.log(`El alumno que estudia física con mayor promedio se llama ${maxPromFisicaNombre}.`);
    }

    // b) El nombre de la alumna mas joven.
    if (flagMujerJoven == 1) {
        console.log("No se ingresaron mujeres.");
    } else {
        console.log(`La alumna más joven se llama ${nombreMujerJoven}.`);
    }

    // c) Porcentaje de estudiantes que estudia cada carrera.
    console.log(`Porcentaje según carrera: Física ${promFisica.toFixed(2)}, Quimica ${promQuimica.toFixed(2)}, Sistemas ${promSistemas.toFixed(2)}.`);

    // d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica
    if (flagmaxMaterias == 1) {
        console.log("No se ingresaron alumnos que no estudie química.");
    } else {
        console.log(`El alumno que cursa más materias se llamas ${maxMateriasNombre} y tiene ${maxMateriasEdad} .`);
    }


}