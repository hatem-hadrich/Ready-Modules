// @TODO:fix connecting with paypal in FO (error client_id ou redirect_uri incorrect)
scenario('Buy product using paypal account', client => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "paypal/paypal-client");
    scenario('Configure paypal in Back Office', client => {
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('paypal'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should go to settings page', () => client.clickOnSettingsTab());
        test('should enable the sandbox', () => client.enableSandbox());
        test('should click on save button', () => client.clickOnSaveButton());
        test('should go to product page', () => client.clickOnProductTab());
        test('should click on activate button', () => client.clickOnActivateButton());
        test('should enter the email', () => client.editEmail("prestotests@gmail.com"));
        test('should click on next button', () => client.clickOnNextButton());
        test('should sign in', () => client.fillFormSignIn("prestotests@gmail.com", "presto_tests"));
        test('should click on agree button', () => client.clickOnAgreeButton());
        test('should click on back to shop button', () => client.clickOnBackToShopButton());
    }, "paypal/paypal-client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "paypal/paypal-client", true);
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInFO());
    }, "paypal/paypal-client");
    scenario('Buy product with paypal account in Front Office', client => {
        test('should go to product details', () => client.goToProductDetails());
        test('should click on add to cart button', () => client.clickOnAddToCartButton());
        test('should validate name of product', () => client.validateNameProduct());
        test('should validate price of product', () => client.validatePriceProduct());
        test('should click on checkout button', () => client.clickOnCheckoutButton());
        test('should select the address step-2', () => client.clickOnContinueButton());
        test('should select the delvery step-3', () => client.selectDelevryStep3());
        test('should select the shipping method step-4', () => client.selectShippingMethodStep4());
        test('should paypal payment page is shown', () => client.waitForPaypalPaymentPage());
    }, "paypal/paypal-client", true);
}, "paypal/paypal-client", true);