<template>
  <div>{{ message }}</div>
  <child :msg="message" @transform="setMessage"></child>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Child from './Child.vue';

export default defineComponent({
  data() {
    return {
      message: 'toto',
    };
  },
  components: {
    Child,
  },
  methods: {
    setMessage(msg: string) {
      this.message = msg;
    },
  },
});
</script>

<style scoped></style>
