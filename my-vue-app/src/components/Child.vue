<template>
  <button @click="transformMessage()">Transform</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    msg: String,
  },
  emits: ['transform'],
  methods: {
    transformMessage() {
      this.$emit('transform', this.msg + ' transformé');
    },
  },
});
</script>

<style scoped></style>
