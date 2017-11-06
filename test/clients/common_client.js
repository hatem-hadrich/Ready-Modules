var {getClient} = require('../common.webdriverio.js');
var {selector} = require('../globals.webdriverio.js');
var buttonText;
var nbr_module;

class CommonClient {
    constructor() {
        this.client = getClient();
    }

    //BO functions
    takeScreenshot() {
        return this.client
            .saveScreenshot(`../screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }

    signInBO() {
        return this.client.signinBO();
    }

    signOutBO() {
        return this.client.signoutBO();
    }

    open() {
        return this.client.init().windowHandleMaximize();
    }

    close() {
        return this.client.end();
    };

    goToModulesPage() {
        return this.client
            .click(selector.BO.ModulesPage.modules_subtub)
            .waitForExist(selector.BO.ModulesPage.modules_search_results, 90000)
        //.click(selector.BO.ModulesPage.installed_module_tabs)
    }

    searchModule(moduleName) {
        return this.client
            .setValue(selector.BO.ModulesPage.modules_search_input, moduleName)
            .click(selector.BO.ModulesPage.modules_search_button)
    }

    getInstalledModulesNumber() {
        return this.client.getText(selector.BO.ModulesPage.module_number_span).then(function (text) {
            nbr_module = parseInt(text[0]);
        })
    }

    getModuleButtonName() {
        if (nbr_module === 1)
            return this.client.getText(selector.BO.ModulesPage.action_module_installed_button).then(function (text) {
                buttonText = text;
            })
        else return this.client.getText(selector.BO.ModulesPage.action_module_built_button).then(function (text) {
            buttonText = text;
        })
    }

    clickConfigureModuleButton(module_tech_name) {
        if (buttonText === "CONFIGURE")
            return this.client
                .waitForExist(selector.BO.ModulesPage.configure_module_button.replace("%module_tech_name", module_tech_name), 90000)
                .click(selector.BO.ModulesPage.configure_module_button.replace("%module_tech_name", module_tech_name))
        else return this.client
            .waitForExist(selector.BO.ModulesPage.actions_module_dropdown, 90000)
            .click(selector.BO.ModulesPage.actions_module_dropdown)
            .waitForExist(selector.BO.ModulesPage.configure_module_button.replace("%module_tech_name", module_tech_name), 90000)
            .click(selector.BO.ModulesPage.configure_module_button.replace("%module_tech_name", module_tech_name))
    }

    clickEnableModuleButton(module_tech_name) {
        if (buttonText === "ENABLE")
            return this.client
                .click(selector.BO.ModulesPage.enable_module_button.replace("%module_tech_name", module_tech_name))
                .waitForExist(selector.BO.Common.close_validation_button, 90000)
        else return this.client
            .waitForExist(selector.BO.ModulesPage.actions_module_dropdown, 90000)
            .click(selector.BO.ModulesPage.actions_module_dropdown)
            .waitForExist(selector.BO.ModulesPage.enable_module_button.replace("%module_tech_name", module_tech_name), 90000)
            .click(selector.BO.ModulesPage.enable_module_button.replace("%module_tech_name", module_tech_name))
            .waitForExist(selector.BO.Common.close_validation_button, 90000)
    }

    clickDisableModuleButton(module_tech_name) {
        if (buttonText === "DISABLE")
            return this.client
                .click(selector.BO.ModulesPage.disable_module_button.replace("%module_tech_name", module_tech_name))
                .waitForVisible(selector.BO.ModulesPage.disable_module_confirm_button, 90000)
                .click(selector.BO.ModulesPage.disable_module_confirm_button)
                .waitForExist(selector.BO.Common.close_validation_button, 90000)
        else return this.client
            .waitForExist(selector.BO.ModulesPage.actions_module_dropdown, 90000)
            .click(selector.BO.ModulesPage.actions_module_dropdown)
            .waitForExist(selector.BO.ModulesPage.disable_module_button.replace("%module_tech_name", module_tech_name), 90000)
            .click(selector.BO.ModulesPage.disable_module_button.replace("%module_tech_name", module_tech_name))
            .waitForVisible(selector.BO.Common.disable_module_confirm_button, 90000)
            .click(selector.BO.ModulesPage.disable_module_confirm_button)
            .waitForExist(selector.BO.Common.close_validation_button, 90000)
    }

    goToOrdersPage() {
        return this.client
            .click(selector.BO.Common.orders_settings_button)
            .waitForExist(selector.BO.OrdersPage.add_new_order_button, 90000)
    }

    searchOrderById() {
        return this.client
            .setValue(selector.BO.OrdersPage.id_input, global.order_id)
            .click(selector.BO.OrdersPage.search_button)
    }

    goToOrderPage() {
        return this.client
            .waitForExist(selector.BO.OrdersPage.first_order_select, 9000)
            .click(selector.BO.OrdersPage.first_order_select)
    }

    changeOrderStatus(status) {
        return this.client
            .click(selector.BO.OrderPage.order_status_dropdown)
            .click(selector.BO.OrderPage.order_status_from_list.replace("%s", status))
            .click(selector.BO.OrderPage.update_status_button)
            .pause(2000)
    }

    //FO functions
    signInFO() {
        return this.client.signinFO();
    }

    signOutFO() {
        return this.client.signoutFO();
    }

    openShop() {
        return this.client
            .url('http://' + URL)
            .waitForExist(selector.FO.HomePage.logo_home_page)
    }

    selectFirstProduct() {
        return this.client
            .click(selector.FO.HomePage.logo_home_page)
            .waitForExist(selector.FO.HomePage.first_product_home_page, 90000)
            .click(selector.FO.HomePage.first_product_home_page)
            .pause(2000)
    }

    clickAddToCartButton() {
        return this.client
            .waitForExist(selector.FO.ProductPage.add_to_cart_button, 90000)
            .click(selector.FO.ProductPage.add_to_cart_button)
    }

    clickContinueShoppingButton() {
        return this.client
            .pause(2000)
            .waitForExist(selector.FO.ProductPage.continue_shopping_button, 90000)
            .click(selector.FO.ProductPage.continue_shopping_button)
    }

    goToCartPage() {
        return this.client
            .pause(2000)
            .waitForExist(selector.FO.HomePage.cart_button)
            .click(selector.FO.HomePage.cart_button)
            .waitForExist(selector.FO.CartPage.proceed_to_checkout_button, 90000)
    }

    clickProceedCheckoutButton() {
        return this.client
            .click(selector.FO.CartPage.proceed_to_checkout_button)
            .waitForExist(selector.FO.CheckoutPage.PersonalInformationSection.header, 90000)
    }

    fillPersonnelInformationForm() {
        return this.client
            .click(selector.FO.CheckoutPage.PersonalInformationSection.order_as_a_guest_button)
            .click(selector.FO.CheckoutPage.PersonalInformationSection.social_title_mr_radio_button)
            .setValue(selector.FO.CheckoutPage.PersonalInformationSection.first_name_input, 'John')
            .setValue(selector.FO.CheckoutPage.PersonalInformationSection.last_name_input, 'Doe')
            .setValue(selector.FO.CheckoutPage.PersonalInformationSection.email_guest_input, 'pub@prestashop.com')
            //.click(selector.FO.CheckoutPage.PersonalInformationSection.customer_privacy_checkbox)
            .scroll(selector.FO.CheckoutPage.PersonalInformationSection.continue_guest_personal_information_button, 90000)
            .click(selector.FO.CheckoutPage.PersonalInformationSection.continue_guest_personal_information_button)
    }

    fillAddressForm() {
        return this.client
            .setValue(selector.FO.CheckoutPage.AddressesSection.address_input, '12 Rue d\'Amsterdam')
            .setValue(selector.FO.CheckoutPage.AddressesSection.postcode_input, '75009')
            .setValue(selector.FO.CheckoutPage.AddressesSection.city_input, 'Paris')
            .click(selector.FO.CheckoutPage.AddressesSection.country_checkbox + '/option[2]')
            .scroll(selector.FO.CheckoutPage.AddressesSection.continue_addresses_button)
            .click(selector.FO.CheckoutPage.AddressesSection.continue_addresses_button)
    }

    fillShippingForm() {
        return this.client
            .scroll(selector.FO.CheckoutPage.DeliverySection.continue_shipping_button)
            .click(selector.FO.CheckoutPage.DeliverySection.continue_shipping_button)
    }

    fillPaymentForm() {
        return this.client
            .click(selector.FO.CheckoutPage.PaymentSection.pay_by_check_radio_button)
            .click(selector.FO.CheckoutPage.PaymentSection.terms_of_service_checkbox)
            .scroll(selector.FO.CheckoutPage.PaymentSection.order_with_an_obligation_to_pay_button)
            .click(selector.FO.CheckoutPage.PaymentSection.order_with_an_obligation_to_pay_button)
    }

    getOrderId() {
        return this.client
            .url()
            .then((res) => {
                var current_url = res.value;
                var temp1 = current_url.split("id_order=");
                var temp2 = temp1[1].split("&");
                global.order_id = temp2[0];
            })
    }
}
module.exports = CommonClient;