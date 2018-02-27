function Mostrar()
{
//tomo la edad  

	var edad, estadocivil;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadocivil=document.getElementById('estadoCivil').value;
	if (edad>=18 && estadocivil=='Soltero'){
		alert("Es solter y no es menor");
	}


}//FIN DE LA FUNCIÓN