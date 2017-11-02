const {getClient} = require('../../common.webdriverio.js');
const {selector} = require('../../globals.webdriverio.js');
const {external} = require('../../external_globals.webdriverio.js');

class GoogleAnalytics {
    constructor() {
        this.client = getClient();
    }

    signInBO() {
        return this.client.signinBO();
    }

    signOutBO() {
        return this.client.signoutBO();
    }

    close() {
        return this.client.end();
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }

    open() {
        return this.client.init().windowHandleMaximize();
    }

    goToModulePage() {

        return this.client
            .waitForExist(selector.BO.ModulesPage.modules_subtab, 90000)
            .click(selector.BO.ModulesPage.modules_subtab)
            .pause(5000);
    }

    goToModuleConfigurationPage() {

        return this.client
            .waitForExist(selector.BO.GoogleAnalyticsPage.config_module_button, 90000)
            .click(selector.BO.GoogleAnalyticsPage.config_module_button)
    }

    fillGoogleSignInForm(login = "prestotests@gmail.com", password = "presto_tests") {

        return this.client
            .waitForExist(external.FO.GoogleAnalytics.connect_button, 90000)
            .click(external.FO.GoogleAnalytics.connect_button)
            .waitForExist(external.FO.GoogleAnalytics.google_analytics_choice, 9000)
            .click(external.FO.GoogleAnalytics.google_analytics_choice)
            .waitForExist(external.FO.Google.username_input, 90000)
            .setValue(external.FO.Google.username_input, login)
            .waitForExist(external.FO.Google.identifier_next_button, 90000)
            .click(external.FO.Google.identifier_next_button)
            .pause(5000)
            .waitForVisible(external.FO.Google.password_input, 90000)
            .setValue(external.FO.Google.password_input, password)
            .waitForExist(external.FO.Google.password_next_button, 90000)
            .click(external.FO.Google.password_next_button)
            .pause(9000)
    }

    clickOnCreateAccountLink() {

        return this.client
            .moveToObject(selector.BO.GoogleAnalyticsPage.create_account_link, 9000)
            .then(() => this.client.getAttribute(selector.BO.GoogleAnalyticsPage.create_account_link, 'href'))
            .then((href) => {
                this.client.newWindow(href)
            })
            .pause(3000)
            .waitForVisible(external.FO.GoogleAnalytics.google_analytics_link, 90000)
            .click(external.FO.GoogleAnalytics.google_analytics_link)
            .then(() => this.client.getTabIds())
            .then((ids) => this.client.switchTab(ids[ids.length - 1]))
    }

    backToShop() {

        return this.client
            .waitForExist(external.FO.GoogleAnalytics.reset_button, 90000)
            .then(() => this.client.getTabIds())
            .then((ids) => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    clickOnAdministration() {

        return this.client
            .waitForExist(external.FO.GoogleAnalytics.administration_button, 90000)
            .click(external.FO.GoogleAnalytics.administration_button)
    }

    selectPropertySettings() {

        return this.client
            .waitForExist(external.FO.GoogleAnalytics.property_settings_button, 90000)
            .click(external.FO.GoogleAnalytics.property_settings_button)
            .pause(3000)
    }

    checkId() {

        return this.client
            .waitForExist(external.FO.GoogleAnalytics.google_analytics_id, 90000)
            .getText(external.FO.GoogleAnalytics.google_analytics_id).then(function (id) {
                global.tracking_id = id;
                should(global.tracking_id).be.equal("UA-105026510-1");
            })
            .waitForExist(external.FO.GoogleAnalytics.google_analytics_url_input, 9000)
            .setValue(external.FO.GoogleAnalytics.google_analytics_url_input, URL)
            .waitForExist(external.FO.GoogleAnalytics.save_button, 3000)
            .click(external.FO.GoogleAnalytics.save_button)
            .pause(9000)
    }

    searchModule(moduleName) {

        return this.client
            .waitForExist(selector.BO.ModulesPage.search_input, 90000)
            .setValue(selector.BO.ModulesPage.search_input, moduleName)
            .waitForExist(selector.BO.ModulesPage.search_button, 3000)
            .click(selector.BO.ModulesPage.search_button)
            .pause(3000)
            .waitForExist(selector.BO.ModulesPage.page_loaded, 90000)
            .then(() => this.client.getText(selector.BO.ModulesPage.page_loaded))
            .then((nbr) => {
                global.nbr = parseInt(nbr[0].charAt(0))
            })
            .pause(3000);
    }

    addGoogleTrackingId() {

        return this.client
            .waitForExist(selector.BO.GoogleAnalyticsPage.googleanalytics_tracking_id, 90000)
            .setValue(selector.BO.GoogleAnalyticsPage.googleanalytics_tracking_id, global.tracking_id)
    }

    enableUserTrackingId() {

        return this.client
            .waitForExist(selector.BO.GoogleAnalyticsPage.enable_user_id_tracking, 90000)
            .click(selector.BO.GoogleAnalyticsPage.enable_user_id_tracking, 90000)
    }

    clickOnSaveButton() {

        return this.client
            .waitForExist(selector.BO.GoogleAnalyticsPage.googleanalytics_submit_btn, 90000)
            .click(selector.BO.GoogleAnalyticsPage.googleanalytics_submit_btn, 90000)
    }

    checkAccountId() {

        return this.client
            .waitForExist(selector.BO.GoogleAnalyticsPage.account_id_green_block, 90000)
            .then(() => this.client.getText(selector.BO.GoogleAnalyticsPage.account_id_green_block))
            .then((value) => {
                expect(value).to.eql('×\nAccount ID updated successfully')
            })
    }

    checkUserId() {

        return this.client
            .waitForExist(selector.BO.GoogleAnalyticsPage.user_id_green_block, 90000)
            .then(() => this.client.getText(selector.BO.GoogleAnalyticsPage.user_id_green_block))
            .then((value) => {
                expect(value).to.eql('×\nSettings for User ID updated successfully')
            })
    }

}

module.exports = GoogleAnalytics;
