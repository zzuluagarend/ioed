var intro = {
    // introduction title
    "title": "Welcome!",
    // introduction text
    "text": "Thank you for participating. In this study, you will evaluate your own understanding on some topics. The experiment will take around 20 minutes and needs your full willingness.",
    // introduction's slide proceeding button text
    "buttonText": "Begin experiment",
    // render function renders the view
    render: function() {
        
        viewTemplate = $('#intro-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        });

    },
    // for how many trials should this view be repeated?
    trials: 1
}

var instructions = {
     // instruction's title
    "title": "Introduction",
    // instruction's text
    "text": "In this experiment you will rate how well you feel you understand how different things work.  I’ll ask you to rate your understanding on a seven-point scale.  Before you get started, this introduction will try to explain what the scores on the scale are supposed to reflect.",
    // instuction's slide proceeding button text
    "buttonText": "Go to instructions",
    render: function() {

        viewTemplate = $("#instructions-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}


var trainingItemIns = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "Some things are well-understood: almost everyone knows how and why they work. That is, they can tell you about all the parts (material or abstract) and how they work together.",
    // instuction's slide proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $("#trainingItemIns-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}

var trainingItemLv7 = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "One such example might be the crossbow. Most people know how it works, e.g., that it has a stiff, flexible piece of metal as a bow with a wire or strong line; that the bow is permanently mounted on a block of wood or metal; that the wire is pulled back by something that gives a mechanical advantage, either a lever, or small block and tackle, or by a crank wound around a spool that pulls a wire attached to the bow wire.",
	"text1": " The bow wire is then held back by a pin that is connected to a trigger, and an arrow is set in front of it. Often the pin is forked so the arrow can sit directly in the wire. The pin is directly connected to the trigger so that when you pull on the trigger, it causes it to pivot around a point such that the end that is the pin moves downwards and releases the bow wire. When the pin releases the string, the bow very quickly un-flexes, rapidly imparting all the energy stored in the flexed bow to the arrow.",
    // instuction's slide proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $("#trainingItemLv7-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
			text1: this.text1,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}

var trainingItemLv4 = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "Some people know less detail.  For example, someone might know only that the crossbow is a fixed bow and arrow arrangement; that it gets more power than a normal bow and arrow because it allows you to pull the string back extra hard and then trap it there rather than hold it, and that it is then released by a trigger. If this person were to draw a diagram of a crossbow it might look like this.",
    // instuction's slide proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $("#trainingItemLv4-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}

var trainingItemLv1 = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "Some people might know even less. For example, someone might really only know what a crossbow looks like and what it does... shoots arrows.",
    // instuction's slide proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $("#trainingItemLv1-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}

var instructionSurvey = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "What I tried to demonstrate with the crossbow example is that you can think of knowledge about how things work as arranged along a continuum, which we can represent as a seven-point scale.",
	"text1": "<1	2	3	4	5	6	7>",
    // instuction proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $("#instructionSurvey-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
			text1: this.text1,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}

var instructionSurvey1 = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "For the crossbow, many people are probably close to a 7, such hypothetical person would provide the first crossbow drescription.  Others are close to a 4, such as the hypothetical person who would provide the second crossbow drescription, and some, such as a person who would provide the third crossbow drescription, are close to a 1.",
    // instuction proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $("#instructionSurvey-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,			
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}

var instructionSurvey2 = {
     // instruction's title
    "title": "Instructions",
    // instruction's text
    "text": "Finally, it’s very important to give your first impression.  It has be found that taking too long really hurts people’s answers. Please go through the list below as quickly as possible and click the number from 1-7 on the scale next to each phenomenon, telling how well you feel you understand each item.",
    // instuction proceeding button text
    "buttonText": "Go to the list",
    render: function() {

        viewTemplate = $("#instructionSurvey-view").html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,			
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        }); 

    },
    trials: 1
}


