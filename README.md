#  🎓 NCD.L2.sample--art-demo dApp
This repository contains a complete frontend applications (Vue.js, React, Angular) to work with
<a href="https://github.com/Learn-NEAR/NCD.L1.sample--art-demo" target="_blank">NCD.L1.sample--art-demo contract</a>, implementation of it is also stored in
<a href="https://github.com/Learn-NEAR/NCD.L2.sample--art-demo/tree/main/contract/NCD.L1.sample--art-demo" target="_blank">current repository</a> targeting the NEAR platform:
1. Vue.Js (main branch)
2. React (react branch)
2. Angular (angular branch)

The goal of this repository is to make it as easy as possible to get started writing frontend with Vue.js, React and Angular for AssemblyScript contracts built to work with NEAR Protocol.


## ⚠️ Warning
Any content produced by NEAR, or developer resources that NEAR provides, are for educational and inspiration purposes only. NEAR does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.


## ⚡  Usage
![image](https://user-images.githubusercontent.com/15414351/172921293-5f5e9845-3085-435e-8faf-5699ac82bf4a.png)
<a href="" target="_blank">UI walkthrough | TBA </a>

You can use this app with contract ids which were deployed by the creators of this repo or you can use it with your own deployed contract ids.

Before pasting id make sure that you deployed correct smart contract, in other case this code may not work as expected.

## Project setup
To deploy sample--art-demo to your account visit <a href="https://github.com/Learn-NEAR/NCD.L1.sample--art-demo" target="_blank">this repo (smart contract deployment instructions are inside):</a>

After you successfully deployed art-demo contract, and you get contract id, put it inside ``` src/environments/environment.ts ``` file :

```
CONTRACT_ID = "put your art-demo contract id here"
...
```

After you fill up environment.ts file, you need to:

1. Install Angular CLI (if previously you didn't)
```
npm i -g @angular/cli
```

2. Install all dependencies
```
npm i
```
3. Run the project locally
```
npm run serve
```

Other commands:

Compiles and minifies for production
```
npm run build
```
Lints and fixes files
```
npm run lint
```

## 👀 Code walkthrough for Near university students

<a href="" >Code walk-through | TBA </a>

### -- Contract --

To work with museum, and meme contracts we have separate functions inside ``` src/app/services/near.service.ts```.
```
  getArtContract() {
    return new Contract(
      this.wallet.account(),
      this.CONTRACT_ID,
      {
        viewMethods: ['getTempDesign', 'viewMyDesign'],
        changeMethods: ['design', 'claimMyDesign', 'burnMyDesign']
      }
    )
  }
```

### -- Near Service --

We are using ```near-api-js``` to work with NEAR blockchain. In ``` src/app/services/near.service.ts ``` we are importing classes, functions and configs which we are going to use:
```
import { keyStores, Near, Contract, utils, WalletConnection } from "near-api-js";
```

Class contains two variables
```
public near: Near;
public wallet: WalletConnection;
```

Then in ``` constructor() ``` we are connecting to NEAR:
```
this.near = new Near({
  networkId: environment.NETWORK_ID,
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: environment.NODE_URL,
  walletUrl: environment.WALLET_URL,
  headers: {}
});
``` 
and creating wallet connection
```
// create wallet connection
this.wallet = new WalletConnection(this.near, "meme-museum");
```


### -- Art Service --

``` src/app/services/art.service.ts ``` represent the main functional class of dApp

We use that container to encapsulate all data and function's related to Art:
```
  public generatedDesign: any = false;
  public myDesign: any = false;
  ...
  
  async handleGenerateDesign(accountId: any) {...};
  async handleClaimDesign(seed: any) {...};
  async handleBurnDesign() {...};
  async loadArt() {...};
```

With dependency injection we are able to share everything with components. ``` src/app/components/dashboard/dashboard.component.ts ``` as an example :
```
  constructor(public artService: ArtService, private router: Router,) {}
  .....
  
  
  async loadArt() {
    await this.artService.loadArt();
  }
```

Also, we are using data from  ```src/app/services/art.service.ts``` in ``` src/app/components/dashboard/dashboard.component.html ```
```
<!-- Search -->
<div *ngIf="artService.generatedDesign" class="w-full flex items-center">
  <input type="text" name="seed"
    class="placeholder-current text-gray-500 focus:text-black dashboard-search outline-none pl-16 py-4 font-bold"
    [(ngModel)]="artService.generatedDesign.seed">
      <button (click)="artService.handleClaimDesign(artService.generatedDesign.seed)"
        class="ml-6 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-600 transform active:scale-95">
          Claim
      </button>
</div>
```

## Examples
``` src/app/services/art.service.ts ```
### - Function | No Parameters -
```
async handleBurnDesign() {...}
```

### - Function | With Parameters -
```
async handleGenerateDesign(accountId: any) {...}
```
