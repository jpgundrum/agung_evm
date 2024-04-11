const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("HelloWorldModule", (m) => {
  const greeting = "Hello World";

  const HelloWorld = m.contract("HelloWorld", [greeting]);

  return { HelloWorld };
});