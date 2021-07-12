

$(document).on('click', '.trabajadorBloqueado', function() {
	nombreTrabajador = $(this).attr('data-nombre');
	rutTrabajador = $(this).attr('data-rut');
	alertify.confirm('Trabajador con restricción de contratación', nombreTrabajador+" se encuentra con restricción de contratación ,  por lo tanto no es posible agregar al requerimiento", 
				function(){ //Si
						var posting = $.post( base_url + "marina_chillan/trabajadores/solicitar_liberar_lista_negra",{nombreTrabajador : nombreTrabajador, rutTrabajador : rutTrabajador});
				        posting.done(function( data ) {
				            alertify.success("Se ha enviado su solicitud")
				        });
				}
                , function(){ //No
                	//alertify.error('as')
                }).set('labels', {ok:'Solicitar Liberación', cancel:'Cerrar'});
	return false;
});
