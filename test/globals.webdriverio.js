const path = require('path');
const should = require('should');
const argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.module_tech_name = argv.MODULE;
global.URL = argv.URL;
global.saucelabs = argv.SAUCELABS;
global.selenium_url = argv.SELENIUM;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.module_tech_name_mailchimp = 'mailchimpintegration';
global.listNameInput = 'Test_list_MailChimp' + date_time;
module.exports = {
    selector: {

        BO: {
            Common: {
                menu: '#nav-sidebar',
                close_validation_button: '.growl-close',
                red_validation_notice: '[class="growl growl-error growl-medium"]',
                green_validation_notice: '[class="growl growl-notice growl-medium"]'
            },
            LoginPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },
            ModulesPage: {
                modules_subtab: '#subtab-AdminParentModulesSf',
                search_input: 'div.pstaggerAddTagWrapper > input',
                search_button: '.btn.btn-primary.pull-right.search-button',
                page_loaded: '.module-search-result-wording',
                installed_modules_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                module_number_span: '[class="module-sorting-search-wording"]',
                number_of_module_found: '//*[@id="main-div"]/div[3]/div/div/div[2]/div/div[7]/span[1]',
                configuration_button: '//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button',
                module_menu_button: '[class="btn btn-primary-outline  dropdown-toggle"]',
                enable_module_button: '[class="dropdown-item module_action_menu_enable"]'
            },
            //Customer page selectors
            CustomersPage: {
                number_of_customer: '//*[@id="form-customer"]/div/div[1]/span[1]',
                customer_subtab: '#subtab-AdminParentCustomer',
                customer_address_email_input: '//*[@id="form-customer"]/div/div[2]/table/thead/tr[2]/th[7]/input',
                customer_search_button: '#submitFilterButtoncustomer'
            },
            ModulePageSocialConnect: {
                Common: {
                    menu_tabs: '//*[@id="navtabs16"]/li[%ID]/a',
                    title_page_name: '//*[@id="%NAME"]/form/div/div[1]',
                    developers_link: '//*[@id="%NAME"]/div/div/fieldset/div[3]/a',
                    logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                },
                //@TODO
                Facebook: {
                    site_url_input: '//*[@id="facebook"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="appid"]',
                    customer_secret_input: '//*[@id="secret"]',
                    save_button: '//*[@id="module_form_submit_btn_18"]'
                },
                Twitter: {
                    website_field_input: '//*[@id="twitter"]/div/div/fieldset/div[8]/input',
                    callback_field_input: '//*[@id="twitter"]/div/div/fieldset/div[9]/input',
                    customer_key_input: '//*[@id="twitterconskey"]',
                    customer_secret_input: '//*[@id="twitterconssecret"]',
                    save_button: '//*[@id="module_form_submit_btn_19"]'
                },
                //@TODO
                Amazon: {},
                Google: {
                    authorized_javaScript_origins_input: '//*[@id="google"]/div/div/fieldset/div[21]/input',
                    authorized_redirect_uri_input: '//*[@id="google"]/div/div/fieldset/div[22]/input',
                    customer_key_input: '//*[@id="oci"]',
                    customer_secret_input: '//*[@id="ocs"]',
                    save_button: '//*[@id="module_form_submit_btn_21"]'
                },
                Pinterest: {
                    site_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[8]/input',
                    redirect_url_input: '//*[@id="pinterest"]/div/div/fieldset/div[9]/input',
                    customer_key_input: '//*[@id="pici"]',
                    customer_secret_input: '//*[@id="pics"]',
                    save_button: '//*[@id="module_form_submit_btn_32"]'
                },
                Yahoo: {},
                Paypal: {
                    return_url_input: '//*[@id="paypal"]/div/div/fieldset/div[8]/input',
                    privacy_policy_url_input: '//*[@id="paypal"]/div/div/fieldset/div[11]/input',
                    user_agreement_url_input: '//*[@id="paypal"]/div/div/fieldset/div[12]/input',
                    customer_key_input: '//*[@id="clientid"]',
                    customer_secret_input: '//*[@id="psecret"]',
                    save_button: '//*[@id="module_form_submit_btn_23"]'
                },
                Linkedin: {
                    website_url_input: '//*[@id="linkedin"]/div/div/fieldset/div[11]/input',
                    customer_key_input: '//*[@id="lapikey"]',
                    customer_secret_input: '//*[@id="lsecret"]',
                    save_button: '//*[@id="module_form_submit_btn_24"]'
                },
                Microsoft: {
                    redirect_url_input: '//*[@id="hotmail"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="mclientid"]',
                    customer_secret_input: '//*[@id="mclientsecret"]',
                    save_button: '//*[@id="module_form_submit_btn_25"]'
                },
                Foursquare: {
                    redirect_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[9]/input',
                    welcome_page_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[7]/input',
                    privacy_policy_url_input: '//*[@id="foursquare"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="fsci"]',
                    customer_secret_input: '//*[@id="fscs"]',
                    save_button: '//*[@id="module_form_submit_btn_26"]'
                },
                Github: {
                    logo_customer_page: '//*[@id="form-customer"]/div/div[2]/table/tbody/tr/td[6]/img',
                    config_button: '//*[@id="navtabs16"]/li[13]/a',
                    developers_link: '//*[@id="github"]/div/div/fieldset/div[3]/a',
                    home_page_url_input: '//*[@id="github"]/div/div/fieldset/div[5]/input',
                    callback_url_input: '//*[@id="github"]/div/div/fieldset/div[7]/input',
                    customer_key_input: '//*[@id="gici"]',
                    customer_secret_input: '//*[@id="gics"]',
                    save_button: '//*[@id="module_form_submit_btn_27"]'
                },
                Disqus: {
                    website_url_input: '//*[@id="disqus"]/div/div/fieldset/div[8]/input',
                    callback_url_input: '//*[@id="disqus"]/div/div/fieldset/div[12]/input',
                    terms_of_service_url_input: '//*[@id="disqus"]/div/div/fieldset/div[16]/input',
                    customer_key_input: '//*[@id="dci"]',
                    customer_secret_input: '//*[@id="dcs"]',
                    save_button: '//*[@id="module_form_submit_btn_28"]'
                },
                Dropbox: {
                    redirect_uri_input: '//*[@id="dropbox"]/div/div/fieldset/div[10]/input',
                    customer_key_input: '//*[@id="dbci"]',
                    customer_secret_input: '//*[@id="dbcs"]',
                    save_button: '//*[@id="module_form_submit_btn_29"]'
                },
                Wordpress: {
                    website_url_input: '//*[@id="wordpress"]/div/div/fieldset/div[7]/input',
                    redirect_uri_input: '//*[@id="wordpress"]/div/div/fieldset/div[8]/input',
                    javascript_origins_input: '//*[@id="wordpress"]/div/div/fieldset/div[9]/input',
                    customer_key_input: '//*[@id="wci"]',
                    customer_secret_input: '//*[@id="wcs"]',
                    save_button: '//*[@id="module_form_submit_btn_30"]'
                },
                Tumblr: {
                    website_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[6]/input',
                    callback_url_input: '//*[@id="tumblr"]/div/div/fieldset/div[8]/input',
                    customer_key_input: '//*[@id="tuci"]',
                    customer_secret_input: '//*[@id="tucs"]',
                    save_button: '//*[@id="module_form_submit_btn_31"]'
                },
                Vkontakte: {
                    site_address_input: '//*[@id="vkontakte"]/div/div/fieldset/div[6]/input',
                    customer_key_input: '//*[@id="vci"]',
                    customer_secret_input: '//*[@id="vcs"]',
                    save_button: '//*[@id="module_form_submit_btn_33"]'
                }
            },
            SettingPage: {
                setting_subtab: '#subtab-ShopParameters',
            },
            MailChimpModulePage: {
                login_input: '//*[@id="username"]',
                password_input: '//*[@id="password"]',
                login_button: '//*[@id="login-form"]/fieldset/div[3]/input',
                access_button: '//*[@id="content"]/div[5]/div/div/div/a',
                connection_list: '//*[@id="content"]/div[5]/div/div/div/span',
                list_select: '//*[@id="current_list_id"]',
                save_button: '//*[@id="configuration_form_submit_btn"]',
                config_module_button: '//*[@id="modules-list-container-all"]/div/div/div/div[5]/div[2]/form/button',
                option_select: '//*[@id="current_list_id"]/option[3]',
                list_input: '//*[@id="new_list_name"]'
            },
            ContactPage: {
                contact_subtab: '//*[@id="subtab-AdminParentStores"]/a',
                shop_link: '//*[@id="content"]/div[1]/div/div[2]/a[2]',
                adress_shop_input: '//*[@id="conf_id_PS_SHOP_ADDR1"]/div/input',
                postal_code_input: '//*[@id="conf_id_PS_SHOP_CODE"]/div/input',
                city_shop_input: '//*[@id="conf_id_PS_SHOP_CITY"]/div/input',
                phone_input: '//*[@id="conf_id_PS_SHOP_PHONE"]/div/input',
                fax_input: '//*[@id="conf_id_PS_SHOP_FAX"]/div/input',
                save_button: '//*[@id="store_fieldset_contact"]/div[3]/button',
            },

            GoogleAnalyticsPage: {
                config_module_button: '//*[@id="modules-list-container-native"]/div/div/div/div[5]/div[2]/form/button',
                googleanalytics_tracking_id: '//*[@id="GA_ACCOUNT_ID"]',
                enable_user_id_tracking: '//*[@id="ga_userid_enabled"]',
                googleanalytics_submit_btn: '//*[@id="configuration_form_submit_btn"]',
                account_id_green_block: '//*[@id="content"]/div[6]/div[@class="module_confirmation conf confirm alert alert-success"]',
                user_id_green_block: '//*[@id="content"]/div[7]/div[@class="module_confirmation conf confirm alert alert-success"]',
                create_account_link: '//*[@id="google_analytics_content"]/div/div[2]/p[2]/b/a'
            }
        },
        //FO
        FO: {
            SocialConnect: {
                Common: {
                    first_logos: '#follow-teaser > div > a.%SOCIAL.custom-social-button-all.custom-social-button-1 > i',
                    second_logos: '#_desktop_user_info > div > span > a.%SOCIAL.custom-social-button-all.custom-social-button-4 > i',
                    third_logos: '#follow-teaser-footer > div > a.%SOCIAL.custom-social-button-all.custom-social-button-1 > i',
                    user_connected_span: '//*[@id="_desktop_user_info"]/div/a[2]/span'
                },
                Facebook: {
                    username_input: '//*[@id="email"]',
                    password_input: '//*[@id="pass"]',
                    login_button: '//*[@id="loginbutton"]'
                },
                Twitter: {
                    username_input: '//*[@id="username_or_email"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '//*[@id="allow"]',
                    linked_modale: '#fb-con-wrapper',
                    email_input: '//*[@id="api-email"]',
                    send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                    check_sent_email_p: '//*[@id="fb-con-wrapper"]/p'
                },
                Amazon: {
                    username_input: '//*[@id="ap_email"]',
                    password_input: '//*[@id="ap_password"]',
                    signin_button: '//*[@id="signInSubmit"]/span/button'
                },
                Google: {
                    username_input: '//*[@id="identifierId"]',
                    identifier_next_button: '//*[@id="identifierNext"]',
                    password_input: '//input[@type="password" and @name="password"]',
                    password_next_button: '//*[@id="passwordNext"]',
                    user_link: '//*[@id="view_container"]/form/div[2]/div/div/div/ul/li[1]/div/div[1]/img'
                },
                Pinterest: {
                    username_input: '//input[@type="email" and @name="id"]',
                    password_input: '//input[@type="password" and @name="password"]',
                    login_button: '.red.SignupButton.active',
                    allow_button: '//*[@id="dialog_footer"]/button[2]',
                    email_input: '//*[@id="api-email"]',
                    send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                    check_sent_email_p: '//*[@id="fb-con-wrapper"]/p'
                },
                Yahoo: {
                    username_input: '//*[@id="login-username"]',
                    password_input: '//*[@id="login-passwd"]',
                    next_button: '//*[@id="login-signin"]'
                },
                Paypal: {
                    username_input: '//*[@id="email"]',
                    password_input: '//*[@id="password"]',
                    login_button: '//*[@id="btnLogin"]',
                    allow_button: '//*[@id="agreeConsent"]'
                },
                Linkedin: {
                    username_input: '//*[@id="session_key-oauthAuthorizeForm"]',
                    password_input: '//*[@id="session_password-oauthAuthorizeForm"]',
                    allow_button: '.allow.btn-primary'
                },
                Microsoft: {
                    username_input: '//*[@id="i0116"]',
                    password_input: '//*[@id="i0118"]',
                    next_button: '//*[@id="idSIButton9"]',
                    accept_button: '//*[@id="idBtn_Accept"]'
                },
                Foursquare: {
                    username_input: '//*[@id="username"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '//*[@id="loginFormButton"]'
                },
                Github: {
                    username_input: '//*[@id="login_field"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '.btn.btn-primary.btn-block'
                },
                Disqus: {
                    username_input: '//*[@id="username"]',
                    password_input: '//*[@id="password"]',
                    allow_button: '.btn',
                    accept_button: '.btn.main'
                },
                Dropbox: {
                    username_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[1]/div[2]/input',
                    password_input: '//*[@id="regular-login-forms"]/div/form/div[1]/div[2]/div[2]/input',
                    login_button: '.login-button.signin-button.button-primary',
                    allow_button: '.auth-button.button-primary'
                },
                Wordpress: {
                    username_input: '//*[@id="usernameOrEmail"]',
                    password_input: '//*[@id="password"]',
                    login_button: '.button.form-button.is-primary',
                    allow_button: '//*[@id="approve"]'
                },
                Tumblr: {
                    username_input: '//*[@id="signup_determine_email"]',
                    password_input: '//*[@id="signup_password"]',
                    next_button: '//*[@id="signup_forms_submit"]/span[2]',
                    login_button: '.signup_login_btn.active',
                    allow_button: '.chrome.green.allow',
                    linked_modale: '#fb-con-wrapper',
                    email_input: '//*[@id="api-email"]',
                    send_button: '//*[@id="fb-con-wrapper"]/a[2]',
                    check_sent_email_p: '//*[@id="fb-con-wrapper"]/p'
                },
                Vkontakte: {
                    username_input: '//*[@id="login_submit"]/div/div/input[6]',
                    password_input: '//*[@id="login_submit"]/div/div/input[7]',
                    login_button: '//*[@id="install_allow"]'
                }
            },
            //Common selectors
            Common: {
                favicon: '/html/head/link[2]',

                desktop_login: '//*[@id="_desktop_logo"]/a',
                cookie_banner_close_button: '//*[@id="checkout"]/div/a',
                clickOutSide: '//*[@id="index"]'
            },

            //Access page selectors
            AccessPage: {
                logo_home_page: '.logo.img-responsive',
                first_product_home_page: '.thumbnail.product-thumbnail',
                first_product_home_page_name: '[itemprop="name"]',

                access_loginFO: 'div.user-info > a',
                loginFO_input: '//*[@id="login-form"]/section/div[1]/div[1]/input',
                passwordFO_input: '//*[@id="login-form"]/section/div[2]/div[1]/div/input',
                loginFO_button: '//*[@id="login-form"]/footer/button',
                logoutFO: '//*[@id="_desktop_user_info"]/div/a[1]'
            },

            //Product page selectors
            ProductPage: {
                add_to_cart_button: '.btn.btn-primary.add-to-cart',
                product_image: '#content',
                product_name_details: '[itemprop="name"]',
                product_price_details: '[itemprop="price"]',
                product_quantity_details: '#quantity_wanted',
                layer_cart: '//div[@id="blockcart-modal" and @style="display: block;"]',
                layer_cart_name_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/h6',
                layer_cart_price_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[1]',
                layer_cart_quantity_details: '//div[@id="blockcart-modal"]/div/div/div[2]/div/div[1]/div/div[2]/p[2]',
                layer_cart_command_button: '//*[@id="blockcart-modal"]/div/div/div[2]/div/div[2]/div/div/a',
                command_product_name: '(//div[@class="product-line-info"])[1]/a',
                command_product_price: '//span[@class="price"]',
                command_checkout_button: '//*[@id="main"]/div/div[2]/div[1]/div[2]/div/a',
                checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order: '#payment-confirmation >div > button',
                order_confirmation_name: '#order-items > div > div > div.col-sm-4.col-xs-9.details > span',
                order_confirmation_price1: '#order-items > div > table > tbody > tr:nth-child(1) > td:nth-child(2)',
                order_confirmation_price2: '#content-hook_payment_return > div > div > div > p > span > strong',
                customer_support_link: '//*[@id="content-hook_payment_return"]/div/div/div/p/a',
                order_confirmation_ref: '//*[@id="order-details"]/ul/li[1]'
            },

            //Cart summary selectors
            CartSummary: {
                command_button_checkout: '//*[@id="main"]/div/div[2]/div[1]/div[3]/div/a',
                checkout_step2_continue_button: '//*[@id="checkout-addresses-step"]/div/div/form/div[2]/button',
                step3_section: '//*[@id="checkout-delivery-step"]',
                checkout_step4_payment: '//*[@id="payment-option-2"]',
                checkout_step4_cgv: '//input[@id="conditions_to_approve[terms-and-conditions]"]',
                checkout_step4_order_button: '#payment-confirmation >div > button',
                order_confirmation_text: '#content-hook_order_confirmation > div > div > div > h3 > i'
            },

            //Commande selector
            Commande: {
                connect_tab: '//*[@id="checkout-personal-information-step"]/div/ul/li[3]/a',
                address_input: '//*[@id="delivery-address"]/div/section/div[5]/div[1]/input',
                post_code_input: '//*[@id="delivery-address"]/div/section/div[7]/div[1]/input',
                city_input: '//*[@id="delivery-address"]/div/section/div[8]/div[1]/input',
                checkout_step2_continue_button: '//*[@id="delivery-address"]/div/footer/button',
                checkout_step3_continue_button: '//*[@id="js-delivery"]/button',
                footer: '//*[@id="footer"]',
                payment_option_radio: '//*[@id="payment-option-1"]',
                first_logo: '//a[@class="%SOCIAL custom-social-button-all custom-social-button-2"]'
            }

        }
    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};
