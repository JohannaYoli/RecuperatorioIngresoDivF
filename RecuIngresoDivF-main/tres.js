function mostrar() {
	/*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas 
marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad
total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/

	let seguir;
	let nombre;
	let cantidad;
	let marca;
	let precioUnidad;
	let total = 0;

	let perdidaFelipe = 0;
	let perdidaArgentina = 0;
	let perdidasTotales = 0;
	let precioCompra = 0;

	let acumFelipe = 0;
	let acumArgentina = 0;
	let acumIluminatis = 0;
	let promFelipe = 0;
	let promArgentina = 0;
	let promIluminatis = 0;

	let maxMarcaVentas;
	let contFelipe = 0;
	let contArgentina = 0;
	let contIluminatis = 0;

	do {

		nombre = prompt("Ingrese nombre: ");
		while (!isNaN(nombre)) {
			nombre = parseInt(prompt("Error. Ingrese nombre: "));
		}

		cantidad = parseInt(prompt("Ingrese cantidad: "));
		while (cantidad <= 0 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Error. Ingrese cantidad: "));
		}

		marca = prompt("Ingrese marca FelipeLamparas/ArgentinaLuz/Iluminatis: ").toLowerCase();
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "iluminatis") {
			marca = prompt("Error. Ingrese marca FelipeLamparas/ArgentinaLuz/Iluminatis: ").toLowerCase();
		}

		precioUnidad = parseInt(prompt("Ingrese Precio por unidad: "));
		while (precioUnidad <= 0 || isNaN(precioUnidad)) {
			precioUnidad = parseInt(prompt("Error. Ingrese Precio por unidad: "));
		}

		precioCompra = precioUnidad * cantidad;

		// a y b)
		if (marca == 'felipelamparas' && cantidad > 5) {
			perdidaFelipe = precioCompra * 0.10;
			precioCompra = precioCompra - perdidaFelipe;
			perdidasTotales += perdidaFelipe;
		}

		if (marca == 'argentinaluz' && cantidad >= 3) {
			perdidaArgentina = precioCompra * 0.05;
			precioCompra = precioCompra - perdidaArgentina;
			perdidasTotales += perdidaArgentina;
		}

		// c)
		if (marca == 'felipelamparas') {
			acumFelipe += cantidad;
			contFelipe++;
		} else if (marca == 'argentinaluz') {
			acumArgentina += cantidad;
			contArgentina++;
		} else {
			acumIluminatis += cantidad;
			contIluminatis++;
		}

		total += precioCompra;

		seguir = prompt("Desea seguir ingresando registros? Ingrese s para continuar.");

	} while (seguir == "s");

	// c)
	if (contFelipe != 0) {
		promFelipe = acumFelipe / contFelipe;
	}

	if (contArgentina != 0) {
		promArgentina = acumArgentina / contArgentina;
	}

	if (contIluminatis != 0) {
		promIluminatis = acumIluminatis / contIluminatis;
	}

	// d)
	if (contFelipe > contArgentina && contFelipe > contIluminatis) {
		maxMarcaVentas = "FelipeLamparas";
	} else if (acontrgentina >= contFelipe && contArgentina > contIluminatis) {
		maxMarcaVentas = "ArgenrinaLuz";
	} else {
		maxMarcaVentas = "Iluminatis";
	}

	// a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
	console.log(`El precio total de ventas es de: ${total}.`);

	// b) Cuanto "perdio" la empresa en concepto de descuentos.
	if (perdidasTotales == 0) {
		console.log("No se registraron perdidas.");
	} else {
		console.log(`El total de las perdidas registradas es de: ${perdidasTotales}.`);
	}

	// c) El promedio de la cantidad de lamparas vendidas de cada marca.
	console.log(`Promedio: FelipeLamparas ${promFelipe.toFixed(2)}, ArgentinaLuz ${promArgentina.toFixed(2)}, Iluminatis ${promIluminatis.toFixed(2)} por cada compra.`);

	// d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
	console.log(`El nombre de la marca que mas ventas realizó es ${maxMarcaVentas}.`);

}