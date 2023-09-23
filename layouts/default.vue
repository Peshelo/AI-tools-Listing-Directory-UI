<template>

  <div class="flex flex-col h-screen overflow-auto">
    <!-- <Sidebar class="w-1/12 max-md:bottom-0 max-md:right-0"/> -->
    <NavigationHeader/>
    <slot class="bg-slate-50"/>
  </div>
</template>

<script>
import Sidebar from '../components/navigation/sidebar.vue';

export default {
    components: { Sidebar }
}
</script>

<style>
.sticka{
  position: sticky;
  position: -webkit-sticky;
  top:0;
  z-index: 1;
}
</style>