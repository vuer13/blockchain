const {Blockchain, Transactions} = require('./blockchain');

let rvuCoin = new Blockchain();
rvuCoin.createTransaction(new Transactions('address 1', 'address 2', 80));
rvuCoin.createTransaction(new Transactions('address 2', 'address 1', 20));

console.log('\n Mining: ')
rvuCoin.minePendingTransactions('ryans-address')

console.log('\n Balance is: ', rvuCoin.getBalanceofAddress('ryans-address'))

console.log('\n Mining: ')
rvuCoin.minePendingTransactions('ryans-address')

console.log('\n Balance is: ', rvuCoin.getBalanceofAddress('ryans-address'))