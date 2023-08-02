<template>

  <v-app>
    <app-bar />

    <v-main>
      <router-view />
    </v-main>

    <!-- <foot-bar /> -->
  </v-app>
</template>

<script lang="ts" setup>
  import AppBar from '@/layouts/main/AppBar.vue'
  // import FootBar from '@/layouts/main/FootBar.vue'
</script>

<style scoped>

.bg {
  background-image: linear-gradient(to bottom right, #FC466B, #3F5EF8);
  height: 100vh;
  overflow: hidden;
}

</style>