<template>
  <div>
    <input type="text" v-model="collection" />
    <input type="text" v-model="cardName">
    <table>
      <tr v-for="card in collectionCards" :key="card.name">
        <td>{{ card.cardId }}</td>
        <td>{{ card.name }}</td>
        <td>{{ card.text }}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>{{ selectedCard?.cardId }}</td>
        <td>{{ selectedCard?.name }}</td>
        <td>{{ selectedCard?.text }}</td>
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
    const cardName = ref('');
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
      cardName,
      collection,
    };
  },
  computed: {
    collectionCards() {
      // {Basic: [], Classic: [], AutreCollection: [] }
      // [{cardId, name}, {cardId, name}, {cardId, name}]
      return this.cards[this.collection]?.slice(0, 10);
    },
    selectedCard() {
      return this.collectionCards?.find(card => card.name.toLowerCase() === this.cardName.toLowerCase());
    }
  },
});
</script>

<style scoped>
</style>