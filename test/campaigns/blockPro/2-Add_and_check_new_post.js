scenario('Add and check new post', client => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "block-pro/blockpro-client");
    scenario('Add new post in back office', () => {
        test('should go to post page', () => client.goToPostPage());
        test('should click on add new post', () => client.clickOnAddNewPostButton());
        test('should enter the title of post', () => client.editPostTitle());
        test('should enter the SEO Keywords of post', () => client.editPostSeoKeywords());
        test('should enter the SEO Description of post', () => client.editPostSeoDescription());
        test('should enter the content of post', () => client.editPostContent());
        test('should upload picture of post', () => client.uploadPostPicture());
        test('should select the shop association', () => client.selectShopAssociationPost());
        test('should select all group permissions', () => client.selectAllGroupPermissionsPost());
        test('should enable the comment of post', () => client.enablePostComment());
        test('should enable the post', () => client.enablePost());
        test('should click on save button', () => client.clickOnSavePostButton());
    }, "block-pro/blockpro-client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "block-pro/blockpro-client", true);
    scenario('Check category in front office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should check post name', () => client.checkPostName());
        test('should post page is shown', () => client.waitForPostPage());
    }, "block-pro/blockpro-client");
}, "block-pro/blockpro-client", true);