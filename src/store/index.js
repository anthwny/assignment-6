import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
  const accounts = ref(new Map());

  const addAccount = (email, details) => {
    accounts.value.set(email, details);
  };

  return { accounts, addAccount };
});