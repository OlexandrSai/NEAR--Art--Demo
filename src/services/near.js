import { keyStores, Near, WalletConnection } from "near-api-js";
//import { keyStores, Near, WalletConnection, utils } from "near-api-js";
import BN from "bn.js";

export const CONTRACT_ID = "alxndrsai.testnet";
const gas = new BN("100000000000000");

// use new NEAR to avoid async/await
export const near = new Near({
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
  });

  export const wallet = new WalletConnection(near, "artdemo");

  //function to generate new design
  export const generateDesign = () => {
    return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "design",
      gas
  })
  };

  //function to claim existing design
  export const claimDesign = (seed) => {
    return wallet.account().functionCall({
      contractId: CONTRACT_ID,
      methodName: "claimMyDesign",
      gas,
      args:{seed:seed}
  })
  };

