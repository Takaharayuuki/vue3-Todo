<template>
  <!-- <div class="headerBox"></div> -->
  <router-link to="/">
    <h1
      class="h-24 p-3 flex items-center bg-green-500 text-white text-2xl font-bold"
    >
      TODO APP composition API
    </h1>
  </router-link>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* .headerBox {
  @apply flex justify-between flex-col;
} */
</style>
