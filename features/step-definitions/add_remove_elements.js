const { Given, When, Then } = require('@wdio/cucumber-framework');


Then('I should be able to see the "Add Element" button', async() => {
    const elem = await $('//*[@id="content"]/div/button');
    await expect(elem).toExist();
});


Then('I should be able to see the {string} text', async(string) => {
    const elem = await $('//*[@id="content"]/div/button');
    await elem.getText(string);
    await expect(elem).toHaveTextContaining("Add Element");
});

When("I can click on the Add Element button", async() => {
    await $('//*[@id="content"]/div/button').click();
});

Then('I should be able to see a new "Delete" button', async() => {
    const elemDelete = await $('//*[@id="elements"]/button');
    await expect(elemDelete).toExist();
});


When("I can click on the Delete Element button", async() => {
    await $('//*[@id="elements"]/button');
});

Then('I should see the element removed from the page', async() => {
    const elemDelete = await $('//*[@id="elements"]/button');
    await expect(elemDelete).not.toBeDisplayed();
});

When("I can click on the Add Element button again", async() => {
    await $('//*[@id="content"]/div/button').click();
});

Then('I should see another new element added', async() => {
    const deleteElem = await $('//*[@id="elements"]/button');
    await expect(deleteElem).toExist();
});