function Mostrar()
{
	var numeroUno
	var numeroDos

	numeroUno=prompt("ingresar numeroUno");
	numeroDos=prompt("ingresar numeroDos");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno>numeroDos){

		document.write(numeroUno-numeroDos);
	}
	else if (numeroUno=numeroDos){
		document.write(numeroUno*numeroDos);

	}
	else
		document.write(numeroUno+numeroDos);



}
