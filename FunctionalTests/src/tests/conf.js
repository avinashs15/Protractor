var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
var path = require('path');

//Results added to a directory under test/Execution Results. Open report.html
var prettyReporter = new PrettyReporter({    
    path: path.join(__dirname, 'Execution Results'),
    screenshotOnPassed: false,
    highlightSuspectLine : true,
    title :"WBSAutomation"
});


exports.config = {
  	framework: 'jasmine',
	//seleniumAddress: 'http://localhost:4444/wd/hub', (Optional)
	specs: ['./Specs/*.js'],  // Relative path to the spec file

	//browser options
	capabilities: {
		'browserName': 'chrome',
		'time-zone': 'Amsterdam',
		'marionette': true,		
		acceptInsecureCerts : true,
		'prefs': {
			'credentials_enable_service': false
		},
		'chromeOptions': {
			'args': ['disable-infobars']
			//'args': ['disable-infobars']
		}
	},
    
    	onPrepare: function() {
		//launches the browser and maximuises it before test specs is run
		browser.driver.manage().window().maximize();		
		jasmine.getEnv().addReporter(prettyReporter);
	}
};
