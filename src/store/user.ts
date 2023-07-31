import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

  state: () => ({
    username: '',
    token: ''
  }),

  getters: {
    token_exist(state): boolean {
      return state.token != ''
    }
  },
  
  actions: {
    logout() {
      this.username = ''
      this.token = ''
    }
  }

})
