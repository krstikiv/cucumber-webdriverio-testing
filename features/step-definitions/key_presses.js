const { Given, When, Then } = require('@wdio/cucumber-framework');


When("I press {word} on the keyboard", async (key) => {
    await browser.keys([key]);
});

Then("I should see the message saying {string}", async (message) => {
    const elem = await $('#result');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});
