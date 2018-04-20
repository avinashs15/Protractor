describe('Protractor test App without Page object model', function() {
	it('should have a title', function() {
		browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
		expect(browser.getTitle()).toEqual('Protractor practice website - Registration');
		var txtBoxUserName =  element(by.model('Auth.user.name'));
		var txtBoxUSNDescription = element(by.xpath('//input[@id="formly_1_input_username_0"]'));
		var btnLogin = element(by.xpath('//button[@class= "btn btn-danger"]'));
		var txtBoxPassword = element(by.id('password'));
		var txtHeader = element(by.xpath('//h1[text()="Home"]'));
		var linkLogout = element(by.xpath('//a[@href="#/login"]'));

		txtBoxUserName.click(); // this clicks the user name text box
		txtBoxUserName.sendKeys('angular'); // this enters string ‘userName’ in the text box
		txtBoxPassword.sendKeys('password');
		txtBoxUSNDescription.sendKeys('angular');
		btnLogin.click(); // this simulates click action on the button
		expect(txtHeader.isPresent()).toEqual(true);
		linkLogout.click();
		expect(txtBoxUserName.isPresent()).toEqual(true);
	});
});