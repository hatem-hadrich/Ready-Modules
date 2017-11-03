const path = require('path');
const {getClient} = require('../../common.webdriverio.js');
const {selector} = require('../../globals.webdriverio.js');
var toUpload = path.join(__dirname, '../..', 'datas', 'image_test.jpg');

var Tesseract = require('tesseract.js');
var fs = require('fs');
var request = require('request');

var captchaSolution = "";

class BlockPro {
    constructor() {
        this.client = getClient();
    }

    signInBO() {
        return this.client.signinBO();
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
    }

    takeScreenshot() {
        return this.client.saveScreenshot(`test/screenshots/${this.client.desiredCapabilities.browserName}_exception_${global.date_time}.png`);
    }

    open() {
        return this.client.init().windowHandleSize({width: 1280, height: 1024});
    }

    goToCategoryPage() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.block_menu, 90000)
            .moveToObject(selector.BO.BlockProModule.block_menu)
            .waitForVisible(selector.BO.BlockProModule.category_subtab, 90000)
            .click(selector.BO.BlockProModule.category_subtab)
            .pause(5000);
    }

    clickOnAddNewCategoryButton() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.add_new_category_button, 90000)
            .click(selector.BO.BlockProModule.add_new_category_button)
            .pause(5000);
    }

    editTitle() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.title_input, 90000)
            .setValue(selector.BO.BlockProModule.title_input, 'category-' + date_time)
            .pause(5000);
    }

    editSeoKeywords() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.seo_keywords_input, 90000)
            .setValue(selector.BO.BlockProModule.seo_keywords_input, 'Category-' + date_time)
            .pause(5000);
    }

    editSeoDescription() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.seo_description_input, 90000)
            .setValue(selector.BO.BlockProModule.seo_description_input, 'this is the seo description of category !!')
            .pause(5000);
    }

    selectShopAssociation() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.shop_association_checkbox, 90000)
            .click(selector.BO.BlockProModule.shop_association_checkbox)
            .pause(5000);
    }

    selectAllGroupPermissions() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.group_permissions_checkbox, 90000)
            .click(selector.BO.BlockProModule.group_permissions_checkbox)
            .pause(5000);
    }

    enableCategory() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.status_toggle, 90000)
            .click(selector.BO.BlockProModule.status_toggle)
            .pause(5000);
    }

    clickOnSaveCategoryButton() {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.BlockProModule.category_save_button, 9000)
            .click(selector.BO.BlockProModule.category_save_button)
    }

    checkCategoryName() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Category.category_link, 90000)
            .moveToObject(selector.FO.BlockPro.Category.category_link)
            .then(() => this.client.getAttribute(selector.FO.BlockPro.Category.category_link, 'title'))
            .then((title) => {expect(title).to.eql('category-' + date_time)})
            .click(selector.FO.BlockPro.Category.category_link)
            .pause(5000);
    }

    waitForCategoryPage() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Category.page_title, 90000)
            .moveToObject(selector.FO.BlockPro.Category.page_title)
            .then(() => this.client.getText(selector.FO.BlockPro.Category.page_title))
            .then((title) => {expect(title).to.eql('category-' + date_time)})
            .pause(5000);
    }

    goToPostPage() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.block_menu, 90000)
            .moveToObject(selector.BO.BlockProModule.block_menu)
            .waitForVisible(selector.BO.BlockProModule.Post.post_subtab, 90000)
            .click(selector.BO.BlockProModule.Post.post_subtab)
            .pause(5000);
    }

    clickOnAddNewPostButton() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.add_new_post_button, 90000)
            .click(selector.BO.BlockProModule.Post.add_new_post_button)
            .pause(5000);
    }

    editPostTitle() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.title_input, 90000)
            .setValue(selector.BO.BlockProModule.Post.title_input, 'post-' + date_time)
            .pause(5000);
    }

    editPostSeoKeywords() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.seo_keywords_input, 90000)
            .setValue(selector.BO.BlockProModule.Post.seo_keywords_input, 'Post-' + date_time)
            .pause(5000);
    }

    editPostSeoDescription() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.seo_description_input, 90000)
            .setValue(selector.BO.BlockProModule.Post.seo_description_input, 'this is the description of post!!')
            .pause(5000);
    }

    editPostContent() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.source_code_button, 90000)
            .click(selector.BO.BlockProModule.Post.source_code_button)
            .waitForVisible(selector.BO.BlockProModule.Post.content_textarea, 90000)
            .setValue(selector.BO.BlockProModule.Post.content_textarea, '<p>this is the content of post !!</p>')
            .waitForExist(selector.BO.BlockProModule.Post.content_button, 90000)
            .click(selector.BO.BlockProModule.Post.content_button)
            .pause(5000);
    }

    uploadPostPicture() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.post_image_file, 90000)
            .chooseFile(selector.BO.BlockProModule.Post.post_image_file, toUpload)
            .pause(5000);
    }

    selectShopAssociationPost() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.shop_association_checkbox, 90000)
            .click(selector.BO.BlockProModule.Post.shop_association_checkbox)
            .pause(5000);
    }

    selectAllGroupPermissionsPost() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.group_permissions_checkbox, 90000)
            .click(selector.BO.BlockProModule.Post.group_permissions_checkbox)
            .pause(5000);
    }

    enablePostComment() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.comment_toggle, 90000)
            .click(selector.BO.BlockProModule.Post.comment_toggle)
            .pause(5000);
    }

    enablePost() {
        return this.client
            .waitForExist(selector.BO.BlockProModule.Post.status_toggle, 90000)
            .click(selector.BO.BlockProModule.Post.status_toggle)
            .pause(5000);
    }

    clickOnSavePostButton() {
        return this.client
            .pause(3000)
            .waitForExist(selector.BO.BlockProModule.Post.save_button, 9000)
            .click(selector.BO.BlockProModule.Post.save_button)
    }

    checkPostName() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Post.post_link, 90000)
            .moveToObject(selector.FO.BlockPro.Post.post_link)
            .then(() => this.client.getAttribute(selector.FO.BlockPro.Post.post_link, 'title'))
            .then((title) => {expect(title).to.eql('post-' + date_time)})
            .click(selector.FO.BlockPro.Post.post_link)
            .pause(5000);
    }

    waitForPostPage() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Post.page_title, 90000)
            .moveToObject(selector.FO.BlockPro.Post.page_title)
            .then(() => this.client.getText(selector.FO.BlockPro.Post.page_title))
            .then((title) => {expect(title).to.eql('post-' + date_time)})
            .pause(5000);
    }

    clickOnPostName() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Post.post_link, 90000)
            .click(selector.FO.BlockPro.Post.post_link)
            .pause(5000);
    }

    nameComment() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Comment.name_input, 90000)
            .setValue(selector.FO.BlockPro.Comment.name_input, "test")
            .pause(5000);
    }

    emailComment() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Comment.email_input, 90000)
            .setValue(selector.FO.BlockPro.Comment.email_input, "test.test@test.com")
            .pause(5000);
    }

    commentPost() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Comment.comment_textarea, 90000)
            .setValue(selector.FO.BlockPro.Comment.comment_textarea, "test")
            .pause(5000);
    }

    ratingComment() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Comment.rating_icon, 90000)
            .click(selector.FO.BlockPro.Comment.rating_icon)
            .pause(5000);
    }

    clickOnCommentButton() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Comment.comment_button, 90000)
            .click(selector.FO.BlockPro.Comment.comment_button)

            .waitForExist(selector.FO.BlockPro.Comment.succes_comment, 90000)
            .then(() => this.client.getText(selector.FO.BlockPro.Comment.succes_comment))
            .then((text) => {expect(text).to.eql("Your comment has been sent successfully. Thanks for comment!")})
            .pause(5000);
    }

    getCaptcha() {

        return this.client
            .waitForExist("#secureCodReview", 90000)
            .moveToObject("#secureCodReview", 90000)
            .then(() => this.client.getAttribute("#secureCodReview", 'src'))
            .then((src) => {
                Tesseract.detect(src, {lang: "eng"})
                    .progress(function  (p) { console.log('progress', p)    })
                    .then(function (result) { console.log('result', result.text)    });
            })
            // .execute(function() {
            //
            //     // var e = document.createElement("script");
            //     // e.src = "https://cdn.jsdelivr.net/npm/html2canvas@0.5.0-beta4/dist/html2canvas.min.js";
            //     // document.body.appendChild(e);
            //     //
            //     // e = document.createElement("script");
            //     // e.src = "https://cdn.jsdelivr.net/npm/base64-js@1.2.1/base64js.min.js";
            //     // document.body.appendChild(e);
            //     //
            //     // e = document.createElement("script");
            //     // e.src = "https://cdn.jsdelivr.net/npm/canvas2image@1.0.5/canvas2image.min.js";
            //     // document.body.appendChild(e);
            //
            //     function takePicture() {
            //         var img = new Image();
            //         img.src = document.getElementById("secureCodReview").src;
            //             Tesseract.recognize(img)
            //                 .progress(function  (p) { console.log('progress', p)    })
            //                 .then(function (result) { console.log('result', result.text)    });
            //         // e.html2canvas($("#secureCodReview"), {
            //         //     onrendered: function (canvas) {
            //         //         document.body.appendChild(canvas);
            //         //         // Convert and download as image
            //         //         $("#leaveComment").append(Canvas2Image.convertToImage(canvas, 200, 100, 'png'))
            //         //     }
            //         // });
            //     }
            // })
            .pause(300000);
        //this.renderPicture();
        // var download = function(uri, filename, callback){
        //     request.head(uri, function(err, res, body){
        //         console.log('content-type:', res.headers['content-type']);
        //         console.log('content-length:', res.headers['content-length']);
        //
        //         request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        //     });
        // };
        //
        // download('https://'+URL+'/module/blockblog/captcha', 'test/datas/captcha.png', function(){
        //     Tesseract.recognize("test/datas/captcha.png")
        //         .progress(function  (p) { console.log('progress', p)    })
        //         .then(function (result) {
        //             console.log('result', result.text);
        //             captchaSolution = result.text
        //             //return result.text;
        //         });
        // });
    }

    editCaptcha() {
        return this.client
            .waitForExist(selector.FO.BlockPro.Comment.captcha_input, 90000)
            .setValue(selector.FO.BlockPro.Comment.captcha_input, captchaSolution)
            .pause(300000);
    }

}


module.exports = BlockPro;
