<template>
  <!-- <Calculatrice />-->
  <router-link :to="{ path: '/' }">Calculatrice</router-link>
  <router-link :to="{ path: '/MetreConverter'}">MetreConverter</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Calculatrice from './components/TP1/Exo1/Calculatrice.vue';

export default defineComponent({
  name: 'App',
  // components: {
  //   Calculatrice,
  // },
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
