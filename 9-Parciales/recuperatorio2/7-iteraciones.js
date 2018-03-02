//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var i;
	var sexo;
	var acum=0;
	var cantVarones=0;
	var prom=0;
	var min;

	for(i=1;i<=6;i++){ 

		nota=parseInt(prompt("ingrese la nota"));
		while(nota<0 || nota>10){

			nota=parseInt(prompt("ERROR, ingrese la nota"));
		}

		sexo=prompt("Ingrese f o m . Segun genero");
		while(sexo!="f" && sexo!="m"){
			sexo=prompt("Ingrese f o m . Segun genero");
		} 

		acum=acum+nota;

		if(i==1 || nota<min){
			min=nota;

		}

		if(sexo=="m" && nota>=6){
			cantVarones++;

		}

	}
	prom=acum/6;

	alert(prom);
	alert(min);
	alert(cantVarones);
}