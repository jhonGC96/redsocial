$(document).ready(function() {
	$('#bt_add').click(function() {
		agregar();
	});
	$('#bt_del').click(function() {
		eliminar(id_fila_selected);
	});
	$('#bt_delall').click(function() {
		eliminarTodasFilas();
	});
});

var cont = 0;
var id_fila_selected = [];
let id_tecnologia = document.getElementById('id_tecnologia')
let beforetecla = document.getElementById('before')
let aftertecla = document.getElementById('after')




function agregar() {
	var fila = '<tr class="selected" id="tecnologia' + id_tecnologia.value + '" onclick="seleccionar(this.id);"><td>' + id_tecnologia.name + '</td><td>' + beforetecla + '</td><td>' + beforetecla + '</td></tr>';
	$('#tablaTecnologia').append(fila);
	reordenar();
}

function seleccionar(id_fila) {
	if ($('#' + id_fila).hasClass('seleccionada')) {
		$('#' + id_fila).removeClass('seleccionada');
	} else {
		$('#' + id_fila).addClass('seleccionada');
	}
	//2702id_fila_selected=id_fila;
	id_fila_selected.push(id_fila);
}

function eliminar(id_fila) {
	/*$('#'+id_fila).remove();
	reordenar();*/
	for (var i = 0; i < id_fila.length; i++) {
		$('#' + id_fila[i]).remove();
	}
	reordenar();
}

function reordenar() {
	var num = 1;
	$('#tabla tbody tr').each(function() {
		$(this).find('td').eq(0).text(num);
		num++;
	});
}

function eliminarTodasFilas() {
	$('#tabla tbody tr').each(function() {
		$(this).remove();
	});

}