<template>
  <ul>
    <li v-for="item in displayArray" :key="item">{{ item }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
      displayArray: [],
  }
});
</script>

<style scoped></style>
