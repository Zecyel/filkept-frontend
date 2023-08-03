<template>
    
    <v-sheet
        max-width="1000"
        min-width="300"
        elevation="5"
        class="align-center justify-center mx-auto"
        style="margin: 40px; padding: 20px;"
    >
        <p>{{ info.name }}</p>
        <p>{{ info.userid }}</p>
        <p>{{ info.url }}</p>
        <p>{{ info.description }}</p>
    </v-sheet>
    
    <pdf
        :src="info.url"
    ></pdf>
</template>

<script lang="ts" setup>
import { callApi } from '@/api/api';
import { BookInfoApi } from '@/api/ebook';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
// @ts-ignore
import pdf from 'vue-pdf'

const bookid = parseInt(useRoute().params.bookid as string)
let info = reactive({
    name: '',
    userid: 0,
    url: '',
    description: ''
})
console.log(bookid)
callApi(BookInfoApi, { bookid }, (resp: any) => {
    info.name = resp.name
    info.userid = resp.userid
    info.url = resp.url
    info.description = resp.description
    console.log(info)
})

</script>