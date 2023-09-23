<template>
  <div class="">
        <div class="flex flex-col w-full">
         
        <div class="wallpaper w-full">
           <h1 class="text-7xl max-md:text-4xl mt-20  p-4 text-center font-extrabold from-green-500 via-yellow-300 to-green-800 bg-gradient-to-t bg-clip-text text-transparent">Africa best AI tools</h1>
           <h2 class="text-center text-black">A directory of ai tools developed by africans</h2>
        </div>
        
      <div class="-my-20 p-2 px-32 max-lg:px-10 max-sm:px-2 flex flex-col">
          <topcategories class=""/>
          <!-- <section id="logos" class="my-32 px-20 grid grid-cols-5 text-center items-center justify-items-center justify-center gap-4 gap-y-10">

            <img src="../assets/images/logos/google.png" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <img src="../assets/images/logos/econet.png" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <img src="../assets/images/logos/spacex.png" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <img src="../assets/images/logos/openai.png" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <img src="../assets/images/logos/clarifai.jpg" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <div></div>
            <img src="../assets/images/logos/openai.png" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <img src="../assets/images/logos/google.png" alt="" width="200" class="w-2/4 object-contain" srcset="">
            <img src="../assets/images/logos/spacex.png" alt="" width="200" class="w-2/4 object-contain" srcset="">

        </section> -->
        <!-- Search -->
        <div class="flex flex-row gap-2 border sticky mt-20 mb-5 top-5 max-md:top-2 z-10 shadow-lg text-gray-400 hover:text-black active:text-black duration-100 bg-white rounded-lg p-2 max-md:mx-5">
                <div class="w-full flex flex-row items-center p-2 gap-1 bg-gray-100 border border-gray-300 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
   <path d="M21 21l-6 -6"></path>
</svg>
                    <input type="text" placeholder="Search for a AI..." class="w-full border-none outline-none bg-gray-100 p-2">
                </div>
                <div class="w-3/12 max-md:hidden flex flex-row p-2 gap-1 bg-gray-100 border border-gray-300 rounded-md">
                   
                    <select class=" w-full border-none outline-none bg-gray-100 p-2">
                        <option selected disabled>Categories</option>
                        <option>Free</option>
                        <option>Paid</option>
                    </select>
                </div>
                <button class="w-2/12 max-md:w-4/12 text-white px-8 p-2 gap-1 bg-gradient-to-t from-purple-600 to-purple-500 border border-gray-300 rounded-md">
                    Search
                </button>
           </div>
        <section id="ai-tools" class="my-5">
          <h1 class="text-xl font-semibold">Africa AI Products</h1>
          <!-- Ai Tools -->
          <div class="grid grid-cols-4 max-md:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1 gap-4 my-5">
            <productCard v-for="(product,index) in data.products" :key="index" :productDetails="product"/>
          </div>
        </section>
      </div>
       
    </div>
  </div>
</template>

<script setup>
const data = await $fetch("/api/products");
</script>

<script>
import productCard from '~/components/product/productCard.vue'
import topcategories from '~/components/topcategories.vue';
export default {
    layout: 'default',
    components:{topcategories,productCard}
}
</script>

<style>
.wallpaper{
  background: url("assets/images/dan-meyers-IQVFVH0ajag-unsplash.jpg") no-repeat;
  background-size:cover;
  height: 550px;
  /* border-radius: 0px 0px 15px 15px; */
  background-position-y: center;
}
</style>