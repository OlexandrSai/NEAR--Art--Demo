<template>
  <Home/>
</template>

<script>
import Home from './views/Home.vue';

export default {
    // data () {
    //     return {
    //   loading:false,
    //   fullpage:false,
    //   isSignedIn: false,
    //   accountName: '',
    //   accountBalance: '',
    //   designs: null
    // }
    // },
  name: 'App',
  components: {
    Home
  },
  // async mounted () {
  //   near = await connect(config);
  //   console.log(near)
  //   wallet = new WalletConnection(near)
  //   console.log(wallet)
  //   this.accountName = wallet.account().accountId;
  //   console.log(this.accountName)
  //   this.isSignedIn = wallet.isSignedIn();
  //   console.log(this.isSignedIn)
  //   this.accountBalance = await (await wallet.account().getAccountBalance()).total;

  //   artContract = new nearAPI.Contract(
  //     wallet.account(),
  //     'dev-1626346633276-17321166097695',
  //     {
  //       //viewMethods: ['viewMyDesign'],
  //       changeMethods: ['viewMyDesign']
  //     }
  //   )

  //   console.log(artContract)

  //   // this.designs = await artContract.viewMyDesign()
  //   // console.log(this.designs)
  // },
  // methods: {
  //     signIn () {
  //      wallet.requestSignIn(
  //   "dev-1626346633276-17321166097695", // contract requesting access
  //     );
  //   },
  //    signOut () {
  //     wallet.signOut()
  //     this.isSignedIn = wallet.isSignedIn()
  //   }
  // }
}
</script>