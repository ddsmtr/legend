$(document).ready(function() {
  // для футера
  $( ".widget h2" ).click(
		function() {
			$(this).parent().toggleClass('active');
		}
	);
});