var survey = {
	trials: 1,
	
    "title": "Test",
    render: function (CT) {
		var questions = _.shuffle(exp.trial_info.practice_trials[CT].questions);

		// fill variables in view-template
         var viewTemplate = $('#survey-view').html();
         $('#main').html(Mustache.render(viewTemplate, {
			 title: this.title,
			 reminder: exp.trial_info.practice_trials[CT].reminder,
			 q1 : questions[0],
			 q2 : questions[1],
			 q3 : questions[2],
			 q4 : questions[3],
			 q5 : questions[4],
			 q6 : questions[5],
			 q7 : questions[6],
			 q8 : questions[7],
			 q9 : questions[8],
			 q10 : questions[9],
			 q11 : questions[10],
			 q12 : questions[11],
			 
         }));
		// var q1;
		// var q2;
		// var q3;
		// var q4;
		// var q5;
		// var q6;
		// var q7;
		// var q8;
		// var q9;
		// var q10;
		// var q11;
		// var q12;
		
		$('input:radio').click(function() {
		q1 = questions[0]
		answer1 = $('input:radio[name=q1]:checked').val();
		q2 = questions[1]
		answer2 = $('input:radio[name=q2]:checked').val();
		q3 = questions[2]
		answer3 = $('input:radio[name=q3]:checked').val();
		q4 = questions[3]
		answer4 = $('input:radio[name=q4]:checked').val();
		q5 = questions[4]
		answer5 = $('input:radio[name=q5]:checked').val();
		q6 = questions[5]
		answer6 = $('input:radio[name=q6]:checked').val();
		q7 = questions[6]
		answer7 = $('input:radio[name=q7]:checked').val();
		q8 = questions[7]
		answer8 = $('input:radio[name=q8]:checked').val();
		q9 = questions[8]
		answer9 = $('input:radio[name=q9]:checked').val();
		q10 = questions[9]
		answer10 = $('input:radio[name=q10]:checked').val();
		q11 = questions[10]
		answer11 = $('input:radio[name=q11]:checked').val();
		q12 = questions[11]
		answer12 = $('input:radio[name=q12]:checked').val();
				
	});
	
	$('#next').on('click', function(e) {
            trial_data = {
                trial_type: "pre_rating",
                q1: q1,
				answer1: answer1,
				q2: q2,
				answer2: answer2,
				q3: q3,
				answer3: answer3,
				q4: q4,
				answer4: answer4,
				q5: q5,
				answer5: answer5,
				q6: q6,
				answer6: answer6,
				q7: q7,
				answer7: answer7,
				q8: q8,
				answer8: answer8,
				q9: q9,
				answer9: answer9,
				q10: q10,
				answer10: answer10,
				q11: q11,
				answer11: answer11,
				q12: q12,
				answer12: answer12,			
                       
            };
			
			exp.trial_data.push(trial_data);
            exp.findNextView();
        });
    }
}

var beginExp = {
    "title": "Write Explanations",
    // instruction's text
    "text": "Now, I'd like to probe your knowledge in a little more detail, on some of the items.",
	"text1": "For each of the following, please describe all the details you know about the phenomena, going from the first step to the last, and providing the causal connection between the steps.  That is, your explanation should state precisely how each step causes the next step in one continuous chain from start to finish. In other words, for each phenomenon, try to tell as complete a story as you can, with no gaps.",
	"text2": "If you find that your story does have gaps (that is, you are not sure how the steps are connected) please write the word “GAP” in your description at that point, and then continue.",
	"text3": "When you are done, you will re-rate your knowledge of the phenomenon on a 1-7 scale.",
    // instuction's slide proceeding button text
    "buttonText": "Next",
    render: function() {

        viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text,
			text1: this.text1,
			text2: this.text2,
			text3: this.text3,
			button: this.buttonText            
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        });

    },
    trials: 1

}


var mainHD = {
	
	trials : 1,
	"title": "Explanations",	
    render : function(CT) {
		
		var question_HD = _.shuffle(exp.trial_info.main_trials[CT].questionHD);
		
		// fill variables in view-template
        var viewTemplate = $('#mainHD-view').html();
        $('#main').html(Mustache.render(viewTemplate, {            
			title: this.title,
			exp1 : question_HD[0],
						            
        }));
		
		// event listener for buttons; when an input is selected, the response
		// and additional information are stored in exp.trial_info
        $('#next').on('click', function() {
            exp.global_data.item_HD = question_HD[0];
			exp.global_data.explanation_high = $('#explanationHD').val().trim();
			exp.global_data.RT1 = Date.now() - startingTime; // measure RT before anything else
            // trial_data = {
				// trial_type: "explanation_high",
				// exp1: question_HD[0],
				// explanation: $('#explanationHD').val().trim(),
                // RT: RT
            // };
            // exp.trial_data.push(trial_data);
            exp.findNextView();
        });
		
        // record trial starting time
        startingTime = Date.now();
		
    }
};

