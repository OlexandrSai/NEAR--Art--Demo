<template>
   <main class="w-full px-8">
            <section class="mt-10">
                <div class="w-full flex justify-between">
                    <div class="">
                        <h2 class="text-2xl font-bold">Login for see more</h2>
                        <p class="text-gray-400 font-medium">here can be your art</p>
                    </div>
                    <div class="">
                        <svg class="" width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 37C0 34.7909 1.79086 33 4 33C6.20914 33 8 34.7909 8 37C8 39.2091 6.20914 41 4 41C1.79086 41 0 39.2091 0 37Z" fill="#111827"/>
                            <path d="M12 24C12 21.7909 13.7909 20 16 20C18.2091 20 20 21.7909 20 24C20 26.2091 18.2091 28 16 28C13.7909 28 12 26.2091 12 24Z" fill="#111827"/>
                            <path d="M25 13C25 10.7909 26.7909 9 29 9C31.2091 9 33 10.7909 33 13C33 15.2091 31.2091 17 29 17C26.7909 17 25 15.2091 25 13Z" fill="#111827"/>
                            <path d="M35 4C35 1.79086 36.7909 0 39 0C41.2091 0 43 1.79086 43 4C43 6.20914 41.2091 8 39 8C36.7909 8 35 6.20914 35 4Z" fill="#111827"/>
                            <path d="M1 24C1 22.3431 2.34315 21 4 21C5.65685 21 7 22.3431 7 24C7 25.6569 5.65685 27 4 27C2.34315 27 1 25.6569 1 24Z" fill="#111827"/>
                            <path d="M13 13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13C19 14.6569 17.6569 16 16 16C14.3431 16 13 14.6569 13 13Z" fill="#111827"/>
                            <path d="M36 37C36 35.3431 37.3431 34 39 34C40.6569 34 42 35.3431 42 37C42 38.6569 40.6569 40 39 40C37.3431 40 36 38.6569 36 37Z" fill="#111827"/>
                            <path d="M26 4C26 2.34315 27.3431 1 29 1C30.6569 1 32 2.34315 32 4C32 5.65685 30.6569 7 29 7C27.3431 7 26 5.65685 26 4Z" fill="#111827"/>
                            <path d="M2 13C2 11.8954 2.89543 11 4 11C5.10457 11 6 11.8954 6 13C6 14.1046 5.10457 15 4 15C2.89543 15 2 14.1046 2 13Z" fill="#111827"/>
                            <path d="M37 24C37 22.8954 37.8954 22 39 22C40.1046 22 41 22.8954 41 24C41 25.1046 40.1046 26 39 26C37.8954 26 37 25.1046 37 24Z" fill="#111827"/>
                            <path d="M27 37C27 35.8954 27.8954 35 29 35C30.1046 35 31 35.8954 31 37C31 38.1046 30.1046 39 29 39C27.8954 39 27 38.1046 27 37Z" fill="#111827"/>
                            <path d="M14 4C14 2.89543 14.8954 2 16 2C17.1046 2 18 2.89543 18 4C18 5.10457 17.1046 6 16 6C14.8954 6 14 5.10457 14 4Z" fill="#111827"/>
                            <path d="M3 4C3 3.44772 3.44772 3 4 3C4.55228 3 5 3.44772 5 4C5 4.55228 4.55228 5 4 5C3.44772 5 3 4.55228 3 4Z" fill="#111827"/>
                            <path d="M38 13C38 12.4477 38.4477 12 39 12C39.5523 12 40 12.4477 40 13C40 13.5523 39.5523 14 39 14C38.4477 14 38 13.5523 38 13Z" fill="#111827"/>
                            <path d="M15 37.5C15 36.6716 15.6716 36 16.5 36C17.3284 36 18 36.6716 18 37.5C18 38.3284 17.3284 39 16.5 39C15.6716 39 15 38.3284 15 37.5Z" fill="#111827"/>
                            <path d="M28 24C28 23.4477 28.4477 23 29 23C29.5523 23 30 23.4477 30 24C30 24.5523 29.5523 25 29 25C28.4477 25 28 24.5523 28 24Z" fill="#111827"/>
                        </svg>
                    </div>
                </div>
                <!-- Offer -->
                <div class="mt-14 block lg:flex mx-auto">
                    <!-- Offer title-->
                    <div class="text-center lg:text-left">
                        <div class="text-4xl font-medium offer ">
                            <div class="relative">
                                <h2 class="">This demo allows you </h2>
                                <div class="h-3 w-2/3 bg-blue-400 absolute top-7 " style="z-index: -1;"></div>
                            </div>
                            <div class="relative">
                                <h2 class="">to generate art</h2>
                                <div class="h-3 w-2/4 bg-blue-400 absolute top-7" style="z-index: -1;"></div>
                            </div>
                        </div>
                        <div class="mt-20 mx-auto lg:mx-0" style="max-width: 300px;">
                            <button @click="signIn" class="py-4 w-full rounded-md text-white font-medium shadow-2xl hover:shadow-none bg-blue-500 hover:bg-blue-400">
                                Login
                            </button>
                        </div>
                        <div class=" text-gray-500 mt-20 w-2/3 lg:w-full mb-10 mx-auto lg:mx-0" style="max-width: 600px;">
                            <p class="">
                                Consectetur platea ac in sapien sollicitudin massa. Congue vestibulum urna sapien quis
                                adipiscing maecenas sed. Imperdiet erat blandit duis lacus lectus eu, tortor luctus. 
                                Leo ultrices diam risus porta mauris nisl euismod libero etiam. Diam tincidunt fusce 
                                cum massa at sapien volutpat nunc. Morbi tincidunt urna, mattis sagittis auctor elementum
                                consectetur bibendum.
                            </p>
                        </div>
                    </div>
                    <!-- Animation -->
                    <div class="mx-auto px-10" style="width: 450px; height: 450px;">
                        <img src="../assets/animation-near-croped.gif" alt="" class="w-full">
                    </div>
                </div>
            </section>
        </main>
</template>

<script>
export default {
    props: {
        signIn: {
            typeof:Function,
            required:true
        }
    }
}
</script>