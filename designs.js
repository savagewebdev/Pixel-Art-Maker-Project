// Select size input
function n() { // Vertical y axis.
	$("input:first").val();
}

function m() { // Horizontal x axis.
	$("input:second").val(); // value? 
}	

// When size is submitted by the user, call makeGrid()
function makeGrid(n(), m) {
	for (const i = 1; i < n; i++) {
		$("#pixel_canvas").append("<tr> </tr>"); // For each input number, create a row.
		for (const l = 1; l < m(); l++) {
			$("tr").append("<td> </td>"); // For each row, create a column (data).
		}	
	}
}

function buttonLove() { // Used to initialize the makeGrid function.
	$("form").submit(makeGrid());
}

buttonLove();
// Select color input
//$("#colorPicker").on(function(event) {
//	return;




	