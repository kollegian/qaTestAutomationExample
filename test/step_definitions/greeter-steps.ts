import {Then, When} from "@cucumber/cucumber";
import {alice, bob, greeter} from "../hooks/hooks";
import {expect} from "chai";
import {ethers} from "hardhat";
let response: string;
When('Alice calls greeter function', async function () {
  response = await greeter.greet();
  console.log(response);
});
Then('She will be greeted with Hello World message.', function () {
  expect(response).to.be.equal("Hello, world!");
});

When('Bob calls set greet function and change the message', async function () {
 await greeter.connect(bob).setGreeting("Selam Dunya");
});

Then('New message will be displayed', async function () {
  response = await greeter.greet();
  expect(response).to.be.equal("Selam Dunya");
});





