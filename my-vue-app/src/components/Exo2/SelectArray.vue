<template>
  <div>
    <input type="text" v-model="arrayId" />
    <array-filterer :arrayId="arrayId"></array-filterer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrayFilterer from './ArrayFilterer.vue';

export default defineComponent({
  data() {
    return {
      arrayId: '',
    };
  },
  components: {
    ArrayFilterer,
  }
});
</script>

<style scoped></style>
