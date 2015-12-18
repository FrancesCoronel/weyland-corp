//Setting up Parse APPID + Javascript Key
Parse.initialize("l3iYSEoRauE5ctDyD6CwojGCGIyJHxeCmgEMhnjZ", "prAydsNAqfn6j4BYudc9iJhvavc0C5IcMUyOC6Yj");

//Variables
var toggleHeight = true;
var userIsRegistering = false;

//Functions
var validateUser = function(userIsValid, queryUsers) {

    queryUsers.find({
        success: function(user) {
            // Do stuff
            if (user.length > 0)
                userIsValid = false;
        }
    }); //end parse query

    return userIsValid;

}; //end - function

var userSigninFunction = function(user) {

    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
            window.location.href = "dashboard.html";
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    }); //end - userSignupBLock

};

var parseLoginAuthentication = function(username, password) {

    //Parse login verification
    Parse.User.logIn(username, password, {
        success: function(user) {
            // Do stuff after successful login.
            window.location.href = "dashboard.html";

        },
        error: function(user, error) {
                // The login failed. Check error to see why.
                alert('NOT');

            } //end - error

    }); //end parse login function


}; //end function

var renderingRegistrationFieldsAndAppendingThemToDOM = function() {

    $('#passwordInputField').after('<input type="password" value="" class="form-control .loginBox input 					center-block" placeholder="confirm password" id="passwordConfirmation" />');

    $('#passwordConfirmation').hide().show('slow');

    $('#passwordConfirmation').after('<input type="email" value="" class="form-control .loginBox input 					center-block" placeholder="enter email" id="emailConfirmationOne" />');

    $('#emailConfirmationOne').hide().show('slow');

    $('#emailConfirmationOne').after('<input type="email" value="" class="form-control .loginBox input 					center-block" placeholder="confirm email" id="emailConfirmationTwo" />');

    $('#emailConfirmationTwo').hide().show('slow');

};

var toggleBooleanValuesForRegistrationButtonPress = function() {
    //Toggling Boolean values
    toggleHeight = false;
    userIsRegistering = true;
};

var resettingRegistrationValuesForButtonPress = function() {
    //Toggling Boolean values
    toggleHeight = true;
    userIsRegistering = false;


};

var clearOutInputs = function() {
    //removing content from the inital input fields
    $('#usernameInputField').val('');
    $('#passwordInputField').val('');

};

var resettingUsernameAndRegistrationButtonText = function() {
    //Change the button Names
    $("#registrationButtonPress").text('New User');
    $("#loginButtonPress").text('Login');

};

var hideFormFields = function() {
    //Hiding password, and email fields
    $('#passwordConfirmation').hide('fast');
    $('#emailConfirmationOne').hide('fast');
    $('#emailConfirmationTwo').hide('fast');

};

var aniamteFormFieldsFrom = function() {

    $(".loginBox").animate({
        height: '410px'
    });
    //$(".inputContainer").animate({height: '100px'});
    //	$(".registrationButton").animate({
    // 	 top: "-=50px",
    //	}, '400');
};

var toggleButtonNames = function() {
    //Change the button Names
    $("#registrationButtonPress").text('Login');
    $("#loginButtonPress").text('New User');
};

var aniamteFormFieldsTo = function() {
    //Animating the form fields To their destination
    $(".loginBox").animate({
        height: '570px'
    });
    //$(".inputContainer").animate({height: '190px'});
    //$(".registrationButton").animate({
    // top: "+=50px",
    //}, '400');
};

var togglingUsernameAndRegisterationButtonText = function() {
    //Change the button Names
    $("#registrationButtonPress").text('Cancel');
    $("#loginButtonPress").text('Register');

};
var removeFormFields = function() {
    $('#passwordConfirmation').remove();
    $('#emailConfirmationOne').remove();
    $('#emailConfirmationTwo').remove();

};


