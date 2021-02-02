<template>
  <div>
    <input type="text" v-model="message">
    <span v-if="showMessage"> {{ message }} </span>
    <ul v-else>
      <li v-for="item in collection" :key="item.id">{{ item.value}}</li>
    </ul>
    <button @click="toggleMessage">Toggle</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      showMessage: true,
      message: 'Mon message',
      collection: [
        {id:0, value:'ananas'},
        {id:1, value:'pomme'},
        {id:2, value:'poire'},
        {id:3, value:'pasthèque'}
      ]
    }
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
