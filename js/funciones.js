//Variables
var form = document.querySelector("#form");
var numero = document.querySelector("#campoNumero");


//Creo una variable AJAX
var ajax = new XMLHttpRequest();
//Mediante el metodo open accedo al link donde esta el json
ajax.open("GET","http://appsroket.herokuapp.com/api/news", false);
//no ocupo enviar datos
ajax.send(null);
//Parseo el json y lo guardo en una variable javascript
var json = JSON.parse(ajax.responseText);


//Saco la informacion del json y la ingreso en  el html
function mostrarInfo(evento){
	evento.preventDefault();

	for(var i=0;i<12;i++){
			var info = "";
			info += "<article>";
				info += "<div>";
					info += "<h1> "+json[i].id+"</h1>";
					info += "<p> "+json[i].content+"</p>";
					info += "<img  src='"+json[i].picture+"'>";
				info += "</div>";

			info += "</article>";
			document.getElementById("numeros"+i).innerHTML = info;
	}
}
//mediante el evento submit del formulario genero la lista
function carga(){
	form.addEventListener("load",mostrarInfo);

}
//Al cargar la ventana se carga el evento del formulario
//Asignacion de eventos
window.addEventListener("load",mostrarInfo);
