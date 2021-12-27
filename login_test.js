Feature('login');

Scenario('test Google', ({ I }) => {
    I.amOnPage('https://google.com');
    I.wait(2);
    I.fillField('Search','Hello');
    I.click("Google Search");
    I.wait(5);
});
