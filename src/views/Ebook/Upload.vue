<template>
    <v-sheet
        max-width="1000"
        min-width="300"
        elevation="5"
        class="align-center justify-center mx-auto"
        style="margin: 40px; padding: 20px;"
    >
        <v-form validate-on="submit lazy" @submit.prevent="upload">
            <v-file-input
                label="点击选择文件"
                v-model="book.file"
                show-size
                chips
                clearable
            />
            <v-text-field
                v-model="book.bookname"
                label="书名"
            ></v-text-field>
            <v-text-field
                v-model="book.description"
                label="详细描述"
            ></v-text-field>
            <v-btn
                type="submit"
                class="mt-2"
            >上传</v-btn>
        </v-form>
    </v-sheet>
</template>

<script lang="ts" setup>

import { reactive } from 'vue';
import { upload_file } from '@/util/upload_file'
import { toasts } from '@/plugins/toast';
import { callApi } from '@/api/api';
import { BookUploadApi } from '@/api/ebook';


let book = reactive({
    bookname: '',
    description: '',
    file: undefined
})

async function upload() {
    if (book.file == undefined) {
        toasts.error('请选择一个文件')
        return
    }
    let url = await upload_file(book.file[0])
    callApi(BookUploadApi, {
        remote_url: url,
        name: book.bookname,
        description: book.description,
    }, () => {})
}

</script>