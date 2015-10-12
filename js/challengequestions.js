/**
 * @author
 */
$( document ).ready(function() {
	
	//Reinitilizng Parse
	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

	var pagePosition = 1;
	var questionArray = new Array();
	var userSelections = new Array();
	var numericalPosition = 0;
	var currentUser = Parse.User.current();

	 var challengeQuestions = Parse.Object.extend("Questions");
	 var query = new Parse.Query(challengeQuestions);
	 query.ascending("order");
	 query.equalTo("challengeId", currentUser.get('currentChallengeActive'));
	 query.find({
 	 success: function(results) {
    // comments now contains the comments for myPost
    for (var i = 0; i < results.length; i++) 
    { 
    	//pushing empty elements into the array
    	userSelections.push = ('empty');
        questionArray.push(results[i]);
        numericalPosition = pagePosition;
     // Load the inital questionsPrompt
     if(i === 0){
     		 $('#questionInstructions').text(results[i].get('questionPrompt'));
		      //Append the html
		      if(results[i].get('htmlFormat'))
		      $('.questionContainer').append(results[i].get('htmlFormat'));
		  	  else//Load the inital question
		      $('.questionText').text(results[i].get('question'));
				      //Load answer choice one
		      $('.questionChoiceOne').text(results[i].get('answerChoiceOne'));
		      //Load answer choice two
		      $('.questionChoiceTwo').text(results[i].get('answerChoiceTwo'));
		      //Load answer choice three
		      $('.questionChoiceThree').text(results[i].get('answerChoiceThree'));
		      //Load answer choice four
		      $('.questionChoiceFour').text(results[i].get('answerChoiceFour'));
     } 
		      
    }
    
  }
});
	

	$(".buttonNext").click(function(e){
	    
	    if(pagePosition < questionArray.length)
	    {

	    	$('.questionContainer').hide().show("slide", { direction: "left" }, 200);
	    	$('.buttonNext').css({position: 'static'});
	    	//Incrementing the page count
	    	pagePosition++;
	    	//numericalPosition = questionArray.length - pagePosition;
	  
	    	//Resetting the opacity
	    	if(!userSelections[pagePosition-1])
	    	{
	    		jQuery('#choice1').css('opacity', '1.0');
				jQuery('#choice2').css('opacity', '1.0');
				jQuery('#choice3').css('opacity', '1.0');
				jQuery('#choice4').css('opacity', '1.0');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "one")
	    	{
	    		jQuery('#choice1').css('opacity', '1.0');
				jQuery('#choice2').css('opacity', '0.5');
				jQuery('#choice3').css('opacity', '0.5');
				jQuery('#choice4').css('opacity', '0.5');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "two")
	    	{
	    		jQuery('#choice1').css('opacity', '0.5');
				jQuery('#choice2').css('opacity', '1.0');
				jQuery('#choice3').css('opacity', '0.5');
				jQuery('#choice4').css('opacity', '0.5');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "three")
	    	{
	    		jQuery('#choice1').css('opacity', '0.5');
				jQuery('#choice2').css('opacity', '0.5');
				jQuery('#choice3').css('opacity', '1.0');
				jQuery('#choice4').css('opacity', '0.5');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "four")
	    	{
	    		jQuery('#choice1').css('opacity', '0.5');
				jQuery('#choice2').css('opacity', '0.5');
				jQuery('#choice3').css('opacity', '0.5');
				jQuery('#choice4').css('opacity', '1.0');
	    	}

	    	$('#questionInstructions').text(questionArray[pagePosition-1].get('questionPrompt'));
		      //Append the html
		      if(questionArray[pagePosition-1].get('htmlFormat'))
		      $('.questionContainer').append(questionArray[pagePosition-1].get('htmlFormat'));
		  	  else//Load the inital question
		      $('.questionText').text(questionArray[pagePosition-1].get('question'));
				      //Load answer choice one
		      $('.questionChoiceOne').text(questionArray[pagePosition-1].get('answerChoiceOne'));
		      //Load answer choice two
		      $('.questionChoiceTwo').text(questionArray[pagePosition-1].get('answerChoiceTwo'));
		      //Load answer choice three
		      $('.questionChoiceThree').text(questionArray[pagePosition-1].get('answerChoiceThree'));
		      //Load answer choice four
		      $('.questionChoiceFour').text(questionArray[pagePosition-1].get('answerChoiceFour'));
	    }
	   
	});
	$(".buttonPrevious").click(function(e){

		if(pagePosition > 1)
	    {
	    	$('.questionContainer').hide().show("slide", { direction: "right" }, 200);
	    	$('.buttonNext').css({position: 'absolute'});
	    	//Incrementing the page count
	    	pagePosition--;
	    	if(!userSelections[pagePosition-1])
	    	{
	    		jQuery('#choice1').css('opacity', '1.0');
				jQuery('#choice2').css('opacity', '1.0');
				jQuery('#choice3').css('opacity', '1.0');
				jQuery('#choice4').css('opacity', '1.0');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "one")
	    	{
	    		jQuery('#choice1').css('opacity', '1.0');
				jQuery('#choice2').css('opacity', '0.5');
				jQuery('#choice3').css('opacity', '0.5');
				jQuery('#choice4').css('opacity', '0.5');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "two")
	    	{
	    		jQuery('#choice1').css('opacity', '0.5');
				jQuery('#choice2').css('opacity', '1.0');
				jQuery('#choice3').css('opacity', '0.5');
				jQuery('#choice4').css('opacity', '0.5');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "three")
	    	{
	    		jQuery('#choice1').css('opacity', '0.5');
				jQuery('#choice2').css('opacity', '0.5');
				jQuery('#choice3').css('opacity', '1.0');
				jQuery('#choice4').css('opacity', '0.5');
	    	}
	    	//Resetting the opacity
	    	if(userSelections[pagePosition-1] === "four")
	    	{
	    		jQuery('#choice1').css('opacity', '0.5');
				jQuery('#choice2').css('opacity', '0.5');
				jQuery('#choice3').css('opacity', '0.5');
				jQuery('#choice4').css('opacity', '1.0');
	    	}
	    	

	    	$('#questionInstructions').text(questionArray[pagePosition-1].get('questionPrompt'));
		      //Append the html
		      if(questionArray[pagePosition-1].get('htmlFormat'))
		      $('.questionContainer').append(questionArray[pagePosition-1].get('htmlFormat'));
		  	  else//Load the inital question
		      $('.questionText').text(questionArray[pagePosition-1].get('question'));
				      //Load answer choice one
		      $('.questionChoiceOne').text(questionArray[pagePosition-1].get('answerChoiceOne'));
		      //Load answer choice two
		      $('.questionChoiceTwo').text(questionArray[pagePosition-1].get('answerChoiceTwo'));
		      //Load answer choice three
		      $('.questionChoiceThree').text(questionArray[pagePosition-1].get('answerChoiceThree'));
		      //Load answer choice four
		      $('.questionChoiceFour').text(questionArray[pagePosition-1].get('answerChoiceFour'));
	    }

	});

	$(".button_1").click(function(e){

		userSelections[pagePosition-1] = 'one';
		

		jQuery('#choice1').css('opacity', '1.0');
		jQuery('#choice2').css('opacity', '0.5');
		jQuery('#choice3').css('opacity', '0.5');
		jQuery('#choice4').css('opacity', '0.5');
		
	    
	});
	$(".button_2").click(function(e){
	
		userSelections[pagePosition-1] = 'two';
		

		jQuery('#choice1').css('opacity', '0.5');
		jQuery('#choice2').css('opacity', '1.0');
		jQuery('#choice3').css('opacity', '0.5');
		jQuery('#choice4').css('opacity', '0.5');

	    
	});
	$(".button_3").click(function(e){
		
		userSelections[pagePosition-1] = 'three';
		

		jQuery('#choice1').css('opacity', '0.5');
		jQuery('#choice2').css('opacity', '0.5');
		jQuery('#choice3').css('opacity', '1.0');
		jQuery('#choice4').css('opacity', '0.5');

	    
	});
	$(".button_4").click(function(e){

		userSelections[pagePosition-1] = 'four';
		

		jQuery('#choice1').css('opacity', '0.5');
		jQuery('#choice2').css('opacity', '0.5');
		jQuery('#choice3').css('opacity', '0.5');
		jQuery('#choice4').css('opacity', '1.0');
	    
	});

	$(".buttonSubmit").click(function(e){


		var answerKeyArray = [];

		//Adding the answer key into an array
		for(var i = 0; i < questionArray.length; i++)
		{
			answerKeyArray.push(questionArray[i].get('solution'));

		}//end for loop			

		//Creating an object that stores the users answer choices, and answer key
		var challengeScore = {
			userSelection:userSelections,
    		answerKey:answerKeyArray
		};
		
		//Saving everything to Parse
		currentUser.set('challengeScore',challengeScore);
		currentUser.save(null, {
		  success: function(currentUser) {
		    // Execute any logic that should take place after the object is saved.
		    
		    //Navigating to a new page
		   	location.href = "challengeevaluation.html";
		  },
		  error: function(currentUser, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    alert('Failed to create new object, with error code: ' + error.message);
		  }
		});

		

	    
	});







	




   
















});
