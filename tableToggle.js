(function($) {
	$(document).ready(function(){
		var table = $('.firstTable tbody tr td table tbody tr:nth-of-type(n+4)');
		var mobileCardSpace = $('.firstTable tbody tr td table tbody tr:nth-child(3)');
		var showMore = $('#showMore');
		table.hide();
		showMore.click(function() {
  			table.toggle();
  			mobileCardSpace.toggleClass( "mobileCardSpace" );
		});
		showMore.toggle(function() {
        	$(this).html("Show Less <i class='fa fa-chevron-up'></i>");
        }, function() {
        	$(this).html("Show More <i class='fa fa-chevron-down'></i>");
        	location.href = "#jumpAnchor";
        })
	})
})(jQuery)
