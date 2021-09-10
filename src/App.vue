<template>
  <header class="block md:flex w-full">
    <Decor :isSignedIn='isSignedIn'/>
    <SideBar :isSignedIn='isSignedIn'  v-on:signIn='signIn' v-on:signOut='signOut'/>
    <Main v-if="!isSignedIn"/>
    <MainLoggedIn v-else  :accountName='accountName' :balance='accountBalance'/>
  </header>
</template>

<script>
import SideBar from './components/SideBar.vue'
import Main from './components/Main.vue'
import Decor from './components/Decor.vue'
import MainLoggedIn from './components/MainLoggedIn.vue'
import * as nearAPI from "near-api-js"

const { connect, keyStores, WalletConnection } = nearAPI

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

let near,wallet,artContract;

export default {
    data () {
        return {
      loading:false,
      fullpage:false,
      isSignedIn: false,
      accountName: '',
      accountBalance: '',
      designs: null
    }
    },
  name: 'App',
  components: {
    SideBar,
    Main,
    Decor,
    MainLoggedIn
  },
  async mounted () {
    near = await connect(config);
    console.log(near)
    wallet = new WalletConnection(near)
    console.log(wallet)
    this.accountName = wallet.account().accountId;
    console.log(this.accountName)
    this.isSignedIn = wallet.isSignedIn();
    console.log(this.isSignedIn)
    this.accountBalance = await (await wallet.account().getAccountBalance()).total;

    artContract = new nearAPI.Contract(
      wallet.account(),
      'dev-1626346633276-17321166097695',
      {
        //viewMethods: ['viewMyDesign'],
        changeMethods: ['viewMyDesign']
      }
    )

    console.log(artContract)

    // this.designs = await artContract.viewMyDesign()
    // console.log(this.designs)
  },
  methods: {
      signIn () {
       wallet.requestSignIn(
    "dev-1626346633276-17321166097695", // contract requesting access
      );
    },
     signOut () {
      wallet.signOut()
      this.isSignedIn = wallet.isSignedIn()
    }
  }
}
</script>

<style>

</style>
