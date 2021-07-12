$(document).ready(function(){
	setTimeout(function () {
		valor = $('#searchInTable').val();
		$('input[type="search"').val(valor).keyup();                      
	}, 500);
});