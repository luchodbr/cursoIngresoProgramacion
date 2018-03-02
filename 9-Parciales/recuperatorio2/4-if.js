//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1 = parseInt(prompt("ingrese el primer numero"));
	var numero2 = parseInt(prompt("ingrese el segundo numero"));

	if(numero1==numero2){
		document.write(numero1*numero2);
	}
	else if(numero1>numero2){
		document.write(numero1-numero2);
	}
	else{
		document.write(numero1+numero2);
	}

}

