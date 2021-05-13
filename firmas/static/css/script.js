$(function() {
    var  boton = document.getElementById("valid");
    boton.onsubmit = function(event) {
    var useri = document.getElementById('usuario').value;
	var nombre = document.getElementById("nom").value;
	var correo = document.getElementById("corre").value;
	var contraseña = document.getElementById("contra").value;
	var confcontra = document.getElementById("confcontra").value;


	var errores1 = document.getElementById("errores1");
	var errores2 = document.getElementById("errores2");
	var errores3 = document.getElementById("errores3");
	var errorcontra = document.getElementById('errorcontra');
	var errcon = document.getElementById('errcon');

	errores1.innerHTML= "";
	errores2.innerHTML="";
	errores3.innerHTML= "";
    errorcontra.innerHTML = "";
    errcon.innerHTML = "";


	if(nombre.trim() ==  ""){
	    errores1.classList.add('glyphicon-warning-sign');
	    var nerr = document.getElementById('nerr');
	    nerr.classList.add('has-error');
	    errores1.innerHTML += " EL NOMBRE NO PUEDE IR VACIO";
	    event.preventDefault();

	}else if (nombre.length < 3){
	    var nerr = document.getElementById('nerr');
	    nerr.classList.add('has-error');
	    errores1.innerHTML += " EL NOMBRE ES MUY CORTO";
	    event.preventDefault();
	}



	if(useri.trim() ==""){
	    var ineda = document.getElementById('errores2');
	    ineda.classList.add('glyphicon-warning-sign');
	    var ederr = document.getElementById('userr');
	    ederr.classList.add('has-error');

	    errores2.innerHTML += " EL USUARIO NO PUEDE IR VACIO";
	    event.preventDefault();
	}


   if(contraseña.trim() == ""){
    var conter = document.getElementById('errcon');
    conter.classList.add('glyphicon-warning-sign');

    var conterd = document.getElementById('conterr');
    conterd.classList.add('has-error');

    conter.innerHTML += '  LA CONTRASEÑA NO PUEDE IR VACIA';
    alert(contraseña.length);
    event.preventDefault();


   }else if (contraseña.length < 8){
       var conter = document.getElementById('errcon');
    conter.classList.add('glyphicon-warning-sign');

    var conterd = document.getElementById('conterr');
    conterd.classList.add('has-error');

    conter.innerHTML += '  LA CONTRASEÑA DEB SER DE AL MENOS 8 CARACTERES';
    event.preventDefault();
}







	if(correo.trim() == ""){

	    var intd = document.getElementById('errores3');
	    intd.classList.add("glyphicon-warning-sign");

	    var gerr = document.getElementById("gerr");
	    gerr.classList.add('has-error');

	    errores3.innerHTML += " EL CORREO NO PUEDE IR VACIO ";
	    event.preventDefault();
	}else (correo){



	}






if (contra.value != confcontra ){

        var intx = document.getElementById('errorcon');
	    intx.classList.add("glyphicon-warning-sign");

        var xerr = document.getElementById("errcontra");
	    xerr.classList.add('has-error');

	    errorcontra.innerHTML += "LAS CONTRASEÑAS NO CONCUERDAN";

        event.preventDefault();

}


    }

});
