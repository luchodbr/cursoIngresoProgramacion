function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=document.getElementById('FormIngreso').value;
	numero=Math.round(Math.random()*10);
	alert("Numero: "+numero);

}//FIN DE LA FUNCIÓN