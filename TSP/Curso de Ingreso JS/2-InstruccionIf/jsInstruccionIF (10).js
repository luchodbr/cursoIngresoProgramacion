function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=document.getElementById('FormIngreso').value;
	numero=Math.round(Math.random()*10);
	if (numero>=9 && numero<=10){
		alert("Nota: "+numero+"."+" EXCELENTE");
	}
	else if(numero>=4 && numero<9){
		alert("Nota: "+numero+"."+" APROBÓ");
	}
	else if(numero<4){
		alert("Nota: "+numero+"."+" Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN