// Select size input

var width = function() {
	$("#input_height:input").val();
	return;
}


// When size is submitted by the user, call makeGrid()
function makeGrid(width, height) {
	
	for (var i = 0; i < width; i++) {
		$("#pixel_canvas").append("<tr> </tr>"); // For each input number, create a row.
		for (var l = 0; l < height; l++) {
			$("tr").append("<td> </td>"); // For each row, create a column (data).
		}	
	}
}


$("form").submit(function(event) {
	event.preventDefault();
	//console.log("Test");
	let width = $("#input_width").val(); 
	let height = $("#input_height").val();
	makeGrid(width, height);
	
});



// Select color input
//$("#colorPicker").on(function(event) {
//	return;

// Utilize Chrome's Javascript console for each function until it works.




	