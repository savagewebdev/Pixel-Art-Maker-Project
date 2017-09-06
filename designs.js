// Select size input
$("form").submit(function( event ) {
	if ( $( "input:first" ).val() === "correct" ) {
		$( "span" ).text( "Validated..." ).show();
		return;
	}
 
	$( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
	event.preventDefault();
}


// Select color input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
