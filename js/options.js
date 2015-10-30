/**
 * @author
 */
$( document ).ready(function() {
	
	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");
	var currentUser = Parse.User.current();

	//setting the inital image to the users default image
	$("#profileImage").attr("src",currentUser.get("profilePicture").url());

	var pagePosition = 0;
	var profileImageArray = [];

	var currentUser = Parse.User.current();
	currentUser.fetch({
	  success: function(currentUser) {
	    // The object was refreshed successfully.
	    var profilePicture = Parse.Object.extend("ProfilePictures");
	 var query = new Parse.Query(profilePicture);
	 query.find({
 	 success: function(results) {
    // comments now contains the comments for myPost
       	for(var i = 0; i < results.length; i++)
    	{
    		profileImageArray.push(results[i]);	
    		
    	}
    	
	  }
	});
	
	    
	  },
	  error: function(currentUser, error) {
	    // The object was not refreshed successfully.
	    // error is a Parse.Error with an error code and message.
	  }
	});
	

	 

	$(".buttonNext").click(function(e){

	    	pagePosition++;
	    	pagePosition = pagePosition%profileImageArray.length;
	    	$("#profileImage").attr("src",profileImageArray[pagePosition].get('largeImage').url());
	    	currentUser.set('profilePicture',profileImageArray[pagePosition].get('largeImage'));
	    	currentUser.set('thumbnail',profileImageArray[pagePosition].get('smallImage'));
	    	currentUser.save();
	});
	$(".buttonPrevious").click(function(e){

			pagePosition = (pagePosition+profileImageArray.length-1) % profileImageArray.length;
			$("#profileImage").attr("src",profileImageArray[pagePosition].get('largeImage').url());
			currentUser.set('profilePicture',profileImageArray[pagePosition].get('largeImage'));
			currentUser.set('thumbnail',profileImageArray[pagePosition].get('smallImage'));

			currentUser.save();

	});

		$(".button_1").click(function(e){

			var username = $('#usernameInputField').val();
			currentUser.set('username',username);
			currentUser.save();

		});
		$(".button_2").click(function(e){
		
			var email = $('#emailInputField').val();
			currentUser.set('email',email);
			currentUser.save();

		});
		$(".button_3").click(function(e){
			
			var password = $('#passwordInputField').val();
		    currentUser.set('password',password);
		    currentUser.save();
		});
		$(".button_4").click(function(e){
			
			Parse.User.logOut();
			location.href = "index.html";
		});
		
		





});
