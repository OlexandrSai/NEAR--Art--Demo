<template>
  <header class="block md:flex w-full">
    <Decor  :accountId="accountId" :signIn="signIn" :signOut="signOut"/>
    <SideBar :accountId="accountId"  v-on:signIn='signIn' v-on:signOut='signOut'/>
    <MainLoggedIn v-if="accountId"  :accountId="accountId" />
    <Main v-else :signIn="signIn"/>
  </header>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Main from '@/components/Main.vue'
import Decor from '@/components/Decor.vue'
import MainLoggedIn from '@/components/MainLoggedIn.vue'
import { wallet, CONTRACT_ID } from "@/services/near";
export default {
    components: {
    SideBar,
    Main,
    Decor,
    MainLoggedIn
  },
  setup() {
    const accountId  = wallet.getAccountId();
    return {
      accountId,
            signIn: () => wallet.requestSignIn(CONTRACT_ID),
            signOut: () => {
                wallet.signOut();
                window.location.reload();
            }
    }
  }
}
</script>

<style>

</style>