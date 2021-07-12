$(document).ready(function(){
  $("#example1").dataTable({
    scrollY:        "500px",
    scrollX:        true,
    scrollCollapse: true,
    paging:         false,
    fixedColumns:   {
        leftColumns: 1,
        rightColumns: 1
    }
  });
    $("#example2").DataTable({
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false
    });
    $("#example3").DataTable({
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false
    });


    $('#tblPsicologo').DataTable( {
        dom: 'Bfrtip',
        buttons: [
          'excel',
        ]
    } );


});
$(document).ready(function () {
  $('#datepickerPsicologos').datepicker({
    format: 'yyyy-mm',
    startView: "months", 
    minViewMode: "months",
    language: 'ES',
  }).on('changeDate', function(ev) {
      fecha_seleccionada = $(this).val();
      location.href=base_url+"est/trabajadores/solicitudes_revision_examenes_completas/"+fecha_seleccionada;
      });
});