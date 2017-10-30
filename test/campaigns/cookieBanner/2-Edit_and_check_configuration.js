scenario('Edit and check configuration of cookie banner', client => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "cookie-banner/cookieBanner-client");
    scenario('Configure the cookie banner', client => {
        test('should access to module page', () => client.goToModulePage());
        test('should search the module page', () => client.searchModule("pscookiebanner"));
        test('should go to the module configuration page', () => client.clickOnConfigureButton());
        test('should switch the position of banner in the bottom', () => client.positionBanner());
        test('should edit the background color', () => client.editBackgroundColor("#ff0000"));
        test('should edit the text', () => client.editText());
        test('should edit the text color', () => client.editTextColor("#0000ff"));
        test('should edit the text for "Learn more"', () => client.editLearnMoreText());
        test('should select CMS page for "Learn more"', () => client.selectCmsPage());
        test('should edit the text button', () => client.editTextButton("Agree"));
        test('should edit the background button color', () => client.editBackgroundButtonColor("#8b8b8b"));
        test('should edit on mouse over color', () => client.editOnMouseOverColor("#ff4cc3"));
        test('should edit the text button color', () => client.editTextButtonColor("#ffd550"));
        test('should click on save button', () => client.clickOnSaveButton());
    }, "cookie-banner/cookieBanner-client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "cookie-banner/cookieBanner-client", true);
    scenario('Check the configuration of cookie banner in the front office', () => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should check the cookie banner', () => client.checkBanner());
        test('should click on view cookies', () => client.clickOnViewCookiesLink());
        test('should conditions of use page is shown', () => client.waitForConditionsPage());
    }, "cookie-banner/cookieBanner-client");
}, "cookie-banner/cookieBanner-client", true);