// Grid Prototype
function makeGrid(width, height) { // Parameters are merely hypothetical at this point,
	$("tr").remove(); 								// Due to the function being newly defined.
	for (let i = 0; i < height; i++) {
		$("#pixel_canvas").append("<tr> </tr>");
	}
	for (let l = 0; l < width; l++) {
			$("tr").append("<td> </td>");
	}
	$("#pixel_canvas").on('click', 'td', function(event) {
		$(event.target).css('background-color', $("#colorPicker:input").val());
	});
	return;
}
//Grid Constructor
$("form").submit(function(event) {
	event.preventDefault();
	let width = $("#input_width:input").val();
	let height = $("#input_height:input").val();
	makeGrid(width, height);
});
