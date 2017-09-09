// Select size input
function n() { // Vertical y axis.
	$("input:first").val();
}

function m() { // Horizontal x axis.
	$("input:second").val(); // value? 
}	

// When size is submitted by the user, call makeGrid()
function makeGrid() {
	let y = m(); 
	for (const i = 1; i < y; i++) {
		$("#pixel_canvas").append("<tr> </tr>"); // For each input number, create a row.
		let x = n();
		for (const l = 1; l < x; l++) {
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




	