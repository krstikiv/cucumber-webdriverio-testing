const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I hover over an image", async () => {
  const userImage = await $('[alt="User Avatar"]');
  await userImage.moveTo();
});

Then("I should see new details", async () => {
    const details = await $('#content > div > div:nth-child(3) > div');
    await expect(details).toBeExisting();   
});

When("I click on user1's View Profile", async () => {
  await $('[alt="User Avatar"]').moveTo();
  await $('a[href^="/users/1"]').click();

});

Then("I see the user1's page", async () => {
  const userPage = await $('h1');
  await expect(userPage).toBeExisting();   
});

