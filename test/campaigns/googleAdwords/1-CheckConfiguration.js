scenario('Check the voucher code of "Google adwords" module', client => {
    scenario('Login in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should login successfully in BO', () => client.signInBO());
    }, "gadwords-client");
    scenario('Check the voucher code in "Google Adwords" module configuration page', client => {
        test('should go to "Installed modules" page', () => client.goToModulesPage());
        test('should search "gadwords" module', () => client.searchModule('gadwords'));
        test('should check "gadwords" module', () => client.getInstalledModulesNumber());
        test('should check "Configure" button', () => client.getModuleButtonName());
        test('should click on "Configure" button', () => client.clickConfigureModuleButton('gadwords'));
        test('should check "Google AdWords" promotional code', () => client.checkGoogleAdwordsPromotionalCode());
        test('should click on "Start your campaign now with your promotional code" button', () => client.clickOnStartButton());
        test('should check "Google Adwords" voucher', () => client.checkGoogleAdwordsVoucher());
        test('should click on "Get Started" button', () => client.clickOnGetStartedButton());
        test('should fill "Welcome to Google Adwords" form', () => client.fillWelcomeForm('prestotests@gmail.com'));
        test('should fill "SignIn" form', () => client.fillSignInForm('presto_tests'));
    }, "gadwords-client");
    scenario('Logout from the Back Office', client => {
        test('should logout successfully from the Back Office', () => client.signOutBO());
    }, "gadwords-client");
}, "gadwords-client", true);