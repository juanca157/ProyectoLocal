$(document).ready(function(){
	function validarContra(contra, confirmacion) {
		var mayus = new RegExp("^(?=.*[A-Z])");
		var especial = new RegExp("^(?=.*[-_!@#$%&*])");
		var number = new RegExp("^(?=.*[0-9])");
		var minus = new RegExp("^(?=.*[a-z])");

		if(mayus.test(contra) && especial.test(contra) && number.test(contra) && minus.test(contra)) {
			return true;
		}
		return false;
	}

    $("#btnAceptar").click(function(){
		var contra = $("#contra").val();
	var confirmacion = $("#confcontra").val();
		if (contra.length < 10) {
			$("#errores").css("display", "block");
			$("#errores").html("<STRONG>ERROR: Revise las politicas para la creacion de contraseñas </STRONG>");
			return false;
		}
		if (confirmacion != contra) {
                        $("#errores").css("display", "block");
                        $("#errores").html("<STRONG>ERROR: contraseñas no coinciden</STRONG>");
                        return false;
                }
		if (!validarContra(contra)) {
			$("#errores").css("display", "block");
			$("#errores").html("<STRONG>ERROR: Revise las politicas para la creacion de contraseñas </STRONG>");
			return false;
		}

	});
});
