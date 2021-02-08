<template>
  <array-displayer
    :displayArray="sort(arrays[arrayId], sortDirection)"
  ></array-displayer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrayDisplayer from './ArrayDisplayer.vue';

export default defineComponent({
  name: 'array-filterer',
  components: {
    ArrayDisplayer,
  },
  data() {
    return {
      arrays: [
        ['Melofee', 'Pikachu', 'Carapuce'],
        ['Dark Vador', 'Luke Skywalker', 'Princess Lea'],
        ['Joey', 'Chandler', 'Monica'],
      ],
      sortDirection: 'asc',
    };
  },
  props: {
    arrayId: Number,
  },
  methods: {
    sort(array: Array<string>, sortDirection: string): Array<string> {
      if (sortDirection === 'asc') return array?.sort();

      return array?.sort((a, b) => b.localeCompare(a));
    },
  },
});
</script>

<style lang="scss" scoped></style>
