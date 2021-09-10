import { keyStores, Near, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";
//*
export const CONTRACT_ID = "dev-1631276083941-71151788021018";
const gas = new BN("70000000000000");

export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

export const wallet = new WalletConnection(near, "artdemo");