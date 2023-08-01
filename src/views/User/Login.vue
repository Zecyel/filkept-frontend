<template>
    <v-card
        max-width="500"
        min-width="300"
        class="mx-auto"
        style="margin-top: 40px;"
    >
        <v-card-item>
            <v-card-title>登录</v-card-title>
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
                text="登录"
              ></v-btn>
              <a href="/static/user/register"><v-btn
                variant="text"
              >没有账号？注册一个</v-btn></a>
            </v-form>
        </v-card-text>
    </v-card>
</template>


<script lang="ts" setup>

import { reactive } from 'vue';
import { useUserStore } from '@/store/user';
import { callApi } from '@/api/api'
import { UserLoginApi } from '@/api/user/user'
import router from '@/router';

let data = reactive({
  username: '',
  password: ''
})

const userStore = useUserStore()

function submit() {
  callApi(UserLoginApi, data, (resp) => {
    userStore.username = data.username
    userStore.token = (resp as any).token
    router.push('/')
  })
}

</script>