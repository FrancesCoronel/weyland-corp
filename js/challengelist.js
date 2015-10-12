/**
 * @author
 */
$( document ).ready(function() {
	
	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	//Getting the name of the challenges from the previous page
	var currentUser = Parse.User.current();
	currentUser.fetch({
	  success: function(currentUser) {
	    // The object was refreshed successfully.
	    var challengeName = currentUser.get('currentChallenge');
		$('#nameofchallenge').text(challengeName);
		//Query the challenge types
		var challenges = Parse.Object.extend("Challenges");
		var query = new Parse.Query(challenges);
		query.equalTo("challengeType", challengeName);
		query.find({
			  success: function(results) {
			    // Do something with the returned Parse.Object values
			    for (var i = 0; i < results.length; i++) 
			    { 
			      var object = results[i];
			      if(object.get('difficulty') === 'easy')
			      $('.easyList').append('<li class=\"row\"><a class=\"challengesButton col-sm-1\" id=\"'+object.id+'\"</" href=\"#\"></a><p class=\"col-sm-offset-1\">'+object.get('challengeName')+'</p></li>');
			  	else if(object.get('difficulty') === 'medium')
			  	  $('.mediumList').append('<li class=\"row\"><a class=\"challengesButton col-sm-1\" id=\"'+object.id+'\"</" href=\"#\"></a><p class=\"col-sm-offset-1\">'+object.get('challengeName')+'</p></li>');
			  	else if(object.get('difficulty') === 'hard')
			  	  $('.hardList').append('<li class=\"row\"><a class=\"challengesButton col-sm-1\" id=\"'+object.id+'\"</" href=\"#\"></a><p class=\"col-sm-offset-1\">'+object.get('challengeName')+'</p></li>');

			    }
			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
	});
	  },
	  error: function(currentUser, error) {
	    // The object was not refreshed successfully.
	    // error is a Parse.Error with an error code and message.
	  }
	});

	$('ul').on('click', '.challengesButton', function() 
	{
		 var idFromClickedElement = jQuery(this).attr("id");
		 var challenge = Parse.Object.extend("Challenges");
		 var query = new Parse.Query(challenge);
		 query.equalTo("objectId", idFromClickedElement);
		 query.find({
	 	 success: function(results) {
			 	 	currentUser.set('currentChallengeDifficulty',results[0].get('difficulty'));
		  			currentUser.set('currentChallengeType',results[0].get('challengeType'));

		  			currentUser.set('currentChallengeActive',idFromClickedElement);
		  			currentUser.save(null, {
				  success: function(currentUser) {
				    // Execute any logic that should take place after the object is saved.

				    //Navigating to a new page
				   	location.href = "challengequestions.html";
				  },
				  error: function(currentUser, error) {
				    // Execute any logic that should take place if the save fails.
				    // error is a Parse.Error with an error code and message.
				    alert('Failed to create new object, with error code: ' + error.message);
				  }
				});

	      } 
			      
	    });

  		


	});



	
	




   
});
