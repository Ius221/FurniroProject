<template>
  <the-header />
  <div>
    <router-view />
  </div>
  <the-footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  components: { TheHeader, TheFooter },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: 'Poppins', sans-serif;
}
</style>
