/* global expect */

var loginPage = require('../Pages/loginPage.js');
var data =  require('../Data/environmentData');
var homePage = require('../Pages/homePage.js');

var currentStepName  = describe('Login Form', function() {
	beforeAll(function(){
		console.log("Running test case : " + currentStepName.description);
		//navigates to url before test case
		loginPage.launchURL(data.url);
	});
	
	it('should have login button', function(){
		loginPage.checkLoginElementExists(function(status){
			expect(status).toBe(true);
		});   	    
	});
	
	it('should have USN txtBox', function(){
		loginPage.checkLoginElementExists(function(status){
			expect(status).toBe(true);
		});   	    
	});
	
	it('should have password txtBox', function(){
		loginPage.checkPasswordExists(function(status){
			expect(status).toBe(true);
		});   	    
	});
	
	it('should have Login button', function(){
		loginPage.checkPasswordExists(function(status){
			expect(status).toBe(true);
		});   	    
	});
	
	it('should be able for user to login and home page should be displayed', function(){
		var homePage = loginPage.loginfunction(data.userName, data.password, data.usnDescription);
		homePage.headerCheck(function(status){
			expect(status).toBe(true);
		});
	});
	
	it('should be able for the user to log out', function(){
		var loginPage = homePage.logoutApplication();	
		loginPage.checkLoginElementExists(function(status){
			expect(status).toBe(true);
		});
	});
	
	  
	afterAll(function() {
	    
	});
});