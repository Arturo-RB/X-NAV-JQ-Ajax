
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "document.txt",
		cache: false
	}).done(function(text) {
		$("#text").html(text);
	});

	$("#text2").click(function(event) {
		$.ajax({
		  type:"GET",
		  url: "doc2.txt",
		  cache: false
		})
		.done(function(text) {
			$("#text2").html(text);
		})

	});
});