<template>
  <div>
    <h2>Register</h2>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="register">Register</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase.js' // Your firebase config export

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async register() {
      this.error = ''
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
        console.log('User registered:', userCredential.user)
        // You can redirect or do other things here
      } catch (err) {
        this.error = err.message
      }
    },
  },
}
</script>
