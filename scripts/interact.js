
const contractAddress = ''; // Replace with your contract's address which is outputted after deployment
const ContractArtifact = require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');



async function main() {
    // You can use a Hardhat runtime environment property to get a contract factory and then get a contract
    const [deployer] = await ethers.getSigners();
  
    // Get the contract instance at a specific address with the ABI and the signer
    const contract = new ethers.Contract(contractAddress, ContractArtifact.abi, deployer);
  
    // Now you can call your contract's methods using the contract object

    // Perform a read
    const helloWorld = await contract.greet();
    console.log('Greeting:', helloWorld);

    // Perform a write
    const tx = await contract.setGreeting("Goodbye World");
    await tx.wait();  // Wait for the transaction to be completed

    // Ensure the greeting was changed
    const goodbyeWorld = await contract.greet();
    console.log('Greeting:', goodbyeWorld);

    // Perform a write to change back to original strin
    const tx2 = await contract.setGreeting("Hello World");
    await tx2.wait();  // Wait for the transaction to be completed
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
