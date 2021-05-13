$(function() {
    var  boton = document.getElementById("valid");
    boton.onsubmit = function(event) {

    var usuario = document.getElementById("userito").value;
    var contra = document.getElementById("passi").value;

    var errores1 = document.getElementById("errores1");
	var errores2 = document.getElementById("errores2");

	errores1.innerHTML="";
	errores2.innerHTML="";


	if(usuario.trim() == ""){

	    var clas = document.getElementById('errores1');
	    clas.classList.add('glyphicon-warning-sign');
	    var ederr = document.getElementById('userr');
	    ederr.classList.add('has-error');

	    errores1.innerHTML += " POR FAVOR ESCRIBA SU USUARIO";
	    event.preventDefault();
	}



if(contra.trim() == ""){
    var clas = document.getElementById('errores2');
    clas.classList.add('glyphicon-warning-sign');
    var con = document.getElementById('contra')
    con.classList.add('has-error');

    errores2.innerHTML += " LA CONTRASEÑA NO PUEDE IR VACIA ";
	 event.preventDefault();
}


    }

});
