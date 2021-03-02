<template>
  <!-- <Calculatrice />-->
  <div>
    {{ rmData }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
// import Calculatrice from './components/TP1/Exo1/Calculatrice.vue';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();

    store.commit('increment');
    axios.get('https://rickandmortyapi.com/api/character').then((response) => {
      store.commit('setData', response);
    });

    const rmData = computed(() => store.getters.getData);

    return {
      store,
      rmData
    }
  }
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
