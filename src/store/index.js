import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
  const accounts = ref(new Map());
  const currentUserEmail = ref("");
  const email = ref("");
  const cart = ref(new Map());

  // Add a test account for debugging
  accounts.value.set("user@example.com", {
    firstName: "John",
    lastName: "Doe",
  });

  currentUserEmail.value = "user@example.com"; // Simulate logged-in user

  const addAccount = (email, details) => {
    accounts.value.set(email, details);
  };

  return { accounts, currentUserEmail, email, cart, addAccount};
});