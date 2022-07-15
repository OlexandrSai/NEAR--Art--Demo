import BN from 'bn.js';
import { keyStores, Near, WalletConnection, Contract } from 'near-api-js';

const getContractID = () => localStorage.getItem('CONTRACT_ID');
const gas = new BN('100000000000000');

// use new NEAR to avoid async/await
export const config = new Near({
  networkId: 'testnet',
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org',
});

export const wallet = () => new WalletConnection(config, getContractID());

export const signIn = (successUrl) => {
  return wallet().requestSignIn({ contractId: getContractID(), successUrl });
};

export const signOut = () => {
  return wallet().signOut(getContractID());
};

export const getTempDesign = (accountId) => {
  return wallet().account().viewFunction(getContractID(), 'getTempDesign', { accountId });
};

export const getViewMyDesign = (accountId) => {
  return wallet().account().viewFunction(getContractID(), 'viewMyDesign', { accountId });
};

export const contract = () =>
  new Contract(wallet().account(), getContractID(), {
    viewMethods: [''],
    changeMethods: ['design', 'claimMyDesign', 'burnMyDesign'],
    sender: wallet().account(),
  });

//function to generate new design
export const generateDesign = (accountId) => {
  return contract().design({
    gas,
    args: { accountId },
  });
};

//function to claim existing design
export const claimDesign = (seed) => {
  return contract().claimMyDesign({
    gas,
    args: { seed },
  });
};

//function to burn design
export const burnDesign = () => contract().burnMyDesign();
