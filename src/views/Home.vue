<template>
  <header class="block md:flex w-full">
    <Decor :isSignedIn='isSignedIn'/>
    <SideBar :isSignedIn='isSignedIn'  v-on:signIn='signIn' v-on:signOut='signOut'/>
    <Main v-if="!isSignedIn"/>
    <MainLoggedIn v-else  :accountName='accountName' :balance='accountBalance'/>
  </header>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Main from '@/components/Main.vue'
import Decor from '@/components/Decor.vue'
import MainLoggedIn from '@/components/MainLoggedIn.vue'
export default {
    components: {
    SideBar,
    Main,
    Decor,
    MainLoggedIn
  },
}
</script>

<style>

</style>