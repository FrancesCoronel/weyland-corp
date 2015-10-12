/**
 * @author
 Developer: Blake McMillian
 */


$( document ).ready(function() {

	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	//Setting up the parse user field
	var increment = true;
	var currentUser = Parse.User.current();
	var currentdate = new Date().getTime();
	var userRank = 1;
	var ONE_DAY = 1000 * 60 * 60 * 24;
	var timeSince = currentUser.get('timeSinceLastChallenge');
	var timeDifference = Math.abs(timeSince - currentdate); 
	var daysSinceLastChallenge = (timeDifference/ONE_DAY);

	//Calculating the time since the last challenge
	if(daysSinceLastChallenge > 2)
	{
		var criticalThinking = currentUser.get('criticalthinkingSkill');
		var timetrial =	currentUser.get('timetrialSkill');
		var recognition = currentUser.get('recognitionSkill');
		var definition = currentUser.get('definitionsSkill');
		var aboveandbeyond = currentUser.get('aboveandbeyondSkill');

		currentUser.set('criticalthinkingSkill',criticalThinking*0.8);
		currentUser.set('timetrialSkill',timetrial*0.8);
		currentUser.set('recognitionSkill',recognition*0.8);
		currentUser.set('definitionsSkill',definition*0.8);
		currentUser.set('aboveandbeyondSkill',aboveandbeyond*0.8);
	}
	else if(daysSinceLastChallenge > 4)
	{
		var criticalThinking = currentUser.get('criticalthinkingSkill');
		var timetrial =	currentUser.get('timetrialSkill');
		var recognition = currentUser.get('recognitionSkill');
		var definition = currentUser.get('definitionsSkill');
		var aboveandbeyond = currentUser.get('aboveandbeyondSkill');

		currentUser.set('criticalthinkingSkill',criticalThinking*0.6);
		currentUser.set('timetrialSkill',timetrial*0.6);
		currentUser.set('recognitionSkill',recognition*0.6);
		currentUser.set('definitionsSkill',definition*0.6);
		currentUser.set('aboveandbeyondSkill',aboveandbeyond*0.6);
	}
	else if(daysSinceLastChallenge > 7)
	{
		var criticalThinking = currentUser.get('criticalthinkingSkill');
		var timetrial =	currentUser.get('timetrialSkill');
		var recognition = currentUser.get('recognitionSkill');
		var definition = currentUser.get('definitionsSkill');
		var aboveandbeyond = currentUser.get('aboveandbeyondSkill');

		currentUser.set('criticalthinkingSkill',criticalThinking*0.2);
		currentUser.set('timetrialSkill',timetrial*0.2);
		currentUser.set('recognitionSkill',recognition*0.2);
		currentUser.set('definitionsSkill',definition*0.2);
		currentUser.set('aboveandbeyondSkill',aboveandbeyond*0.2);
	}
	currentUser.set('skillsMultipler',daysSinceLastChallenge);
	currentUser.save();

	//Refreshing the User Instance
	currentUser.fetch({
	  success: function(currentUser) {
	    // The object was refreshed successfully.
	    var parseUser = Parse.Object.extend("User");
			var query = new Parse.Query(parseUser);
			query.descending("trueRank");
			query.find({
			  success: function(results) {
			    // Successfully retrieved the object.

			    for(var i = 0; i < results.length; i++)
			    {
			    	
			    	if(results[i].get('username') === currentUser.get('username')){
			    		increment = false;
			    		//Setting the username field
						$("#usernameField").text(currentUser.get("username"));
						
						//Setting the user rank field
						var rank = "Rank: "+userRank.toString();
						$("#rankField").text(rank);

						//Setting the level for the user
						var level = "Level: "+currentUser.get("level");
						$("#levelField").text(level);
			    	}

			    	if(increment)
			    	{
			    		userRank++;
			    	}
			    	
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

	

	
	//Getting the html from the progress bar
	var html = $("#progressbarField").html();
	//Getting the progress for a given user
	 var progress = currentUser.get("progress");

	//Setting the progressbar with data from parse
	$("#progressbarField").attr('data-pro-bar-percent', progress);

	$('#profilePicture').attr("src",currentUser.get("profilePicture").url());
	});
