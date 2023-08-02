<template>
  <v-sheet
    max-width="500"
    min-width="300"
    elevation="5"
    class="align-center justify-center mx-auto"
    style="margin-top: 40px; padding: 20px;"
  >
    <div class="text-h5 text-center" style="margin-bottom: 10px">注册</div>
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
      <br />
    </v-form>
  </v-sheet>
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