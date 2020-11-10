const { BlockChain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
require("dotenv").config();

const myKey = ec.keyFromPrivate(process.env.PRIVATE_KEY);
const myWalletAddress = myKey.getPublic("hex");

let simpCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
simpCoin.addTransaction(tx1);

console.log("\n Starting the miner....");
simpCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\n Balance of Preetiman is ",
  simpCoin.getBalanceOfAddress(myWalletAddress)
);
