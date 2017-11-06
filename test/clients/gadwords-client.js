const CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');

class GoogleAdwords extends CommonClient{

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
}

module.exports = GoogleAdwords;

