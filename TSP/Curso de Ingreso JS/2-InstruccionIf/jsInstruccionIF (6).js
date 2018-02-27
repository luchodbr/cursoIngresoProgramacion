function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if (edad>=18){
		alert("La persona es mayor de edad");

	}
	else if(edad<=12){
		alert("La persona es niño");
	}
	else{
		alert("La persona es adolescente");
	}


}//FIN DE LA FUNCIÓN