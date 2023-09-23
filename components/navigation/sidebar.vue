<template>
    <div class="bg-black shadow-lg flex flex-col max-md:flex-row max-md:h-fit max-md:w-full max-md:justify-between justify-center h-full pt-5 max-md:p-2 text-white"> 
          <!-- <label class="texte-red-400 max-md:hidden">Side Bar</label> -->
          <div class="">
            <NuxtLink to="/" class="active:text-purple-600 flex flex-col gap-1 rounded-md md:hover:border-l-8 max-md:hover:border-b-4 max-md:my-2 border-purple-700 justify-center items-center py-6 my-5 max-md:p-2 max-md:my- duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
   <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
   <path d="M10 12h4v4h-4z"></path>
</svg>
            <label class="text-xs">Home</label>
            </NuxtLink>
          </div>
          <div class="">
            <NuxtLink to="/" class="active:text-purple-600 flex flex-col gap-1 md:hover:border-l-8 max-md:hover:border-b-4 max-md:my-2 border-purple-700 justify-center items-center py-6 my-5 max-md:p-2 max-md:my- duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
   <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
</svg>
            <label class="text-xs">Categories</label>
            </NuxtLink>
          </div>
          <div class="">
            <NuxtLink to="/" class="active:text-purple-600 flex flex-col gap-1 md:hover:border-l-8 max-md:hover:border-b-4 max-md:my-2 border-purple-700 justify-center items-center py-6 my-5 max-md:p-2 max-md:my- duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 12h6"></path>
   <path d="M12 9v6"></path>
   <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
</svg>
            <label class="text-xs">Add new Ai tool</label>
            </NuxtLink>
          </div>
          <div class="">
            <NuxtLink to="/" class="active:text-purple-600 flex flex-col gap-1 md:hover:border-l-8 max-md:hover:border-b-4 max-md:my-2 border-purple-700 justify-center items-center py-6 my-5 max-md:p-2 max-md:my- duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
</svg>
            <label class="text-xs">Favourites</label>
            </NuxtLink>
          </div>
          <div class="">
            <NuxtLink to="/" class="active:text-purple-600 flex flex-col gap-1 md:hover:border-l-8 max-md:hover:border-b-4 max-md:my-2 border-purple-700 justify-center items-center py-6 my-5 max-md:p-2 max-md:my- duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
   <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
   <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
</svg>
            <label class="text-xs">Account</label>
            </NuxtLink>
          </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>