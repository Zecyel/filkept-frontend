<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Filkept</v-app-bar-title>

    <template v-slot:append>
      <template v-if="logined()">
        <v-btn
          variant="text"
        >Hello, {{ username() }}</v-btn>
      </template>
      <template v-else>
        <v-btn
          variant="text"
        >Login</v-btn>
        <v-btn
          variant="text"
        >Register</v-btn>
      </template>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';

function logined(): boolean {
    return useUserStore().token_exist
}

function username(): string {
  return useUserStore().username
}

</script>