import { ref } from "vue"
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
    const email = ref("");
    const account = ref(new Map())
  
    return { email, account }
  })