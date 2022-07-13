<template>
    <section class="bg-gray-400 w-full ">
        <div class="w-full h-full linear-40 inner-shadow">

            <div class="p-4 md:px-10 md:py-14 lg:px-9 lg:py-8 xl:px-11 xl:py-12 2xl:px-12 2xl:py-14 mx-auto">

                <!-- Card -->
                <Card/>


                <!-- Footer -->
               <Footer/>

            </div>

        </div>
    </section>
</template>

<script>
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";

export default {
    components: { Card, Footer }
}
</script>