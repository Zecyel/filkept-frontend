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

    <v-sheet
        max-width="1000"
        min-width="300"
        elevation="5"
        class="align-center justify-center mx-auto"
        style="margin: 40px; padding: 20px;"
    >
        <v-list>
            <v-list-item
                v-for="book in books"
                :title="book.name"
                :key="book.name"
                :subtitle="book.description"
            ></v-list-item>
        </v-list>
    </v-sheet>

</template>

<script lang="ts" setup>
import { callApi } from '@/api/api';
import { BookListApi } from '@/api/ebook';
import router from '@/router';

let books = [] as any[];

callApi(BookListApi, {}, (resp) => {
    books = resp as any[]
    console.log(books)
})
</script>