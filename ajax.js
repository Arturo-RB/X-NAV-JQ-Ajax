$(document).ready(function() {
    var request = $.ajax({type: "GET", url: "file.txt"})
    request.done(function( text ) {
		$("#click").html(text);
    });
    
    $("#change").click(function(event) {
        var click_button = $.ajax({type: "GET", url: "file2.txt"})
        click_button.done(function( data ) {          
            $("#click").html(data);
        });
        request.done(function( data ) {          
            $("#change").html(data);
        });
    });

});


