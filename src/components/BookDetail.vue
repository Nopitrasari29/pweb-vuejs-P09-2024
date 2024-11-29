<template>
  <div>
    <h1>Detail Buku</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="book">
      <h2>{{ book.title }}</h2>
      <p>Pengarang: {{ book.author }}</p>
      <p>Kategori: {{ book.category }}</p>
      <p>Status: {{ book.status }}</p>
      <button @click="deleteBook">Hapus Buku</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'BookDetail',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const book = ref<any>(null);
    const loading = ref(true);
    const error = ref<string>('');

    onMounted(async () => {
      try {
        const response = await axios.get(`/api/books/${route.params.id}`);
        book.value = response.data;
      } catch (err) {
        error.value = 'Failed to load book details.';
      } finally {
        loading.value = false;
      }
    });

    const deleteBook = async () => {
      try {
        await axios.delete(`/api/books/${route.params.id}`);
        router.push('/'); // Kembali ke halaman utama setelah buku dihapus
      } catch (err) {
        error.value = 'Failed to delete book.';
      }
    };

    return { book, loading, error, deleteBook };
  }
});
</script>

<style scoped>
/* Add styles for the book details */
</style>
