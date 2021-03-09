<template>
  <div>
    <input type="text" v-model="collection" />
    <table>
      <tr v-for="card in collectionCards" :key="card.name">
        <td>{{ card.cardId }}</td>
        <td>{{ card.name }}</td>
        <td>{{ card.text }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const cards = ref({});
    const collection = ref('');
    const options = {
      headers: {
        'x-rapidapi-key': '8f63c7eeddmsh9c1c7a90ad44690p1ae244jsn86d02298a4b9',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    };

    axios
      .get('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', options)
      .then(function (response) {
        cards.value = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    return {
      cards,
      collection,
    };
  },
  computed: {
    collectionCards() {
      return this.cards[this.collection]?.slice(0, 10);
    },
  },
});
</script>

<style scoped>
</style>