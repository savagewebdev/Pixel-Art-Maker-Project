// Select size input
let n = function() {
	$("input:first").val();
}
// value? () === "correct" ) { var n and m equal the parameters for makeGrid?
let m = function() {
	$("input:second").val(); // value? 
}	

function buttonLove() {
	$("form#sizePicker").submit(makeGrid());
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	for (var i = 1; i < n; i++) {
		$("#pixel_canvas").append("<tr> </tr>"); // For each input number, create a row.
		for (var l = 1; l < m; l++) {
			$("tr").append("<td> </td>");
		}	
	}
}



// Select color input
//$("#colorPicker").on(function(event) {
//	return;




	