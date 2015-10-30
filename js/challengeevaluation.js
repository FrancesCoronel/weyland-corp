/**
 * @author
 Developer: Blake McMillian
 */


$( document ).ready(function() {

	Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");
   
	//Setting up the parse user field
	var currentUser = Parse.User.current();

	//Refreshing the User Instance
	currentUser.fetch({
	  success: function(currentUser) {
		    // The object was refreshed successfully.
		    //Calculating the user's score for this particular challenge
			var answerKey = currentUser.get('challengeScore').answerKey;
			var userSelection = currentUser.get('challengeScore').userSelection;
			var numberCorrect = 0;
			var totalQuestions = answerKey.length;
			var totalScore = 0;
			var userRank = 1;
			var increment = true;

			for(var i = 0; i < answerKey.length; i++){

				if(answerKey[i] === userSelection[i])
					numberCorrect++;
			}

			totalScore = numberCorrect/totalQuestions;
			
			//Calculating the current skill level
			var currentChallenge = currentUser.get('currentChallengeType');
			var currentSkill = 0;
			var userProgress = parseInt(currentUser.get('progress'));
			var userLevel = parseInt(currentUser.get('level'));
			var levelResistance = currentUser.get('levelResistance');
			var trueRank = 0;
			var currentdate = new Date().getTime();
			currentUser.set('timeSinceLastChallenge',currentdate);



			if(currentChallenge === 'Critical Thinking')
			{
				currentSkill = currentUser.get('criticalthinkingSkill');
				challengeDifficulty = currentUser.get('currentChallengeDifficulty');

				if(challengeDifficulty === 'easy')
				{
					currentSkill += totalScore*1;
					userProgress += (totalScore*5)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
						
				}
					
				else if(challengeDifficulty === 'medium'){
					currentSkill += totalScore*2.5;
					userProgress += (totalScore*10)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}
					
				else if(challengeDifficulty === 'hard'){
					currentSkill += totalScore*5;
					userProgress += (totalScore*50)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}

				
				currentUser.set('levelResistance',levelResistance);
				currentUser.set('progress',userProgress.toString());
				currentUser.set('level', userLevel.toString());	
				currentUser.set('criticalthinkingSkill',currentSkill);
				trueRank = (userLevel+9)*((currentUser.get('criticalthinkingSkill')+currentUser.get('timetrialSkill')+currentUser.get('recognitionSkill')+currentUser.get('definitionsSkill')+currentUser.get('aboveandbeyondSkill'))/500);
				currentUser.set('trueRank',trueRank);
				currentUser.save();
			}
			else if(currentChallenge === 'Time Trials')
			{
				currentSkill = currentUser.get('timetrialSkill');
				challengeDifficulty = currentUser.get('currentChallengeDifficulty');

				if(challengeDifficulty === 'easy')
				{
					currentSkill += totalScore*1;
					userProgress += (totalScore*5)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
						
				}
					
				else if(challengeDifficulty === 'medium'){
					currentSkill += totalScore*2.5;
					userProgress += (totalScore*10)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}
					
				else if(challengeDifficulty === 'hard'){
					currentSkill += totalScore*5;
					userProgress += (totalScore*50)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}

				
				currentUser.set('levelResistance',levelResistance);
				currentUser.set('progress',userProgress.toString());
				currentUser.set('level', userLevel.toString());	
				currentUser.set('criticalthinkingSkill',currentSkill);
				trueRank = (userLevel+9)*((currentUser.get('criticalthinkingSkill')+currentUser.get('timetrialSkill')+currentUser.get('recognitionSkill')+currentUser.get('definitionsSkill')+currentUser.get('aboveandbeyondSkill'))/500);
				currentUser.set('trueRank',trueRank);
				currentUser.save();
			}
			else if(currentChallenge === 'Recognition')
			{
				currentSkill = currentUser.get('recognitionSkill');
				challengeDifficulty = currentUser.get('currentChallengeDifficulty');

				if(challengeDifficulty === 'easy')
				{
					currentSkill += totalScore*1;
					userProgress += (totalScore*5)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
						
				}
					
				else if(challengeDifficulty === 'medium'){
					currentSkill += totalScore*2.5;
					userProgress += (totalScore*10)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}
					
				else if(challengeDifficulty === 'hard'){
					currentSkill += totalScore*5;
					userProgress += (totalScore*50)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}

				
				currentUser.set('levelResistance',levelResistance);
				currentUser.set('progress',userProgress.toString());
				currentUser.set('level', userLevel.toString());	
				currentUser.set('criticalthinkingSkill',currentSkill);
				trueRank = (userLevel+9)*((currentUser.get('criticalthinkingSkill')+currentUser.get('timetrialSkill')+currentUser.get('recognitionSkill')+currentUser.get('definitionsSkill')+currentUser.get('aboveandbeyondSkill'))/500);
				currentUser.set('trueRank',trueRank);
				currentUser.save();
			}
			else if(currentChallenge === 'Definitions')
			{
				currentSkill = currentUser.get('definitionsSkill');
				challengeDifficulty = currentUser.get('currentChallengeDifficulty');

				if(challengeDifficulty === 'easy')
				{
					currentSkill += totalScore*1;
					userProgress += (totalScore*5)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
						
				}
					
				else if(challengeDifficulty === 'medium'){
					currentSkill += totalScore*2.5;
					userProgress += (totalScore*10)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}
					
				else if(challengeDifficulty === 'hard'){
					currentSkill += totalScore*5;
					userProgress += (totalScore*50)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}

				
				currentUser.set('levelResistance',levelResistance);
				currentUser.set('progress',userProgress.toString());
				currentUser.set('level', userLevel.toString());	
				currentUser.set('criticalthinkingSkill',currentSkill);
				trueRank = (userLevel+9)*((currentUser.get('criticalthinkingSkill')+currentUser.get('timetrialSkill')+currentUser.get('recognitionSkill')+currentUser.get('definitionsSkill')+currentUser.get('aboveandbeyondSkill'))/500);
				currentUser.set('trueRank',trueRank);
				currentUser.save();
			}
			else if(currentChallenge === 'Above and Beyond')
			{
				currentSkill = currentUser.get('aboveandbeyondSkill');
				challengeDifficulty = currentUser.get('currentChallengeDifficulty');

				if(challengeDifficulty === 'easy')
				{
					currentSkill += totalScore*1;
					userProgress += (totalScore*5)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
						
				}
					
				else if(challengeDifficulty === 'medium'){
					currentSkill += totalScore*2.5;
					userProgress += (totalScore*10)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}
					
				else if(challengeDifficulty === 'hard'){
					currentSkill += totalScore*5;
					userProgress += (totalScore*50)*levelResistance;

					if(currentSkill > 100)
						currentSkill = 100;

					if(userProgress > 100)
					{
						userProgress = 0;
						userLevel += 1;
						if(levelResistance > 0.06)
							levelResistance -= 0.02;
					}
				}

				
				currentUser.set('levelResistance',levelResistance);
				currentUser.set('progress',userProgress.toString());
				currentUser.set('level', userLevel.toString());	
				currentUser.set('criticalthinkingSkill',currentSkill);
				trueRank = (userLevel+9)*((currentUser.get('criticalthinkingSkill')+currentUser.get('timetrialSkill')+currentUser.get('recognitionSkill')+currentUser.get('definitionsSkill')+currentUser.get('aboveandbeyondSkill'))/500);
				currentUser.set('trueRank',trueRank);
				currentUser.save();
			}

			var parseUser = Parse.Object.extend("User");
			var query = new Parse.Query(parseUser);
			query.descending("trueRank");
			query.find({
			  success: function(results) {
			    // Successfully retrieved the object.
			    for(var i = 0; i < results.length; i++)
			    {
			    	if(results[i].get('username') === currentUser.get('username')){
			    		//Setting the user rank field
			    		increment = false;
						$("#rankField").text("Rank: "+userRank);

			    	}
			    		
			    	if(increment)
			    	userRank++;
			    }

			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
			});

			
			//Setting the level for the user
			if(userProgress === 0)
			$("#levelField").text("Level: "+userLevel+"(+)");
			else
				$("#levelField").text("Level: "+userLevel);



			$('#skillCircle').circleProgress({
        value: (currentSkill/100),
        size: 80,
        fill: {
            gradient: ["red", "orange"]
        }

	    }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(parseInt((progress)/(1/((currentSkill/100)))*100) + '<i>%</i>');
	});
	    $('#scoreCircle').circleProgress({
	        value: totalScore,
	        size: 80,
	        fill: {
	            gradient: ["blue", "green"]
	        }

	    }).on('circle-animation-progress', function(event, progress) {
	    $(this).find('strong').html(parseInt((progress)/(1/totalScore)*100) + '<i>%</i>');
	});
	
	  },
	  error: function(currentUser, error) {
	    // The object was not refreshed successfully.
	    // error is a Parse.Error with an error code and message.
	  }
	});
	

	
	//Getting the progress for a given user
	 var progress = currentUser.get("progress");
	//Setting the progressbar with data from parse
	$("#progressbarField").attr('data-pro-bar-percent', progress);
	//Setting the progile picture for a given user
	$('#profilePicture').attr("src",currentUser.get("profilePicture").url());

	 



	});