//Document ready function
$(document).ready(function() {

    var userObjects = Parse.Object.extend("User");
    var query = new Parse.Query(userObjects);
    var rank = '';

    query.find({
        success: function(results) {
            // comments now contains the comments for myPost
            var num = results.length;
            rank = num.toString();

        }
    });


    //Listening for LOGIN button to be pressed
    $("#loginButtonPress").click(function() {

        //Check the form fields in the dom to determine if the user is registering
        if (userIsRegistering) {
            //Resetting user registration variables
            var userIsValid = true;
            var passwordIsValid = false;
            var emailIsValid = false;

            //alert("Registering new user");
            //Getting the user's registration information
            var usernameRegistration = $('#usernameInputField').val();
            var passwordRegistration = $('#passwordInputField').val();
            var passwordConfirmation = $('#passwordConfirmation').val();
            var emailRegistration = $('#emailConfirmationOne').val();
            var emailConfirmationRegistration = $('#emailConfirmationTwo').val();

            //Make sure that the username does not exist
            var queryUsers = new Parse.Query(Parse.User);
            var GameScore = Parse.Object.extend("GameScore");


            //Querying whether or not the user exists
            queryUsers.equalTo("username", usernameRegistration);
            //Determining if the user is valid
            userIsValid = validateUser(userIsValid, queryUsers);

            if (userIsValid === true) {
                //Confirm that both passwords are the same
                if (passwordRegistration === passwordConfirmation)
                    passwordIsValid = true;
                else
                    alert('Please make sure that both of your passwords are identical');

                //Confirm that both email addresses are the same
                if (emailRegistration === emailConfirmationRegistration)
                    emailIsValid = true;
                else
                    alert('Please make sure that both of your email addresses are identical');


                //Make sure the last 4 characters of the string ends in ".com"
                if (passwordIsValid && emailIsValid) {
                    var profilePicture = Parse.Object.extend("ProfilePictures");
                    var query = new Parse.Query(profilePicture);
                    query.first({
                        success: function(object) {
                            // Successfully retrieved the object.
                            var profileImage = object.get('largeImage');
                            var thumbnail = object.get('smallImage');

                            //Creating a new user object
                            var user = new Parse.User();
                            user.set("username", usernameRegistration);
                            user.set("password", passwordConfirmation);
                            user.set("email", emailRegistration);
                            user.set('timetrialSkill', 20);
                            user.set('memorySkill', 20);
                            user.set('recognitionSkill', 20);
                            user.set('definitionsSkill', 20);
                            user.set('aboveandbeyondSkill', 20);
                            user.set('criticalthinkingSkill', 20);
                            user.set('level', '1');
                            user.set('progress', '90');
                            user.set('levelResistance', 1);
                            user.set('rank', rank);
                            user.set('trueRank', 1);
                            user.set('profilePicture', profileImage);
                            user.set('thumbnail', thumbnail);

                            //Signing up the new user
                            userSigninFunction(user);

                        },
                        error: function(error) {
                            alert("Error: " + error.code + " " + error.message);
                        }
                    });


                } //end - conditional


            } //end - if conditional

        } //end - if conditional

        if (userIsRegistering === false) //Source code for when the user is logging in
        {
            //Obtaining the username and password from the user
            username = $('#usernameInputField').val();
            password = $('#passwordInputField').val();

            //Authenticating the user's credientials
            parseLoginAuthentication(username, password);
        } //end conditional

    }); //end - loginButtonPress event

    //Listening for LOGIN button to be pressed
    $("#registrationButtonPress").click(function() {


        if (toggleHeight) {
            //Hiding password, and email fields
            removeFormFields();
            //Change the button Names
            togglingUsernameAndRegisterationButtonText();

            //Animating the loginbox and form fields
            aniamteFormFieldsTo();

            //Rendering registration field, and appending it within the loginbox
            renderingRegistrationFieldsAndAppendingThemToDOM();

            //Toggling the boolean values
            toggleBooleanValuesForRegistrationButtonPress();


        } //end - if statement
        else {

            //Animating form fields FROM
            aniamteFormFieldsFrom();

            //Hiding the form fields
            hideFormFields();

            //Clear out inputs
            clearOutInputs();

            //Resseting the boolean values for button press
            resettingRegistrationValuesForButtonPress();

            //Toggling login and registration button text
            resettingUsernameAndRegistrationButtonText();


        } //end - else statement


    }); //end - registrationButtonFunction






});
