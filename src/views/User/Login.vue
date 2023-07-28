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
                v-model="username"
                label="用户名"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="密码"
              ></v-text-field>
              <v-btn
                :loading="loading"
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
import { ref } from 'vue'
import { callApi } from '@/api/api'
import { UserLoginApi } from '@/api/user/user'

let username = ref('')
let password = ref('')
let loading = false

function submit() {
  console.log(username.value)
  console.log(password.value)
  let userInfo: UserLoginApi = {
    payload: {
      username: username.value,
      password: password.value
    }
  }
  callApi(userInfo)
}

</script>