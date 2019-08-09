const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode }  = require ('./compile');


const provider = new HDWalletProvider (

        'merry manage retreat lawn deputy embrace box ice crystal owner rhythm asthma',
        'https://rinkeby.infura.io/v3/82ad2c743d764fb890f4dc55c33c36b1'

);

const web3 = new Web3 (provider);

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract (JSON.parse(interface))
      .deploy({ data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x to the bytecode
      .send ({ gas: '1000000', from: accounts[0]}); // remove 'gas' 

      console.log('Contract deployed to', result.options.address);
 
};

deploy();

 