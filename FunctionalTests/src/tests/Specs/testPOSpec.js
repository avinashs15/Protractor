var loginPage = require('../Pages/loginPage.js');
var data =  require('../Data/environmentData');

describe('Protractor test App with page object model', function() {
	beforeAll(function(){
		//navigates to url before test case
		loginPage.launchURL(data.url);
	});
	
	it('should have a title and the user should be able to login using the credentials', function() {
		loginPage.verifyPageTitle("Protractor practice website - Registration", function(status){
			expect(status).toBe(true);
		});
		var homePage = loginPage.loginfunction(data.userName, data.password, data.usnDescription);
		homePage.headerCheck(function(status){
			expect(status).toBe(true);
		});		
		homePage.logoutApplication();	
		loginPage.checkLoginElementExists(function(status){
			expect(status).toBe(true);
		});
	});
	
	afterAll(function() {
	    
	});
});