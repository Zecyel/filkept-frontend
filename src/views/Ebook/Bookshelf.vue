<template>

    <v-sheet
        max-width="1000"
        min-width="300"
        elevation="5"
        class="align-center justify-center mx-auto"
        style="margin: 40px; padding: 20px;"
    >
        <v-btn
            variant="outlined"
            color="primary"
            @click="router.push('/ebook/upload')"
        >Upload New Book</v-btn>
    </v-sheet>

</template>

<script lang="ts" setup>
import router from '@/router';

</script>