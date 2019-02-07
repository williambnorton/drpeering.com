//											drp.js
//
//	shared DrPeering browser javascript 
//     pulled into each chapter in the book
//
var version=" v0.50";	//continuous updates
var currentPage="";		//where we direct our test browsers
let timerId = setInterval(() => check(), 6000); //start the scheduler

//
//	check - ask the server for the page we should look at
//
function check() {
	  $(".marker").text("v1 ... checking...");
	  $(".title").text("Internet Peering Playbook "+version);
	  
	console.log( "checking in with server" ); 
	// Assign handlers immediately after making the request,
	// and remember the jqxhr object for this request
	var jqxhr = $.get( "http://drpeering.com/check.php", function(marker) {
	  //$(".marker").text("Prod "+marker );
	  if (currentPage == "" || currentPage == marker) {
	  		$(".marker").text("Prod "+marker );
	  		currentPage=marker;
		    //console.log( "Same Page" ); 
	  } else {
		    console.log( "NEW CODE in 3..2..1.." );  
	  		$(".marker").text("CMD= "+marker );
	  		//currentPage=marker;
		    clearInterval(timerId);
	  		setTimeout(function() { 				location.reload(true); },3000);
	  }
	})
	  .done(function() {
	    console.log( "second success" );
	  })
	  .fail(function() {
	    //console.log( "fail" );
		  $(".marker").text("disconnected Mode");
		  //clearInterval(timerId);
	  })
	  .always(function() {
	    //console.log( "finished" );
	    	//$('.version').text(version);
	  });
	
	 
	// Set another completion function for the request above
	jqxhr.always(function() {
	  //alert( "second finished" );

	});

}