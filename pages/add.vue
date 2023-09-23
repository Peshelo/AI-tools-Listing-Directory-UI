<template>
    <div class="my-10 mx-60">
      <h1 class=" font-bold text-3xl my-2">Submit Listing</h1>
  
      <form @submit.prevent="">
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Title</label>
              <input type="text" class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5">
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">URL</label>
              <input type="text" class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5">
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Description</label>
              <textarea class="w-full h-32 border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder=""></textarea>
          </div>
          <div class="field mb-5">
              <label class="inline-block text-sm text-gray-600">Platforms</label><br>
              <label class="inline-block mb-2 text-xs text-gray-600">Please select any platforms supported by your AI tool</label>
              <select class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="">
              <option>Web App</option>
              <option>Android</option>
              <option>iOs</option>
              <option>Console</option>
              </select>
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Category</label>
              <select class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="">
              <option>Generative</option>
              <option>Graphic</option>
              <option>Gaming</option>
              </select>
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Pricing</label>
              <select class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="">
              <option>Free</option>
              <option>Free Trial</option>
              <option>Premium</option>
              </select>
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Creator</label>
              <input type="text" class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5">
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Images (Optional)</label>
              <input type="file" class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="">
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Tags (Comma separated)</label>
              <input type="text" class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="ai,africa,game">
          </div>
          <div class="field mb-5">
              <label class="inline-block mb-1 text-sm text-gray-600">Pricing</label>
              <select class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="">
              <option>Personal</option>
              <option>Open Source</option>
              <option>Company</option>
              </select>
          </div>
          <div class="field mb-5">
              <label class="inline-block text-sm text-gray-600">Affiliate Program (Optional)</label><br>
              <label class="inline-block mb-2 text-xs text-gray-400">If you have an affiliate program for your AI tool, pleas include the lonk to the application page below. While this is not a requirement, AI tools with an affiliate program will be prioritized for approval</label>
              <input type="text" class="w-full border outline-none border-gray-300 rounded-md focus:border-green-400 sm:text-sm focus:ring-4 focus:ring-green-500/30 focus:border-green-500/50 p-2.5" placeholder="">
          </div>
          <div class="flex flex-row text-sm items-center">
            <input type="checkbox" name="t/c" id="">
            <label class="ml-2"> I have agreed to the <NuxtLink to="/" class="text-blue-400">terms and conditions</NuxtLink></label>
          </div>
          <button type="submit" class="mt-5 bg-green-500 p-2 px-4 rounded-md text-white font-bold shadow-sm shadow-green-500 hover:text-green-500 hover:bg-white cursor-pointer duration-150">Submit AI Tool</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>