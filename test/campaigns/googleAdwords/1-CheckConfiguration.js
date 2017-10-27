// @TODO: fix connecting with google account in FO when we buy product(error 502 bad gatway)
scenario('Test google adwords', client => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.fillSignInForm());
    }, "googleAdwords/gadwords-client");
    scenario('Check the configuration in Back Office', client => {
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('gadwords'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should check google adWords promotional code', () => client.checkGoogleAdwordsPromotionalCode());
        test('should click on start your campaign now with your promotional code button', () => client.clickOnStartButton());
        test('should check google adwords voucher is shown', () => client.checkGoogleAdwordsVoucher());
    }, "googleAdwords/gadwords-client");
    scenario('Log out from the Back Office', client => {
        test('should log out successfully from the Back Office', () => client.signOutBO());
    }, "googleAdwords/gadwords-client");
}, "googleAdwords/gadwords-client", true);