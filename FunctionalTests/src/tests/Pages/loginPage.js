var loginPage = function() {
	this.txtUserName = element(by.model('Auth.user.name'));
	this.txtBoxUSNDescription = element(by.xpath('//input[@id="formly_1_input_username_0"]'));
	this.txtPassword = element(by.id('password'));
	this.btnLogin = element(by.xpath('//button[@class= "btn btn-danger"]'));
			
	this.loginfunction = function(strUsername,strPassword, strUSNdescription) {
		this.txtUserName.sendKeys(strUsername);
		this.txtPassword.sendKeys(strPassword);
		this.txtBoxUSNDescription.sendKeys(strUSNdescription);
		this.btnLogin.click();
		return require('../Pages/homePage.js');		
	};
	
	this.verifyPageTitle = function(txtTitle, callback) {
		browser.getTitle().then(function(txtRuntime){
			callback (txtRuntime === txtTitle);
		});
	};
	
	this.checkLoginElementExists = function(callback){
		this.txtUserName.isPresent().then(function(status){
			callback(status);
		});
	};
	
	this.launchURL = function (url){
		browser.get(url);
	};
};
module.exports = new loginPage();