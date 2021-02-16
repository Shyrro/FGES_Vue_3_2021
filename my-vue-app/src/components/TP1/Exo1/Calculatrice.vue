<template>
  <div>
    <input type="text" v-model.number="number1">
    <select v-model="sign">
      <option v-for="s in signs" :key="s" :value="s">{{ s }}</option>
    </select>
    <input type="text" v-model.number="number2">
    <span> {{ result }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      number1: 0,
      signs: ['+', '-', '/', '*'],
      sign: '+',
      number2: 1,
    };
  },
  computed: {
    result(): number {
      switch (this.sign) {
        case '+':
          return this.number1 + this.number2;
        case '-':
          return this.number1 - this.number2;
        case '/':
          return this.number1 / this.number2;
        case '*':
          return this.number1 * this.number2;
      }

      return 0;
    },
  },
});
</script>

<style scoped></style>
