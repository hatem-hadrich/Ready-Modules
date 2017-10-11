scenario('Dashboard/MyStore - Back Office', client => {
    test('sign in', () => client.fillSignInForm());
    test('click on back office button', () => client.clickOnBackOfficeButton());
    test('back office is shown', () => client.waitForBackOffice());
});
