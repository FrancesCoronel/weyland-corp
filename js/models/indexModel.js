/**
 * @author
 */
//Setting up Parse APPID + Javascript Key
Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

//Variables
var toggleHeight = true;
var userIsRegistering = false;

//Functions
var validateUser = function(userIsValid,queryUsers){
		
		queryUsers.find({
			  success: function(user) {
			    // Do stuff
				if(user.length > 0)
				userIsValid = false;
			  }
			});//end parse query
			
			return userIsValid;
		
	};//end - function

var userSigninFunction = function(user){
		
		user.signUp(null, {
		  success: function(user) {
		    // Hooray! Let them use the app now.
			window.location.href = "dashboard.html";
		  },
		  error: function(user, error) {
		    // Show the error message somewhere and let the user try again.
		    alert("Error: " + error.code + " " + error.message);
		  }
		});//end - userSignupBLock
	
	};

var parseLoginAuthentication = function(username,password){
		
			//Parse login verification
			Parse.User.logIn(username, password, {
			 	 success: function(user) 
				{
			       // Do stuff after successful login.
				 	window.location.href = "dashboard.html";
				
			 	},
			  	error: function(user, error) {
			    // The login failed. Check error to see why.
				alert('NOT');
		  
			}//end - error
		
	    	});//end parse login function
	
		
	};//end function
	
var renderingRegistrationFieldsAndAppendingThemToDOM = function(){
	
			$('#passwordInputField').after('<input type="password" value="" class=".loginBox input 					center-block" placeholder="Confirm Password" id="passwordConfirmation" />');
			
			$('#passwordConfirmation').hide().show('slow');
			
			$('#passwordConfirmation').after('<input type="email" value="" class=".loginBox input 					center-block" placeholder="Enter Email" id="emailConfirmationOne" />');
			
			$('#emailConfirmationOne').hide().show('slow');
			
			$('#emailConfirmationOne').after('<input type="email" value="" class=".loginBox input 					center-block" placeholder="Confirm Email" id="emailConfirmationTwo" />');
			
			$('#emailConfirmationTwo').hide().show('slow');
	
	};

var toggleBooleanValuesForRegistrationButtonPress = function(){
		//Toggling Boolean values
		toggleHeight = false;
		userIsRegistering = true;
};

var resettingRegistrationValuesForButtonPress = function(){
		//Toggling Boolean values
		toggleHeight = true;
		userIsRegistering = false;
		
	
	};

var clearOutInputs = function(){
		//removing content from the inital input fields
		$('#usernameInputField').val('');
		$('#passwordInputField').val('');
	
	};
	
var resettingUsernameAndRegistrationButtonText = function(){
		//Change the button Names
		$("#registrationButtonPress").text('New User');
		$("#loginButtonPress").text('Login');
	
	};
	
var hideFormFields = function(){
		//Hiding password, and email fields
		$('#passwordConfirmation').hide('fast');
		$('#emailConfirmationOne').hide('fast');
		$('#emailConfirmationTwo').hide('fast');
	
	};

var aniamteFormFieldsFrom = function(){
	
		$(".loginBox").animate({height: '410px'});
		//$(".inputContainer").animate({height: '100px'});
	//	$(".registrationButton").animate({ 
      // 	 top: "-=50px",
      //	}, '400');
	};
	
var toggleButtonNames = function(){
		//Change the button Names
		$("#registrationButtonPress").text('Login');
		$("#loginButtonPress").text('New User');
	};

var aniamteFormFieldsTo = function(){
		//Animating the form fields To their destination
		$(".loginBox").animate({height: '570px'});
			//$(".inputContainer").animate({height: '190px'});
			//$(".registrationButton").animate({ 
	       	// top: "+=50px",
	      	//}, '400');
	};

var togglingUsernameAndRegisterationButtonText = function(){
			//Change the button Names
			$("#registrationButtonPress").text('Cancel');
			$("#loginButtonPress").text('Register');
			
};	
var removeFormFields = function(){
			$('#passwordConfirmation').remove();
			$('#emailConfirmationOne').remove();
			$('#emailConfirmationTwo').remove();
	
	};





