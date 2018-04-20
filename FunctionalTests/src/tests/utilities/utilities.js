var usernameGenerator = require('username-generator');
var generator = require('generate-password');
var random = require('random-name');
var appendjson = require('appendjson');
var fs = require("fs");
var csvWriter = require('csv-write-stream');

var utilities = function() {
	this.browserSwitchToNewTab = function() {
		browser.getAllWindowHandles().then(function (handles) {			
			browser.driver.switchTo().window(handles[1]);
		});
	};
	
	this.browserSwitchBackToOldTab = function() {
		browser.getAllWindowHandles().then(function (handles) {
			if(handles.length > 1){
				browser.driver.switchTo().window(handles[1]);
				browser.driver.close();
				browser.driver.switchTo().window(handles[0]);			
			}
		});	
	};
	
	this.addDataToCSV = function (obj){
		var writer = csvWriter({sendHeaders: false});
		writer.pipe(fs.createWriteStream('./target/userData.csv', {flags: 'a'}));
		writer.write(obj);
		writer.end();
	};

	this.addDataToJSON = function (obj){
		var file = './target/data.json';		 
		appendjson(obj, file, function(){		
		});
	};

	this.generateLastName = function () {
		return random.last();
	};
	
	this.generateFirstName = function (){
		return random.first();
	};
	
	this.generatePlace = function () {
		return random.place();
	};
	
	this.enterText = function (objControl, txtValue) {
		var self = this;
		objControl.isPresent().then(function(status){
			if(status){
				objControl.sendKeys(txtValue);
			}
		});
	};

	this.generateUserName = function(){
		return usernameGenerator.generateUsername();
	};
	
	this.generatePassword = function (pwdLength) {
		var password = generator.generate({
			length: pwdLength,
			numbers: true,
			symbols : true,
			uppercase: true
		});
		return password;
	};
	
	this.getRandomString = function randomString(length, chars) {
		var mask = '';
		if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
		if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		if (chars.indexOf('#') > -1) mask += '0123456789';
		if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
		var result = '';
		for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
		return result;
	};

	this.getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	this.getPhoneNumber = function(){
		return Math.floor(Math.random() * (7777777770 - 9999999999 + 1)) + 7777777770;
	};
	
	this.getDateToday = function() {
		return new Date().getDate();
	};
	
	this.getMonthToday = function () {
		return new Date().getMonth() + 1;
	};
	
	this.getYearToday = function () {		
		return new Date().getFullYear();
	};
	
	this.addDays = function(days) {
		var dat = new Date();
		dat.setDate(dat.getDate() + days);
		return dat;
	};
	
	this.getDatefunction = function (date) {
		return new Date(date).getDate();
	};
	
	this.getMonthfunction = function (date) {
		return new Date(date).getMonth() +1 ;
	};
	
	this.getYearfunction = function (date) {
		return new Date(date).getFullYear();
	};
};
module.exports = new utilities();