var postHD = {
	trials: 1,	
    "title": "Post-rating",	
    render: function (CT) {
		var question = exp.global_data.item_HD;
		
		// fill variables in view-template
        var viewTemplate = $('#postHD-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
			 title : this.title,
			 reminder : exp.trial_info.main_trials[CT].reminder,
			 q1 : question,
		}));
		 
				
		$('input:radio').click(function() {
		q1 = question
		answer1 = $('input:radio[name=qhd1]:checked').val();
	});
	
	$('#next').on('click', function(e) {
			exp.global_data.post_high = answer1;
            // trial_data = {
                // trial_type: "post_high",
                // q1: q1,
				// answer1: answer1,
				// };
			
			// exp.trial_data.push(trial_data);
            exp.findNextView();
        });
    }
}

var mainLD = {
	
	trials : 1,
	"title": "Explanations",	
    render : function(CT) {
		
		var question_LD = _.shuffle(exp.trial_info.main_trials[CT].questionLD);
		
		// fill variables in view-template
        var viewTemplate = $('#mainLD-view').html();
        $('#main').html(Mustache.render(viewTemplate, {            
			title: this.title,
			exp1 : question_LD[0],
						            
        }));
		
		// var exp1;
		
		// event listener for buttons; when an input is selected, the response
		// and additional information are stored in exp.trial_info
        $('#next').on('click', function() {
            exp.global_data.item_LD = question_LD[0];
			exp.global_data.explanation_low = $('#explanationLD').val().trim();
			exp.global_data.RT2 = Date.now() - startingTime; // measure RT before anything else
            // trial_data = {
				// trial_type: "explanation_low",
				// exp12: question_LD[0],
				// explanation: $('#explanationLD').val().trim(),
            // };
            // exp.trial_data.push(trial_data);
            exp.findNextView();
        });
		
        // record trial starting time
        startingTime = Date.now();
		
    }
};


var postLD = {
	trials: 1,	
    "title": "Post-rating",	
    render: function (CT) {
		var question = exp.global_data.item_LD;
		
		// fill variables in view-template
         var viewTemplate = $('#postLD-view').html();
         $('#main').html(Mustache.render(viewTemplate, {
			 title : this.title,
			 reminder : exp.trial_info.main_trials[CT].reminder,
			 q1 : question,
		}));
		
				
		$('input:radio').click(function() {
		q1 = question
		answer1 = $('input:radio[name=qld1]:checked').val();
	});
	
	$('#next').on('click', function(e) {
			exp.global_data.post_low = answer1;
            // trial_data = {
                // trial_type: "post_low",
                // q1: q1,
				// answer1: answer1,
				// };
			
			// exp.trial_data.push(trial_data);
            exp.findNextView();
        });
    }
}

var postTest = {
    "title": "Additional Info",
    "text": "Answering the following questions is optional, but will help me understand your answers.",
    "buttonText": "Continue",
    render : function() {

        viewTemplate = $('#post-test-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            buttonText: this.buttonText
        }));

        $('#next').on('click', function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            exp.global_data.age = $('#age').val();
            exp.global_data.gender = $('#gender').val();
            exp.global_data.education = $('#education').val();
            exp.global_data.languages = $('#languages').val();
            exp.global_data.comments = $('#comments').val().trim();
            exp.global_data.endTime = Date.now();
            exp.global_data.timeSpent = (exp.global_data.endTime - exp.global_data.startTime) / 60000;

            // moves to the next view
            exp.findNextView();
        })

    },
    trials: 1
};

var thanks = {
    "message": "Thank you for taking part in this experiment!",
    render: function() {

        viewTemplate = $('#thanks-view').html();

        // what is seen on the screen depends on the used deploy method
		// normally, you do not need to modify this
        if ((config_deploy.is_MTurk) || (config_deploy.deployMethod === 'directLink')) {
            // updates the fields in the hidden form with info for the MTurk's server
            $('#main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message,
            }));
        } else if (config_deploy.deployMethod === 'Prolific') {
            var prolificURL = 'https://prolific.ac/submissions/complete?cc=' + config_deploy.prolificCode;

            $('main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message,
                extraMessage: "Please press the button below<br />" + '<a href=' + prolificURL +  ' class="prolific-url">Finished!</a>'
            }));
        } else if (config_deploy.deployMethod === 'debug') {
            $('main').html(Mustache.render(viewTemplate, {}));
        } else {
            console.log('no such config_deploy.deployMethod');
        }

        exp.submit();

    },
    trials: 1
}