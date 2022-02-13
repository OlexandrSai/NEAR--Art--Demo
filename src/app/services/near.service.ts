import {Injectable} from '@angular/core';
import {keyStores, Near, WalletConnection} from "near-api-js";
import {environment} from "../../environments/environment";

// @ts-ignore
import BN from "bn.js";

@Injectable({
  providedIn: 'root'
})
export class NearService {
  public accountId = '';
  public CONTRACT_ID = environment.CONTRACT_ID;
  public gas = new BN(environment.GAS);
  public near = new Near({
    networkId: environment.NETWORK_ID,
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: environment.NODE_URL,
    walletUrl: environment.WALLET_URL,
    headers: {}
  });
  public wallet = new WalletConnection(this.near, "artdemo");

  constructor() {
    this.accountId = this.wallet.getAccountId();
  }

  handleSignIn = async () => {
    await this.wallet.requestSignIn({
      contractId: environment.CONTRACT_ID,
      methodNames: [] // add methods names to restrict access
    })
  };

  handleSignOut = () => {
    this.wallet.signOut()
    console.log('after')
    this.accountId = ''
  };

  getTempDesign(accountId: any) {
    console.log(accountId)
    console.log(this.CONTRACT_ID);
    return this.wallet.account().viewFunction(this.CONTRACT_ID, "getTempDesign", {accountId: accountId})
  }

  getViewMyDesign(accountId: any) {
    return this.wallet.account().viewFunction(this.CONTRACT_ID, "viewMyDesign", {accountId: accountId})
  }

  //function to generate new design
  generateDesign(accountId: any) {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "design",
      gas: this.gas,
      args: {accountId: accountId}
    })
  };

  //function to claim existing design
  claimDesign(seed: any) {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "claimMyDesign",
      gas: this.gas,
      args: {seed: seed}
    })
  };

  //function to burn design
  burnDesign() {
    return this.wallet.account().functionCall({
      contractId: this.CONTRACT_ID,
      methodName: "burnMyDesign",
      gas: this.gas,
      args: {}
    })
  };
}
