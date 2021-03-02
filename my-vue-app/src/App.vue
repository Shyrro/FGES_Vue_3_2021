<template>
  <!-- <Calculatrice />-->
  <div>
    {{ cards[0] }}
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
    const cards = ref([]);
    const options = {
      headers: {
        'x-rapidapi-key': '8f63c7eeddmsh9c1c7a90ad44690p1ae244jsn86d02298a4b9',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };

    axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', options).then(function (response) {
      // console.log(response.data["Basic"]);
      cards.value = response.data["Basic"];
    }).catch(function (error) {
      console.error(error);
    });
    
    return {
      cards,
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
