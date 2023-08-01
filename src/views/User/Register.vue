<template>
    <v-card
        max-width="500"
        min-width="300"
        class="mx-auto"
        style="margin-top: 40px;"
    >
        <v-card-item>
            <v-card-title>注册</v-card-title>
        </v-card-item>
        <v-card-text>
            <v-form validate-on="submit lazy" @submit.prevent="submit">
              <v-text-field
                v-model="data.username"
                label="用户名"
              ></v-text-field>
              <v-text-field
                v-model="data.password"
                label="密码"
              ></v-text-field>
              <v-btn
                type="submit"
                block
                class="mt-2"
                text="Submit"
              ></v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>

import { callApi } from '@/api/api';
import { UserRegisterApi } from '@/api/user/user';
import router from '@/router';
import { reactive } from 'vue';

let data = reactive({
    username: '',
    password: ''
})

function submit() {
    callApi(UserRegisterApi, data, (resp) => {
      router.push('/user/login')
    })
}

</script>