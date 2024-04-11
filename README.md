# AGUNG EVM Contract Deployment

## Install Dependencies
git clone this repository for easy setup

Ensure that you have [node.js](https://nodejs.org/en) on your local machine

Execute the cmd below to install dependencies:

`npm install`

## AGUNG Network Setup
Create a .env file to store the two variables: **AGUNG_RPC_URL** and **PRIVATE_KEY**
- AGUNG_RPC_URL: Obtain the agung rpc url from the [docs](https://docs.peaq.network/docs/quick-start/#networks)
- PRIVATE_KEY: The private EVM compatible wallet key. In Metamask can find by going to Account Details and then clicking Show Private Key.

Add them to the .env with the format
```
AGUNG_RPC_URL="agung_url"
PRIVATE_KEY="my_private_key"
```

## Deploy the Contract
Use the cmd below to deploy the HelloWorld.sol file to the agung test network using your agung supplied wallet. Once deployed successfully there will be a **contract address** displayed on the terminal. Use this string to populate the *contractAddress* field that is present in the **scripts/interact.js** file.


`npx hardhat ignition deploy ./ignition/modules/HelloWorld.js --network agung`

## Interact with the Contract
After successfully deploying the contract to the network you are able to interact with it. The script found in the path **scripts/interact.js** obtains your locally compiled ABI and contract address to make this connection. Once the contract instance is created you can interact with its methods, such as .greet() and .setGreeting() do in this particular example.

`npx hardhat run scripts/interact.js --network agung`
