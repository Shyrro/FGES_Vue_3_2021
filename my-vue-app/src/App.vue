<template>
  <div>
    <Cards/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
// import Calculatrice from './components/TP1/Exo1/Calculatrice.vue';
import Cards from './components/TP2/Cards.vue';

export default defineComponent({
  name: 'App',
  components: {
    Cards,
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
