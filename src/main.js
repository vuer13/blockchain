const {Blockchain, Transactions} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('992bb361d808bfac6f87d2562c2d17a6e79c3589d9a82ff54a765781c02189c1');
const walletAddress = myKey.getPublic('hex');

let rvuCoin = new Blockchain();

const tx1 = new Transactions(walletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
rvuCoin.addTransaction(tx1);

console.log('\n Mining: ');
rvuCoin.minePendingTransactions(walletAddress);

console.log('\n Balance is: ', rvuCoin.getBalanceofAddress(walletAddress));
console.log('Is chain valid?', rvuCoin.isChainValid())