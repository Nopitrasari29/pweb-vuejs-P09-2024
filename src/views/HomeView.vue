<template>
  <div>
    <h1>Selamat datang di Perpustakaan</h1>
    <BookList />  <!-- Menampilkan komponen BookList untuk daftar buku -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookList from '../components/BookList.vue'; // Import komponen BookList

export default defineComponent({
  name: 'HomeView',
  components: {
    BookList
  }
});
</script>

<style scoped>
/* Kamu bisa menambahkan gaya khusus untuk halaman beranda di sini */
</style>
