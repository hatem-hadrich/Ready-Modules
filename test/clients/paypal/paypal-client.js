var {getClient} = require('../../common.webdriverio');
var {selector} = require('../../globals.webdriverio.js');

class Paypal {
    constructor() {
        this.client = getClient();
    }

    signInBO() {
        return this.client.signinBO();
    }

    signInFO() {
        return this.client.signinFO();
    }

    signOutBO() {
        return this.client.signoutBO();
    }

    accessToFrontOffice() {
        return this.client
            .url(`https://${URL}/`)
            .waitForExist(selector.FO.AccessPage.logo_home_page, 90000)
            .pause(3000)
    }

    close() {
        return this.client.end();
    };

    open() {
        return this.client.init().windowHandleSize({width: 1280, height: 1024});
    }

    goToModule() {
        return this.client
            .click(selector.BO.ModulesPage.modules_subtab)
            .waitForExist(selector.BO.ModulesPage.page_loaded, 60000)
            .pause(5000);
    }

    searchModule(name) {
        return this.client
            .waitForExist(selector.BO.ModulesPage.search_input, 60000)
            .setValue(selector.BO.ModulesPage.search_input, name)
            .click(selector.BO.ModulesPage.search_button)
            .pause(5000);
    }

    clickOnConfigureButton() {
        return this.client
            .click(selector.BO.ModulesPage.actions_module_dropdown)
            .click(selector.BO.ModulesPage.configure_module_button)
            .pause(5000);
    }

