<template>
  <Exo1 />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Exo1 from './components/Exo1.vue'

export default defineComponent({
  name: 'App',
  components: {
    Exo1
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>