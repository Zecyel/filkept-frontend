<template>
  <v-app>

    <app-bar />


    <v-navigation-drawer>
      123
    </v-navigation-drawer>

    <v-navigation-drawer location="right">
      123
    </v-navigation-drawer>

    <v-main>

      <router-view />

    </v-main>

    <!-- <foot-bar /> -->
  </v-app>
</template>

<script lang="ts" setup>
  import AppBar from '@/layouts/main/AppBar.vue'
  import FootBar from '@/layouts/main/FootBar.vue'
</script>
