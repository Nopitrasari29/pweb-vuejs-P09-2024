<template>
  <div>
    <h1>Tambah Buku Baru</h1>
    <AddBook />  <!-- Menampilkan komponen AddBook untuk form tambah buku -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddBook from '../components/AddBook.vue';  // Impor komponen AddBook

export default defineComponent({
  name: 'AddBookView',
  components: {
    AddBook
  }
});
</script>

<style scoped>
/* Kamu bisa menambahkan gaya khusus untuk halaman tambah buku di sini */
</style>
