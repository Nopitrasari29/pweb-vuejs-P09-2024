<template>
  <div>
    <h1>Daftar Buku</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="books.length">
      <li v-for="book in books" :key="book._id"> <!-- Ganti book.id dengan book._id -->
        <router-link :to="'/book/' + book._id">{{ book.title }}</router-link> <!-- Ganti book.id dengan book._id -->
        - {{ book.author }} 
        - {{ book.category || 'N/A' }}  <!-- Jika category tidak ada, tampilkan 'N/A' -->
        - {{ book.status || 'N/A' }}     <!-- Jika status tidak ada, tampilkan 'N/A' -->
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'BookList',
  setup() {
    const books = ref<any[]>([]);
    const loading = ref(true);
    const error = ref<string>('');

    onMounted(async () => {
      try {
        const response = await axios.get('/api/books');
        console.log(response.data);  // Pastikan struktur data yang diterima sesuai
        books.value = response.data;
      } catch (err) {
        error.value = 'Failed to load books.';
      } finally {
        loading.value = false;
      }
    });

    return { books, loading, error };
  }
});
</script>

<style scoped>
/* Styling untuk daftar buku */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

img {
  width: 100px;
  height: 150px;
  object-fit: cover;
}
</style>
