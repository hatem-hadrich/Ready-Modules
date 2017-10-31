scenario('Buy product using paypal credit card account', client => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "paypal/paypal-client");
    scenario('Configure paypal in Back Office', client => {
        test('should acces to module page', () => client.goToModule());
        test('should search the module', () => client.searchModule('paypal'));
        test('should click on configure button', () => client.clickOnConfigureButton());
        test('should go to product page', () => client.clickOnProductTab2());
        test('should click on activate button', () => client.clickOnSecondActivateButton());
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
        test('should select the shipping method step-4', () => client.selectPaymentMethodStep4());
        test('should paypal payment page is shown', () => client.waitForPaypalPaymentPage());
    }, "paypal/paypal-client", true);
}, "paypal/paypal-client", true);