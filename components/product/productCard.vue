<template>
  <NuxtLink :to="'./product/'+ productDetails.id">
  <div class="bg-white hover:shadow-2xl duration-200 border p-3 rounded-lg">
    <img src="@/assets/images/dan-meyers-IQVFVH0ajag-unsplash.jpg" width="100" class="w-full h-fit object-cover rounded-md" alt="">
    <div class="flex flex-row justify-between items-center my-2">
        <h4 class="text-lg font-semibold">{{ productDetails.name }}</h4>
        <div class="flex flex-row gap-2">
            <label v-for="(cat,index) in productDetails.categories" :key="index" class="text-xs rounded-md p-2 px-4 text-black bg-green-300">{{ cat }}</label>
            <!-- <label class="text-xs rounded-md p-2 text-black bg-green-300">Free</label> -->
        </div>
    </div>
    <p class="text-justify text-sm text-gray-400">{{ productDetails.description.slice(0,120)}}...</p>
    <div class="flex flex-row border-t mt-4 pt-3 justify-between items-center my-2">
        <h4 class="text-md font-regular">Pricing: <label class="text-blue-500">{{ productDetails.pricing}}</label></h4>
        <div class="flex flex-row gap-2">
            <label class="text-xs rounded-md p-2 px-4 text-orange-500 bg-orange-200">{{ productDetails.rating }}</label>
        </div>
    </div>
    <!-- <p>{{ productDetails }}</p> -->
  </div>
</NuxtLink>
</template>



<script>
export default {
  props:{
    productDetails:{
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>