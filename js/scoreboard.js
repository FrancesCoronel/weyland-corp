/**
 * @author
 */
$( document ).ready(function() {

	//Registering using parse authentication
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	//users
	var usersArray = [];

	var currentUser = Parse.User.current();
	currentUser.fetch({
	  success: function(currentUser) {
	    // The object was refreshed successfully.
	    //Querying the users in the Parse database
		var query = new Parse.Query(Parse.User);
		query.limit(10);
		query.descending("trueRank");
		query.find({
		  success: function(results) 
		  {
		  	currentUser = Parse.User.current();
		  	//Iterating over the top users in the database
		  	for (var i = 0; i < results.length; i++) { 
		      var object = results[i];
		      var current = $('#scoreboardList').append('<li class=\"row\"><a class=\"scoreboardButton col-sm-1\" href=\"#\"></a><p class=\"col-sm-offset-1\">'+object.get('username')+'</p></li>');
		    }

		  }//success

		});	
	    
	  },
	  error: function(currentUser, error) {
	    // The object was not refreshed successfully.
	    // error is a Parse.Error with an error code and message.
	  }
	});

	
   
});
