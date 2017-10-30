scenario(`Check saving configuration in back office`, () => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "pixel-facebook/pixel-client");
    scenario(`Configure pixel facebook in back office`, client => {
        test('should access to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('pspixel'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should click on configuration', () => client.clickOnConfigurationSubtab());
        test('should enter the pixel ID', () => client.editPixelId("239543053231383"));
        test('should click on save button', () => client.clickOnSaveButton());
        test('should close green notification', () => client.closeGreenNotification());
    }, "pixel-facebook/pixel-client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "pixel-facebook/pixel-client");
}, "pixel-facebook/pixel-client", true);