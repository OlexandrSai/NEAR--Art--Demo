<template>
  <section v-if="accountId">
        <div style="z-index: -1;" class="absolute hidden md:block top-80 left-64">
            <img src="../assets/decor-blue.png" alt="">
        </div>
        <div style="z-index: -1;" class="absolute hidden md:block top-32 right-96">
            <img src="../assets/decor-green.png" alt="">
        </div>
        <div style="z-index: -1;" class="absolute bottom-0 right-16">
            <img src="../assets/decor-red.png" alt="">
        </div>
    </section>
</template>

<script>
export default {
    props: {
        accountId: {
            typeof:String,
            required:true
        }
    }
}
</script>