<template>
  <main class="w-full pt-10 px-8">
            <nav class="block md:flex justify-between">
                <!-- Claim by seed-->
                <div class="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute top-4 left-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    <input  type="text" placeholder="Enter seed to claim" class="bg-gray-100 border border-gray-400 rounded-full outline-none pl-14" style="min-height: 60px; min-width: 300px;">
                </div>
                <div class="flex">
                    <!-- Account name -->
                    <a href="#" class="block flex mt-6 ml-2 md:mt-0">
                        <div class="bg-blue-400 p-4 rounded-full text-white" style="background: linear-gradient(180deg, #60A5FA 0%, #2D74CB 100%);">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p class="text-md font-bold ml-4 mt-2 block md:hidden lg:block">{{accountName}} <br> <span class="text-sm font-medium text-gray-400">1 art in the property</span></p>
                    </a>
                    <!-- Balance -->
                    <div class="ml-8 mt-8 md:mt-2 font-medium">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <p>Balance</p>
                        </div>
                        <p class="text-right">
                            {{getBalance}} Ⓝ
                        </p>
                    </div>
                </div>
            </nav>
            <section class="mt-10">
                <div class="w-full flex justify-between">
                    <div class="">
                        <h2 class="text-2xl font-bold">My art in own</h2>
                        <p class="text-gray-400 font-medium">here is your art</p>
                    </div>
                    <div class="">
                        <svg class="mt-2" width="43" height="41" viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div class="my-10 p-8 rounded-md" style="background: linear-gradient(180deg, #60A5FA 0%, #2D74CB 100%);">
                    <p class="font-medium text-gray-200">ART</p>
                    <div class="block lg:flex mt-4">
                        <!-- Art image -->
                        <div class="w-96 h-96">
                            <img src="../assets/art.png" alt="art" class="mx-auto">
                        </div>
                        <!-- Art info -->
                        <div class="ml-0 my-4 lg:my-0 lg:ml-8">
                            <h3 class="text-white font-medium text-2xl mb-3">Art name</h3>
                            <!-- One row -->
                            <div class="flex font-medium text-lg tracking-wide">
                                <!-- Option -->
                                <p class="text-gray-200">Seed</p>
                                <!-- Value -->
                                <p class="text-white ml-6">156841651</p>
                                <a href="#" class="text-gray-200 hover:text-white ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                </a>
                            </div>
                            <!-- One row -->
                            <!-- One row -->
                            <div class="flex font-medium text-lg tracking-wide">
                                <!-- Option -->
                                <p class="text-gray-200">Owner</p>
                                <!-- Value -->
                                <p class="text-white ml-6">{{accountName}}</p>
                            </div>
                            <!-- One row -->
                            <!-- One row -->
                            <div class="flex font-medium text-lg tracking-wide">
                                <!-- Option -->
                                <p class="text-gray-200">Option</p>
                                <!-- Value -->
                                <p class="text-white ml-6">Value</p>
                            </div>
                            <!-- One row -->
                            <!-- One row -->
                            <div class="flex font-medium text-lg tracking-wide">
                                <!-- Option -->
                                <p class="text-gray-200">Option #2</p>
                                <!-- Value -->
                                <p class="text-white ml-6">Value #2</p>
                            </div>
                            <!-- One row -->
                            <p class ="text-white mt-3" style="max-width: 500px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate, 
                                debitis illo culpa placeat id architecto iste quasi cupiditate eveniet cumque,
                                 at natus ut pariatur, nemo et nihil consectetur laborum!
                            </p>
                        </div>  
                        <!-- Art method-->
                        <div class="ml-auto">
                            <div class="flex text-white text-lg">
                                <p class="font-medium mt-1 mr-3 hidden lg:block">Burn</p>
                                <a href="#" class="flex font-medium block border-2 border-white rounded-md mx-auto w-full m-0 py-2 lg:p-2 hover:bg-white hover:text-red-400">
                                    <p class="block lg:hidden mx-auto">Burn</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 mr-4 lg:mr-0 lg:ml-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
</template>

<script>
export default {
    props: {
        accountName: {
            typeof:String,
            required:false
        },
        balance: {
            typeof:Number,
            required: false
        }
    },
    computed: {
        getBalance () {
            return (this.balance/1000000000000000000000000).toFixed(5)
        }
    }
}
</script>

<style>

</style>