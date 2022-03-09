console.log('hello world!')

Web3 = require('web3');

var client = new Web3();
var provider = new client.providers.HttpProvider("https://public-node.testnet.rsk.co")

client.setProvider(provider);

client.eth.getBlockNumber().then(console.log)
