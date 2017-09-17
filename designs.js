// Select size input
var height = function() { 
	$("#input_height:input").val(); 
}

var width = function() { 
	$("#input_width:input").val();
	return;
}

var color = function() { 	$("#colorPicker:input").val();
	return;
}

function makeGrid(width, height) { 
	$("tr").remove(); 
	for (var i = 0; i < height; i++) { 
		$("#pixel_canvas").append("<tr> </tr>"); 
	}
	for (var l = 0; l < width; l++) { 
			$("tr").append("<td> </td>"); 
	}	
	$("#pixel_canvas").on("click", 'td', function(event) { 
		$(event.target).css('background-color', $("#colorPicker").val());
	});
	return;
}

$("form").submit(function(event) { 
	event.preventDefault(); 
	let width = $("#input_width").val(); 
	let height = $("#input_height").val(); 
	makeGrid(width, height); 
});


	