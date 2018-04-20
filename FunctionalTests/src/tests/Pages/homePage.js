var homePage = function() {
	this.txtHeader = element(by.xpath('//h1[text()="Home"]'));
	this.linkLogout = element(by.xpath('//a[@href="#/login"]'));
	
	this.headerCheck = function(callback){		
		this.txtHeader.isPresent().then(function(status){
			callback(status);
		});
	};	
	
	
	this.logoutApplication = function(){
		this.linkLogout.click();
		return require('../Pages/loginPage.js');
	};
};
module.exports = new homePage();