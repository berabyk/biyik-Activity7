$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {

		// $("#image_list a").fadeIn(function() {
			
			var imageURL = $(this).attr("href");
			$("#image").fadeOut(1000,"linear",function(){
				$("#image").attr("src", imageURL).fadeIn(1000);
			});
			
			var caption = $(this).attr("title");
			$("#caption").fadeOut(1000,"linear",function(){
				$("#caption").text(caption).fadeIn(1000);
			});
			
			// cancel the default action of the link
			evt.preventDefault();
			
		// })

		//fade in
		// $("image").fadeIn(3000);
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready