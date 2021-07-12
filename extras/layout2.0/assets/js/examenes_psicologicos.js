jQuery(document).ready(function($){
// Change es un evento que se ejecuta cada vez que se cambia el valor de un elemento (input, select, etc).
$('#milista').change(function(e){
	$('#estado').val($(this).val());
  		estado = ($('input:hidden[name=estado]').val());
		location.href=base_url+"est/examen_psicologico/index/"+estado;
});
});


function buscar() {
    var textoBusqueda = $("input#busqueda").val();
    tipo = $('#milista').val();
    console.log(tipo)
    $("input#searchNombre").val('');
    $("input#searchApellido").val('');
    if (textoBusqueda != "" && textoBusqueda.length >4) {
        $.post(base_url+"est/examen_psicologico/busqueda", {valorBusqueda: textoBusqueda,tipo:tipo}, function(mensaje) {
            $('.dataTables_empty').fadeOut();
            $('.DTFC_Cloned').fadeOut();
            $("#resultadoBusqueda").html(mensaje);
        }); 
    };
};

function buscarNombre() {
    var textoBusqueda = $("input#searchNombre").val();
    tipo = $('#milista').val();
    console.log(tipo)
    $("input#busqueda").val('');
    $("input#searchApellido").val('');
    if (textoBusqueda != "" && textoBusqueda.length >4) {
        $.post(base_url+"est/examen_psicologico/busqueda", {valorBusquedaNombre: textoBusqueda,tipo:tipo}, function(mensaje) {
            $('.dataTables_empty').fadeOut();
            $('.DTFC_Cloned').fadeOut();
            $("#resultadoBusqueda").html(mensaje);
        }); 
    };
};
function buscarApellido() {
    var textoBusqueda = $("input#searchApellido").val();
    tipo = $('#milista').val();
    console.log(tipo)
    $("input#busqueda").val('');
    $("input#searchNombre").val('');
    if (textoBusqueda != "" && textoBusqueda.length >4) {
        $.post(base_url+"est/examen_psicologico/busqueda", {valorBusquedaApellido: textoBusqueda,tipo:tipo}, function(mensaje) {
            $('.dataTables_empty').fadeOut();
            $('.DTFC_Cloned').fadeOut();
            $("#resultadoBusqueda").html(mensaje);
        }); 
    };
};