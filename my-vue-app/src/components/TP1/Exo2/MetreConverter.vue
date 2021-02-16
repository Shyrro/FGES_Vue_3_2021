<template>
  <div>
    <input type="text" v-model.number="km" />

    <span> m : {{ m }} </span>
    <span> cm : {{ cm }} </span>
    <span> mm : {{ mm }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      km: 0,
      m: 0,
      cm: 0,
      mm: 0,
    };
  },
  watch: {
    km(value) {
      this.m = value * 1000;
      this.cm = this.m * 100;
      this.mm = this.cm * 10;
    },
  },
  //   computed: {
  //     m(): number {
  //       return this.km * 1000;
  //     },
  //     cm(): number {
  //       return this.m * 100;
  //     },
  //     mm(): number {
  //       return this.cm * 10;
  //     },
  //   },
});
</script>

<style scoped></style>
