// Select size input

var n = function() {
	$("#input_height:input").val();
}

var m = function() {
	$("#input_width:input").val(); // value? 
}	

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	for (var i = 1; i < n; i++) {
		$("#pixel_canvas").append("<tr> </tr>"); // For each input number, create a row.
		for (var l = 1; l < m; l++) {
			$("tr").append("<td> </td>"); // For each row, create a column (data).
		}	
	}
}

function buttonLove() { // Used to initialize the makeGrid function.
	$("form").submit(makeGrid());
}


// Select color input
//$("#colorPicker").on(function(event) {
//	return;

// Utilize Chrome's Javascript console for each function until it works.




	