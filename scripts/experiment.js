// customize the experiment by specifying a view order and a trial structure
exp.customize = function() {

	// record current date and time in global_data
    this.global_data.startDate = Date();
    this.global_data.startTime = Date.now();
	
    // specify view order
    this.views_seq = [intro,
                     // instructions,
					 // trainingItemIns,
					 // trainingItemLv7,
					 // trainingItemLv4,
					 // trainingItemLv1,
					 // instructionSurvey,
					 // instructionSurvey1,
					 // instructionSurvey2,
                     survey,
                     // beginExp,
                     mainHD,
					 postHD,
					 mainLD,
					 postLD,
                     postTest,
                     thanks
					 ];
					
	// prepare information about trials (procedure)
	// randomize main trial order, but keep practice trial order fixed
    this.trial_info.main_trials = _.shuffle(main_trials)
	this.trial_info.practice_trials = practice_trials
	

};



