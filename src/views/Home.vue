<template>
  <header class="block md:flex w-full">
    <Decor  :accountId="accountId" :signIn="signIn" :signOut="signOut"/>
    <SideBar :accountId="accountId"  :signIn='signIn' :signOut='signOut'/>
    <MainLoggedIn v-if="accountId"  :accountId="accountId" :generateDesign="generateDesign" :claimDesign="claimDesign"/>
    <Main v-else :signIn="signIn"/>
  </header>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Main from '@/components/Main.vue'
import Decor from '@/components/Decor.vue'
import MainLoggedIn from '@/components/MainLoggedIn.vue'
import { wallet, CONTRACT_ID } from "@/services/near";
import { useArtDemo } from "@/composables/near"

export default {
    components: {
    SideBar,
    Main,
    Decor,
    MainLoggedIn
  },
  setup() {
    const accountId  = wallet.getAccountId();
    const {generateDesign, claimDesign} = useArtDemo();
    return {
      accountId,
      signIn: () => wallet.requestSignIn(CONTRACT_ID),
      signOut: () => {
        wallet.signOut();
        window.location.reload();
        },
      generateDesign,
      claimDesign
    }
  }
}
</script>