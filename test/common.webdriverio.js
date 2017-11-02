'use strict';
var client;
var webdriverio = require('webdriverio');
var globals = require('./globals.webdriverio');

var options = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
    },
    port: 4444
};

var options2 = {
    logLevel: 'silent',
    waitForTimeout: 30000,
    desiredCapabilities: {
        browserName: 'chrome',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        username: process.env.SAUCE_USERNAME,
        access_key: process.env.SAUCE_ACCESS_KEY,
        screenResolution: "1680x1050",
        platform: "Windows 7",
    },
    port: 4445
};

function initCommands(client) {

    client.addCommand('localhost', function (cb) {
        this.selector = globals.selector;
        client
            .url('http://' + URL + 'install-dev')
            .call(cb);
    });

    client.addCommand('signinBO', function () {
        this.selector = globals.selector;
        return client
            .url('https://' + URL + '/backoffice/')
            .waitForExist(this.selector.BO.LoginPage.login_input, 90000)
            .setValue(this.selector.BO.LoginPage.login_input,'remi.gaillard@prestashop.com')
            .setValue(this.selector.BO.LoginPage.password_input, 'abcd1234')
            .click(this.selector.BO.LoginPage.login_button)
            .waitForExist(this.selector.BO.Common.menu, 90000)
    });

    client.addCommand('signinFO', function () {
        this.selector = globals.selector;
        return client
            .url('https://' + URL)
            .waitForExist(this.selector.FO.AccessPage.access_loginFO, 90000)
            .click(this.selector.FO.AccessPage.access_loginFO)
            .waitForExist(this.selector.FO.AccessPage.loginFO, 90000)
            .setValue(this.selector.FO.AccessPage.loginFO, 'pub@prestashop.com')
            .setValue(this.selector.FO.AccessPage.passwordFO, '123456789')
            .click(this.selector.FO.AccessPage.login_btnFO)
            .waitForExist(this.selector.FO.AccessPage.logo_home_page);
    });

    client.addCommand('signoutBO', function () {
        this.selector = globals.selector;
        return client
            .deleteCookie()
    });

    client.addCommand('signoutBO2', function () {
        this.selector = globals.selector;
        return client
            .deleteCookie()
    });

    client.addCommand('signoutFO', function () {
        this.selector = globals.selector;
        return client
            .deleteCookie()
    });
};

module.exports = {
    getClient: function () {
        if (client) {
            return client;
        } else {
            if (typeof saucelabs !== 'undefined' && saucelabs != "None") {
                client = webdriverio
                    .remote(options2)
                    .init()
                    .windowHandleMaximize()
            } else {
                client = webdriverio
                    .remote(options)
                    //.init()
                    .windowHandleMaximize()
            }
            initCommands(client);

            return client;
        }
    },
};
