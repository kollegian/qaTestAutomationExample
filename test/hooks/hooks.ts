import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';
import {ethers} from "hardhat";
import {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers";
import {Contract} from "typechain";
import {Greeter} from "../../typechain";

export let greeter: Greeter;
export let alice: SignerWithAddress;
export let bob: SignerWithAddress;
export let eve: SignerWithAddress;
Before({ tags: '@someTag' }, async function () {
  const Greeter = await ethers.getContractFactory("Greeter");
  // @ts-ignore
  greeter = await Greeter.deploy("Hello, world!");
  await greeter.deployed();
  [alice, bob, eve] = await ethers.getSigners();
});

Before({ tags: '@debug' }, async function () {
  this.debug = true;
});

BeforeAll(async function () {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

AfterAll(async function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});