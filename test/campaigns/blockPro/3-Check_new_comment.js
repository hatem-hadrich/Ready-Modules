scenario('Check new comment', client => {
    scenario('Check category in front office', client => {
        test('should open the browser', () => client.open());
        test('should access to front office', () => client.accessToFrontOffice());
        test('should click on post name', () => client.clickOnPostName());
        test('should enter the name', () => client.nameComment());
        test('should enter the email', () => client.emailComment());
        test('should enter the comment', () => client.commentPost());
        test('should enter the rating', () => client.ratingComment());
        test('should click on comment button', () => client.clickOnCommentButton());
    }, "block-pro/blockpro-client");
    scenario('Log in in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should log in successfully in BO', () => client.signInBO());
    }, "block-pro/blockpro-client");
    scenario('Enable comment in back office', () => {
        test('should go to post page', () => client.goToPostPage());
        test('should click on add new post', () => client.clickOnAddNewPostButton());
        test('should enable the post', () => client.enablePost());
        test('should click on save button', () => client.clickOnSavePostButton());
    }, "block-pro/blockpro-client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "block-pro/blockpro-client", true);
}, "block-pro/blockpro-client", true);