    clickOnSettingsTab() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.settings_tab, 90000)
            .click(selector.BO.ModulePagePaypal.settings_tab)
            .pause(5000);
    }

    enableSandbox() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.enable_sandbox_toggle, 90000)
            .click(selector.BO.ModulePagePaypal.enable_sandbox_toggle)
            .pause(5000);
    }

    clickOnSaveButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.save_button, 90000)
            .click(selector.BO.ModulePagePaypal.save_button)
            .pause(5000);
    }

    clickOnProductTab() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.product_tab, 90000)
            .click(selector.BO.ModulePagePaypal.product_tab)
            .pause(5000);
    }

    clickOnProductTab2() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.product_subtab, 90000)
            .click(selector.BO.ModulePagePaypal.product_subtab)
            .pause(5000);
    }

    clickOnActivateButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.first_box_activate_button, 90000)
            .click(selector.BO.ModulePagePaypal.first_box_activate_button)
            .pause(5000);
    }

    clickOnSecondActivateButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.second_box_activate_button, 90000)
            .click(selector.BO.ModulePagePaypal.second_box_activate_button)
            .pause(5000);
    }

    editEmail(email) {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.email_input, 90000)
            .setValue(selector.BO.ModulePagePaypal.email_input, email)
            .pause(5000);
    }

    clickOnNextButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.next_button, 90000)
            .click(selector.BO.ModulePagePaypal.next_button)
            .pause(5000);
    }

    fillFormSignIn(login, password) {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.login_input, 60000)
            .waitForExist(selector.BO.ModulePagePaypal.password_input, 60000)
            .setValue(selector.BO.ModulePagePaypal.login_input, login)
            .setValue(selector.BO.ModulePagePaypal.password_input, password)
            .click(selector.BO.ModulePagePaypal.connect_button)
            .pause(5000);
    }

    clickOnAgreeButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.agree_button, 60000)
            .click(selector.BO.ModulePagePaypal.agree_button)
            .pause(5000);
    }

    clickOnBackToShopButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePaypal.back_to_shop_button, 60000)
            .click(selector.BO.ModulePagePaypal.back_to_shop_button)
            .pause(5000);
    }
    
    goToProductDetails() {
        return this.client
            .waitForExist(selector.FO.AccessPage.logo_home_page, 90000)
            .click(selector.FO.AccessPage.logo_home_page)
            .waitForExist(selector.FO.AccessPage.first_product_home_page, 90000)
            .then(() => this.client.getText(selector.FO.AccessPage.first_product_home_page_name))
            .then((text) => {
                global.my_name = text[1].split('...')[0]
            })

            .waitForExist(selector.FO.AccessPage.first_product_home_page, 90000)
            .click(selector.FO.AccessPage.first_product_home_page)

            .waitForExist(selector.FO.ProductPage.product_image, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.product_name_details))
            .then((text) => {
                var my_name_check = text;
                my_name_check.pop(-1).toLowerCase().should.containEql(my_name.toLowerCase())
            })

            .waitForExist(selector.FO.ProductPage.product_price_details, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.product_price_details))
            .then((text) => {
                global.my_price = text
            })

            .waitForExist(selector.FO.ProductPage.product_quantity_details, 90000)
            .then(() => this.client.getValue(selector.FO.ProductPage.product_quantity_details))
            .then((text) => {
                global.my_quantity = text
            })

            .waitForExist(selector.FO.ProductPage.add_to_cart_button, 90000)
            .click(selector.FO.ProductPage.add_to_cart_button)

            .waitForExist(selector.FO.ProductPage.layer_cart, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.layer_cart_name_details))
            .then((text) => {
                var my_cart_name_check = text;
                expect(my_cart_name_check.toLowerCase()).to.have.string(my_name.toLowerCase());
            })

            .waitForExist(selector.FO.ProductPage.layer_cart_price_details, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.layer_cart_price_details))
            .then((text) => {
                var my_cart_price_check = text;
                expect(my_cart_price_check).to.eql(my_price)
            })

            .waitForExist(selector.FO.ProductPage.layer_cart_quantity_details, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.layer_cart_quantity_details))
            .then((text) => {
                var my_cart_quantity_check = text.split(': ');
                expect(my_cart_quantity_check[1]).to.eql(my_quantity);
            })
            .pause(5000);
    }

    clickOnAddToCartButton() {
        return this.client
            .waitForExist(selector.FO.ProductPage.layer_cart_command_button, 90000)
            .click(selector.FO.ProductPage.layer_cart_command_button)
            .pause(5000);
    }

    validateNameProduct() {
        return this.client
            .waitForExist(selector.FO.ProductPage.command_checkout_button, 90000)
            .moveToObject(selector.FO.ProductPage.command_product_name)
            .then(() => this.client.getText(selector.FO.ProductPage.command_product_name))
            .then((text) => {
                var command_my_name = text;
                expect(command_my_name.toLowerCase()).to.have.string(my_name.toLowerCase());
            })
            .pause(5000);
    }

    validatePriceProduct() {
        return this.client
            .waitForExist(selector.FO.ProductPage.command_product_price, 90000)
            .then(() => this.client.getText(selector.FO.ProductPage.command_product_price))
            .then((text) => {
                var command_price_check = text;
                expect(command_price_check).to.have.string(my_price);
            })
            .pause(5000);
    }

    clickOnCheckoutButton() {
        return this.client
            .waitForExist(selector.FO.ProductPage.command_checkout_button, 90000)
            .click(selector.FO.ProductPage.command_checkout_button)
            .pause(5000);
    }

    clickOnContinueButton() {
        return this.client
            .waitForExist(selector.FO.CartSummary.checkout_step2_continue_button, 90000)
            .click(selector.FO.CartSummary.checkout_step2_continue_button)
            .pause(5000);
    }

    selectDelevryStep3() {
        return this.client
            .waitForExist(selector.FO.Commande.checkout_step3_continue_button, 90000)
            .click(selector.FO.Commande.checkout_step3_continue_button)
            .pause(5000);
    }

    selectShippingMethodStep4() {
        return this.client
            .waitForExist(selector.FO.Commande.payment_with_paypal_radio, 90000)
            .click(selector.FO.Commande.payment_with_paypal_radio)

            .waitForExist(selector.FO.ProductPage.checkout_step4_cgv, 90000)
            .click(selector.FO.ProductPage.checkout_step4_cgv)

            .moveToObject(selector.FO.Commande.footer, 90000)
            .waitForExist(selector.FO.ProductPage.checkout_step4_order, 90000)
            .click(selector.FO.ProductPage.checkout_step4_order)
            .pause(5000);
    }

    selectPaymentMethodStep4() {
        return this.client
            .waitForExist(selector.FO.Commande.payment_with_credit_card_radio, 90000)
            .click(selector.FO.Commande.payment_with_credit_card_radio)

            .waitForExist(selector.FO.ProductPage.checkout_step4_cgv, 90000)
            .click(selector.FO.ProductPage.checkout_step4_cgv)

            .moveToObject(selector.FO.Commande.footer, 90000)
            .waitForExist(selector.FO.ProductPage.checkout_step4_order, 90000)
            .click(selector.FO.ProductPage.checkout_step4_order)
            .pause(5000);
    }

    waitForPaypalPaymentPage() {
        return this.client
            .waitForExist('//*[@id="header"]/div/span', 90000)
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }
}

module.exports = Paypal;

