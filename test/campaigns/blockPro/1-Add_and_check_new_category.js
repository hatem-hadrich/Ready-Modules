scenario('Add and check new category', client => {
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "block-pro/blockpro-client");
    scenario('Add new category in back office', () => {
        test('should go to category page', () => client.goToCategoryPage());
        test('should click on add new category', () => client.clickOnAddNewCategoryButton());
        test('should enter the title of category', () => client.editTitle());
        test('should enter the SEO Keywords of category', () => client.editSeoKeywords());
        test('should enter the SEO Description of category', () => client.editSeoDescription());
        test('should select the shop association', () => client.selectShopAssociation());
        test('should select all group permissions', () => client.selectAllGroupPermissions());
        test('should enable the category', () => client.enableCategory());
        test('should save the store adress', () => client.clickOnSaveCategoryButton());
    }, "block-pro/blockpro-client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "block-pro/blockpro-client", true);
    scenario('Check category in front office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should check category name', () => client.checkCategoryName());
        test('should category page is shown', () => client.waitForCategoryPage());
    }, "block-pro/blockpro-client");
}, "block-pro/blockpro-client", true);