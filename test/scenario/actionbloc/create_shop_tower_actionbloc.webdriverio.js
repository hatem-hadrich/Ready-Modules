const { getClient } = require('../../common.webdriverio');
const { selector } = require('../../globals.webdriverio.js');

describe('Action Bloc: Ready Shop Creation', function () {
    it('Open the selfcare signup page to set email', function (done) {
        global.fctname = this.test.title;
        const date1 = new Date().getTime();
        getClient()
            .url('https://' + URL +'-tower.prestashop.net/signup')
            .waitForExist(selector.signup_email_field, 60000)
            .waitForExist(selector.signup_password_field, 60000)
            //.setValue(selector.signup_email_field, date1 + new_customer_email)
            .setValue(selector.signup_email_field, 'thenewtester@ps.com')
            .setValue(selector.signup_password_field, 'azerty1234')
            .waitForExist(selector.signup_nextemail_btn, 90000)
            .click(selector.signup_nextemail_btn)
            .call(done);
    });

    it('Open the selfcare signup page to set name', function (done) {
        global.fctname = this.test.title;
        getClient()
            .waitForExist(selector.signup_name_field, 60000)
            .waitForExist(selector.signup_surname_field, 60000)
            .setValue(selector.signup_name_field, 'maurice')
            .setValue(selector.signup_surname_field, 'martin')
            .waitForExist(selector.signup_nextname_btn, 90000)
            .click(selector.signup_nextname_btn)
            .call(done);
    });

    it('Open the selfcare signup page to set shop name', function (done) {
        global.fctname = this.test.title;
        var date2 = new Date().getTime();
        getClient()
            .waitForExist(selector.signup_shopname_field, 60000)
            .waitForExist(selector.signup_subdomain_field, 60000)
            //.setValue(selector.signup_shopname_field, 'robustesseshop' + date2)
            .setValue(selector.signup_shopname_field, 'markandspencershop')
            .waitForExist(selector.signup_nextshop_btn, 90000)
            .click(selector.signup_nextshop_btn)
            .call(done);
    });

    it('Open the selfcare signup page to set country', function (done) {
        global.fctname = this.test.title;
        getClient()
            .waitForExist(selector.signup_country_list, 30000)
            .selectByIndex(selector.signup_country_list, 3)
            .selectByIndex(selector.signup_language_list, 2)
            .click(selector.signup_cgv_checkbox)
            .waitForExist(selector.signup_nextcountry_btn, 90000)
            .click(selector.signup_nextcountry_btn)
            .pause(5000)
            .call(done);
    });

});
