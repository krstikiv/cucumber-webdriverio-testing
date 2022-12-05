const { Given, When, Then } = require('@wdio/cucumber-framework');


Then('I should see checkbox 1 unselected as default', async() => {
    const elem = await $('#checkboxes > input[type=checkbox]:nth-child(1)');
    await expect(elem).not.toBeSelected();
});


Then('I should see checkbox 2 selected as default', async() => {
    const elem = await $('#checkboxes > input[type=checkbox]:nth-child(3)');
    await expect(elem).toBeSelected();
});


When("I click on checkbox 1", async() => {
    const checkboxOne = await $('#checkboxes > input[type=checkbox]:nth-child(1)');
    await checkboxOne.click();
});

Then('I should see checkbox 1 selected', async() => {
    const elem = await $('#checkboxes > input[type=checkbox]:nth-child(1)');
    await expect(elem).toBeSelected();
});

When("I click on checkbox 2", async() => {
    const checkboxOne = await $('#checkboxes > input[type=checkbox]:nth-child(3)');
    await checkboxOne.click();
});

Then('I should see checkbox 2 unselected', async() => {
    const elem = await $('#checkboxes > input[type=checkbox]:nth-child(3)');
    await expect(elem).not.toBeSelected();
});