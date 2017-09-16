// Select size input
var height = function() { // The height variable defined as a function
	$("#input_height:input").val(); // which selects an input box with the ID of #input_height and produces an input value via method
	return; // and returns it for later use.
}

var width = function() { // Same as above, but defining width.
	$("#input_width:input").val();
	return;
}

var colour = function() {
	$("#colorPicker:input").val();
}

function makeGrid(width, height) { // The function in charge of creating the grid using the above axis vars as parameters. The axis variables help to determine the extent of the "for" loops.
	$("tr").remove(); // Clear the grid.
	for (var i = 0; i < height; i++) { // Create as many rows as requested.
		$("#pixel_canvas").append("<tr> </tr>"); // Add to the table rows.
	}
	for (var l = 0; l < width; l++) { // For as many columns as are requested...
			$("tr").append("<td> </td>"); // append the rows with columns <td>.
	}	
	return;
}

$("form").submit(function(event) { // The function enacted via jquery when the submit button is pressed.
	event.preventDefault(); // First, prevent the form from being submitted.
	let width = $("#input_width").val(); // 
	let height = $("#input_height").val(); // Locally, the variables are defined as the DOM's input values...
	makeGrid(width, height); // and are used as arguments in calling the makeGrid function.
});
// Thus the "submit" event & jquery function simply draws upon the makeGrid function for its actions, which in turn uses the height and width inputs for two reasons: As variables determining the limits of the "for" loop, and as local parameters in the submit event. They cannot be shared due to the separate scope of the two functions, but they do both draw upon the same source--the input data itself. 

// Create a jquery event listener that senses each cell as a touchable object that will be changed to the given colour once pressed.






	