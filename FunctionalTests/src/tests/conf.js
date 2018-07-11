var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
var path = require('path');

var prettyReporter = new PrettyReporter({
	path: path.join(__dirname, 'Execution Results'),
	screenshotOnPassed: false,
	highlightSuspectLine : true,
	title :"WBSAutomation"
});

exports.config = {
	baseUrl:"http://www.way2automation.com/angularjs-protractor/registeration/#/login", 
	framework: 'jasmine2',
	allScriptsTimeout: 720000,
	getPageTimeout: 90000,
	vheNumber : 585555,
	Inschrijfnummer : 000,	
		
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 720000,
		isVerbose: true
	},
		
	params: {
			username: 'beheerder',			
			password :'X84cp9u37J#e', //funk
			invalidPassword: 'test12345',
			messages: {
				loginFailure : 'De gebruikersnaam en het wachtwoord zijn niet bekend bij ons'
			}
	},

	capabilities: {		
		'browserName': 'chrome',
		'time-zone': 'Amsterdam',
		'marionette': true,		
		acceptInsecureCerts : true,
		'prefs': {
			'credentials_enable_service': false
		},
		'chromeOptions': {
			'args': ['disable-infobars']//, "--headless", "--window-size=1027x768"]
		}
	},
	suites: {
		specs : "specs/test*.js"		
	},

    onPrepare: function() {
		browser.driver.manage().window().maximize();		
		jasmine.getEnv().addReporter(prettyReporter);
	}
};
