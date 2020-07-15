const Web3 = require('web3');
const { setupLoader } = require('@openzeppelin/contract-loader');

const web3 = new Web3('http://127.0.0.1:8545');
const loader = setupLoader({ provider: web3 }).web3;

async function main() {

    // Test that things are working fine
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    // Load the contract
    const address = '0xe78A0F7E598Cc8b0Bb87894B0F60dD2a88d6a8Ab';
    const box = loader.fromArtifact('Box', address);

    // Send a transaction to store() a new value in the Box contract
    await box.methods.store(240)
        .send({from: accounts[0], gas: 50000, gasPrice: 1e6 });

    // Call retrieve() function of the deployed Box contract
    const value = await box.methods.retrieve().call();
    console.log(`Box value is ${value}`);
}

main();