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


export const viewMyDesign = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "viewMyDesign")
}

export const viewMyDesign = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "burnMyDesign")
}

export const viewDesigns = () => {
  return wallet.account().viewFunction(CONTRACT_ID, "viewDesigns")
}

export const claimMyDesign = ({seed}) => {
  console.log(id)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "claimMyDesign",
      gas,
      args: {seed}
  })
}

export const design = ({seed}) => {
  console.log(id)
  return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "claimMyDesign",
      gas,
      args: {seed}
  })
}

