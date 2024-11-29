<template>
  <div>
    <h1>Detail Buku</h1>
    <p>ID Buku: {{ id }}</p>
    <!-- Tampilkan detail buku berdasarkan id -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BookDetail',
  props: {
    id: {
      type: Number,
      required: true,
    }
  }
});
</script>
