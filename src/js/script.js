function cambiarTema() {
	$('#theme').on('click', "a.theme", function(){
		localStorage.setItem("theme", $(this).data("theme"));
		$(this).removeClass('active').addClass('active');
	});
}

function cambiarFondo() {
	$('#bg').on('click', "a.theme", function(){
		localStorage.setItem("bg", $(this).data("bg"));
		$(this).removeClass('active').addClass('active');
	});
}

function borrarImagen() {
	$("#toggle-bg").change(function (e) {
		e.preventDefault();
		$('.page-wrapper').toggleClass("sidebar-bg");
	});
}

function elegirTema() {
	if (localStorage.getItem("bg") != null || localStorage.getItem("theme") != null) {
		$('.page-wrapper').removeClass().addClass("page-wrapper sidebar-bg "+localStorage.getItem("bg")+" toggled " +localStorage.getItem("theme"));
	}
}

// toggle background image

// toggle border radius
$("#toggle-border-radius").change(function (e) {
	e.preventDefault();
	$('.page-wrapper').toggleClass("boder-radius-on");
});
$('.page-wrapper').toggleClass("sidebar-bg");