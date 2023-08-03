<template>
  <v-sheet
    max-width="1000"
    min-width="300"
    elevation="5"
    class="align-center justify-center mx-auto"
    style="margin: 40px; padding: 20px;"
  >
    <div>
      <span
        class="text-h5"
      >Hello, {{ store.username }}. </span>
      <v-chip
        prepend-icon="$vuetify"
        variant="outlined"
        color="primary"
      >Verified</v-chip>
    </div>
  </v-sheet>

  <v-container
    style="margin-top: 20px;"
    class="d-flex flex-wrap justify-space-between"
  >
    <v-card
      min-width="350px"
      v-for="app in app_list"
      :key="app.name"
      :cols="app.size"
    >
      <v-img
        :src="app.icon"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        cover
      ></v-img>
      <v-card-title v-text="app.disp_name"></v-card-title>
      <v-card-text v-text="app.desc"></v-card-text>
      <v-card-actions>
        <v-btn
          color="primary"
          variant="outlined"
          @click="link(app.url)"
        >Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

</template>

<script lang="ts" setup>
import router from '@/router';
import { useUserStore } from '@/store/user';
import app_list from '@/util/app'

const store = useUserStore()

function link(s: string) {
  router.push(s)
}

</script>
