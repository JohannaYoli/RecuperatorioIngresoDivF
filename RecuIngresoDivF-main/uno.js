function mostrar() {
	/*
	Una software factory registra la siguiente informacion de sus empleados:
	Nombre 
	edad (validar)
	sexo (masculino - femenino - no binario)
	puesto (programador - analista - Qa)
	sueldo (entre 15000 y 70000)
	La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
	a) promedio de sueldos para cada puesto
	b) el sexo del que percibe el mayor sueldo
	c) el nombre del empleado femenino con mas sueldo
	d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
	*/

	let seguir;
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;

	let contProgarmador = 0;
	let contAnalista = 0;
	let contQa = 0;
	let acumSueldoProgarmador = 0;
	let acumSueldoAnalista = 0;
	let acumSueldoQa = 0;
	let promSueldoProgarmador = 0;
	let promSueldoAnalista = 0;
	let promSueldoQa = 0;

	let maxSueldo = 0;
	let maxSueldoSexo;
	let flagMaxSueldo = 1;

	let flagMaxSueldoFem = 1;
	let maxSueldoFem = 0;
	let maxSueldoFemNombre;

	let contNbSueldo = 0;
	
	do {

		nombre = prompt("Ingrese nombre: ");
		while (!isNaN(nombre)) {
			nombre = parseInt(prompt("Error. Ingrese nombre: "));
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while (edad <= 0 || isNaN(edad)) {
			edad = parseInt(prompt("Error. Ingrese edad: "));
		}

		sexo = prompt("Ingrese sexo f/m/nb: ").toLowerCase();
		while (sexo != "f" && sexo != "m" && sexo != "nb") {
			sexo = prompt("Error. Ingrese sexo f/m/nb: ").toLowerCase();
		}

		puesto = prompt("Ingrese puesto programador/analista/qa: ").toLowerCase();
		while (puesto != "programador" && puesto != "analista" && puesto != "qa") {
			puesto = prompt("Error. Ingrese puesto programador/analista/qa: ").toLowerCase();
		}

		sueldo = parseInt(prompt("Ingrese sueldo"));
		while (sueldo < 15000 || sueldo > 70000 || isNaN(sueldo)) {
			sueldo = parseInt(prompt("Error. Ingrese sueldo"));
		}

		// a)
		if (puesto == 'programador') {
			contProgarmador++;
			acumSueldoProgarmador += sueldo;
		} else if (puesto == 'analista') {
			contAnalista++;
			acumSueldoAnalista += sueldo;
		} else {
			contQa++;
			acumSueldoQa += sueldo;
		}

		// b)
		if (flagMaxSueldo || sueldo > maxSueldo) {
			maxSueldo = sueldo;
			maxSueldoSexo = sexo;
			flagMaxSueldo = 0;
		}

		// c)
		if (sexo == 'f' && (flagMaxSueldoFem || maxSueldoFem < sueldo)) {
			maxSueldoFem = sueldo;
			maxSueldoFemNombre = nombre;
			flagMaxSueldoFem = 0;
		}

		// d)
		if (sexo == 'nb' &&  puesto == 'programador' && (sueldo >= 20000 && sueldo <= 55000)) {
			contNbSueldo++;
		}

		seguir = prompt("Desea seguir ingresando registros? Ingrese s para continuar.");

	} while (seguir == "s");

	// a
	if (contProgarmador != 0) {
		promSueldoProgarmador = acumSueldoProgarmador / contProgarmador;
	}

	if (contAnalista != 0) {
		promSueldoAnalista = acumSueldoAnalista / contAnalista;
	}

	if (contQa != 0) {
		promSueldoQa = acumSueldoQa / contQa;
	}

	// a) promedio de sueldos para cada puesto
	console.log(`Promedio: Programador ${promSueldoProgarmador.toFixed(2)}, Analista ${promSueldoAnalista.toFixed(2)}, Qa ${promSueldoQa.toFixed(2)}.`);

	// b) el sexo del que percibe el mayor sueldo
	console.log(`El sexo con el sueldo más alto es ${maxSueldoSexo}.`);

	// c) el nombre del empleado femenino con mas sueldo
	if (flagMaxSueldoFem == 1) {
		console.log("No se ingresaron mujeres.");
	} else {
		console.log(`La mujer con mayor sueldo se llama ${maxSueldoFemNombre}.`);
	}

	// d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
	if (contNbSueldo == 0) {
		console.log("No se ingresaron no binarios con sueldos entre 20000 y 55000.");
	} else {
		console.log(`No binarios con sueldos entre 20000 y 55000: ${contNbSueldo}.`);
	}


}