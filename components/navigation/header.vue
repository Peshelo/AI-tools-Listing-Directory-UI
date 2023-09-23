<template>
  <div class="bg-gray-700 text-green-500 text-sm p-5 px-32 max-md:px-5 flex flex-row justify-between items-center"> 
    <label class=" font-semibold">AI-GO</label>
    <ul class="flex flex-row items-center gap-5">
        <li class="text-white hover:text-green-500 cursor-pointer"><NuxtLink to="/">Home</NuxtLink></li>
        <li class="text-white hover:text-green-500 cursor-pointer"><NuxtLink to="/categories/">Categories</NuxtLink></li>
        <li class="text-white hover:text-green-500 cursor-pointer"><NuxtLink to="/discover/">Discover</NuxtLink></li>
        <li class="text-white hover:text-green-500 cursor-pointer"><NuxtLink to="/account/">Account</NuxtLink></li>
    </ul>
    <NuxtLink to="/add" class="bg-green-500 p-2 px-4 rounded-md text-white font-bold shadow-sm shadow-green-500 hover:text-green-500 hover:bg-white cursor-pointer duration-150">Add New</NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>