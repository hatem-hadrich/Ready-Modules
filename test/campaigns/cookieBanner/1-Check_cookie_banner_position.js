scenario('Check the cookie banner in front office', client => {
    scenario('Test case 1 : Check the cookie banner in the bottom of front office', () => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should check the cookie banner on the bottom', () => client.checkPositionBanner('bottom'));
    }, "cookie-banner/cookieBanner-client", true);
    scenario('Test case 2 : Check the cookie banner in the top of front office', client => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, "cookie-banner/cookieBanner-client");
        scenario('Configure the cookie banner in the top', client => {
            test('should access to module page', () => client.goToModulePage());
            test('should search the module page', () => client.searchModule("pscookiebanner"));
            test('should go to the module configuration page', () => client.clickOnConfigureButton());
            test('should switch the position of banner in the top', () => client.positionBanner("top"));
            test('should click on save button', () => client.clickOnSaveButton());
        }, "cookie-banner/cookieBanner-client");
        scenario('Logout from Back Office', client => {
            test('should logout', () => client.signOutBO());
        }, "cookie-banner/cookieBanner-client", true);
        scenario('Check the cookie banner in the top of front office', () => {
            test('should open the browser', () => client.open());
            test('should access to front office', () => client.accessToFrontOffice());
            test('should check the cookie banner on the bottom', () => client.checkPositionBanner('fixedtop'));
        }, "cookie-banner/cookieBanner-client");
    }, "cookie-banner/cookieBanner-client", true);
    scenario('Test case 3 : Check the cookie banner in the bottom right of front office', client => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, "cookie-banner/cookieBanner-client");
        scenario('Configure the cookie banner in the bottom right', client => {
            test('should access to module page', () => client.goToModulePage());
            test('should search the module page', () => client.searchModule("pscookiebanner"));
            test('should go to the module configuration page', () => client.clickOnConfigureButton());
            test('should switch the position of the banner in bottom right', () => client.positionBanner("bottomright"));
            test('should click on save button', () => client.clickOnSaveButton());
        }, "cookie-banner/cookieBanner-client");
        scenario('Logout from Back Office', client => {
            test('should logout', () => client.signOutBO());
        }, "cookie-banner/cookieBanner-client", true);
        scenario('Check the cookie banner in the bottom right of front office', () => {
            test('should open the browser', () => client.open());
            test('should access to front office', () => client.accessToFrontOffice());
            test('should check the cookie banner in the bottom right', () => client.checkPositionBanner('bottomright'));
        }, "cookie-banner/cookieBanner-client");
    }, "cookie-banner/cookieBanner-client", true);
    scenario('Test case 4 : Check the cookie banner in the bottom left of front office', client => {
        scenario('Log in in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, "cookie-banner/cookieBanner-client");
        scenario('Configure the cookie banner in the bottom left', client => {
            test('should access to module page', () => client.goToModulePage());
            test('should search the module page', () => client.searchModule("pscookiebanner"));
            test('should go to the module configuration page', () => client.clickOnConfigureButton());
            test('should switch the position of banner in the bottom left', () => client.positionBanner("bottomleft"));
            test('should click on save button', () => client.clickOnSaveButton());
        }, "cookie-banner/cookieBanner-client");
        scenario('Logout from Back Office', client => {
            test('should logout', () => client.signOutBO());
        }, "cookie-banner/cookieBanner-client", true);
        scenario('Check the cookie banner in the top of front office', () => {
            test('should open the browser', () => client.open());
            test('should access to front office', () => client.accessToFrontOffice());
            test('should check the cookie banner in the bottom left', () => client.checkPositionBanner('bottomleft'));
        }, "cookie-banner/cookieBanner-client");
    }, "cookie-banner/cookieBanner-client", true);
}, "cookie-banner/cookieBanner-client", true);