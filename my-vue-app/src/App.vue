<template>
  <SelectArray />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SelectArray from './components/Exo2/SelectArray.vue';

export default defineComponent({
  name: 'App',
  components: {
    SelectArray,
  },
});
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
