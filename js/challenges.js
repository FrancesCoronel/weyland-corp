/**
 * @author
 */
$( document ).ready(function() {

	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	var user = Parse.User.current();
	
	//Detecting page click on challenges
	$("#criticalthinkingbutton").click(function(){
       	//Do stuff when clicked
		user.set('currentChallenge','Critical Thinking');
		user.save(null, {
		  success: function(user) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + user.id);
		  }
		});
		user.fetch();


});
	
	//Detecting page click on challenges
	$("#timetrialbutton").click(function(){
       	//Do stuff when clicked
		user.set('currentChallenge','Time Trial');
		user.save(null, {
		  success: function(user) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + user.id);
		  }
		});
		user.fetch();
	});

	//Detecting page click on challenges
	$("#recognitionbutton").click(function(){
       	//Do stuff when clicked
		user.set('currentChallenge','Recognition');
		user.save(null, {
		  success: function(user) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + user.id);
		  }
		});

		user.fetch();
	});

	//Detecting page click on challenges
	$("#definitionsbutton").click(function(){
       	//Do stuff when clicked
		user.set('currentChallenge','Definition');
		user.save(null, {
		  success: function(user) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + user.id);
		  }
		});
		user.fetch();
    });

    //Detecting page click on challenges
	$("#aboveandbeyondbutton").click(function(){
       	//Do stuff when clicked
		user.set('currentChallenge','Above and Beyond');
		user.save(null, {
		  success: function(user) {
		    // Execute any logic that should take place after the object is saved.
		    alert('New object created with objectId: ' + user.id);
		  }
		});
		user.fetch();
    });
	
   
});
