
    $(document).ready(function() {
      $('#example').DataTable({
        "lengthChange": false,
        "paging": false,
          language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
        }

      });
      $('[data-toggle="popover"]').popover();   
 
       $("#button").click(function() {
         $('html, body').animate({
         scrollTop: $("#elementtoScrollToID").offset().top
         }, 2000);
        });

      $(function(){
        $("form#basico input").rut();
        $("#rut").rut({formatOn: 'keyup'});
        $("form#formato-live input").rut({formatOn: 'keyup'});
        $("form#validacion-live input").rut({formatOn: 'keyup', validateOn: 'keyup'}).on('rutInvalido', function(){ $(this).parents(".control-group").addClass("error")}).on('rutValido', function(){ $(this).parents(".control-group").removeClass("error")});
        $("form#extraer-cuerpo input").rut().on('rutValido', function(e, rut){alert("Su RUT sin DV es " + rut);});
        $("form#multiple-events input").rut({validateOn: 'keyup change'}).on('rutInvalido', function(){ $(this).parents(".control-group").addClass("error") }).on('rutValido', function(){ $(this).parents(".control-group").removeClass("error") });
      });
     });