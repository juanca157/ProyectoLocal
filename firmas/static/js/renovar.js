$(document).ready(function(){
	$("#errores").fadeTo(9000, 0.0);
        $("#btnRenovar").click(function(e){
		$("body").css("background", "rgb(0,0,0)");
		$(".upload").fadeTo(1000, 0.1);
		$("header").fadeTo(1000, 0.1);

		$("#btnRenovar").attr("disabled", true);
                $("#btnLogout").attr("disabled", true);
		$("#btnLogout").fadeTo(1000, 0.1);
		$("#btnRenovar").fadeTo(1000, 0.1);
		$("#div_firmar").fadeTo(1000, 0.1);
		$("#div_verificar").fadeTo(1000, 0.1);
		
		$("#verificar").attr("disabled", true);
		$("#firmar").attr("disabled", true);
		$(".bloqin").attr("disabled", true);
		$("title").fadeTo(1000, 0.1);
		$(".subtitulo").fadeTo(1000, 0.3);
		$(".regis").fadeTo(1000, 0.3);

		
		$("#div_renovar1").show();
		$("#div_renovar2").show();
		$("#renovar_llaves").show();
		$("#renovar_llaves").load('/renovar_llaves/')
        });
});
