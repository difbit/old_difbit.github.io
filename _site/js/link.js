$("nav").find("a").click(function(link) {
	link.preventDefault();
	var section = $(this).attr("href");
	$("html, body").animate({
		scrollTop: $(section).offset().top	
	})
});
