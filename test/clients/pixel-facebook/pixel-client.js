var {getClient} = require('../../common.webdriverio');
var {selector} = require('../../globals.webdriverio.js');

class Pixel {
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

    clickOnConfigurationSubtab() {
        return this.client
            .waitForExist(selector.BO.ModulePagePixel.configuration_subtub, 90000)
            .click(selector.BO.ModulePagePixel.configuration_subtub)
            .pause(5000);
    }

    editPixelId(pixel_id) {
        return this.client
            .waitForExist(selector.BO.ModulePagePixel.pixel_id_input, 90000)
            .setValue(selector.BO.ModulePagePixel.pixel_id_input, pixel_id);
    }

    clickOnSaveButton() {
        return this.client
            .waitForExist(selector.BO.ModulePagePixel.save_button, 90000)
            .click(selector.BO.ModulePagePixel.save_button)
            .pause(5000);
    }

    closeGreenNotification() {
        return this.client
            .waitForExist(selector.BO.ModulePagePixel.green_notification, 90000)
            .then(() => this.client.getText(selector.BO.ModulePagePixel.green_notification))
            .then((text) => {expect(text).to.eql('×\nYour ID Pixel have been updated.')})
            .pause(3000)
            .waitForExist(selector.BO.ModulePagePixel.close_green_notification_button, 90000)
            .click(selector.BO.ModulePagePixel.close_green_notification_button)
            .pause(5000);
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }
}

module.exports = Pixel;

