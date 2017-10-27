const {getClient} = require('../../common.webdriverio');
const {selector} = require('../../globals.webdriverio.js');

class GoogleAdwords {
    constructor() {
        this.client = getClient();
    }

    fillSignInForm() {
        return this.client.signinBO();
    }

    signOutBO() {
        return this.client.signoutBO();
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

    clickOnConfigureButton() {
        return this.client
            .waitForExist(selector.BO.ModulesPage.configuration_button, 90000)
            .click(selector.BO.ModulesPage.configuration_button)
            .pause(5000);
    }

    searchModule(name) {
        return this.client
            .waitForExist(selector.BO.ModulesPage.search_input, 60000)
            .setValue(selector.BO.ModulesPage.search_input, name)
            .click(selector.BO.ModulesPage.search_button)
            .pause(5000);
    }

    checkGoogleAdwordsPromotionalCode(){
        return this.client
            .waitForExist(selector.BO.ModuleGoogleAdwords.voucher_input, 90000)
            .then(() => this.client.getText(selector.BO.ModuleGoogleAdwords.voucher_input))
            .then((voucher) => {
                if(voucher == ""){
                    throw new Error("Google AdWords promotional code is empty");
                }
            })
            .pause(5000);
    }

    clickOnStartButton() {
        return this.client
            .waitForExist(selector.BO.ModuleGoogleAdwords.gadwords_start_button, 90000)
            .click(selector.BO.ModuleGoogleAdwords.gadwords_start_button, 90000)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(5000);
    }

    checkGoogleAdwordsVoucher() {
        return this.client
            .url()
            .then((res) => {
                var current_url = res.value;
                expect(current_url).to.eql("http://www.google.com/intl/fr/ads/get/prestashop75/index.html");
            })
            .waitForExist(selector.BO.ModuleGoogleAdwords.google_adwords_voucher, 90000)
            .then(() => this.client.isVisible(selector.BO.ModuleGoogleAdwords.google_adwords_voucher))
            .then((isVisible) => expect(isVisible).to.eql(true))
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }
}

module.exports = GoogleAdwords;

