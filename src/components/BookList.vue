<template>
  <div>
    <h1>Daftar Buku</h1>

    <!-- Menampilkan status loading -->
    <div v-if="isLoading">Loading...</div>
    
    <!-- Menampilkan error jika ada masalah -->
    <div v-else-if="error">{{ error }}</div>

    <!-- Menampilkan daftar buku jika tidak ada error dan loading selesai -->
    <ul v-else>
      <li v-for="book in books" :key="book._id">
        <h2>{{ book.title }}</h2>
        <p>Author: {{ book.author }}</p>
        <p>Rating: {{ book.rating.average }} ({{ book.rating.count }} votes)</p>
        <p>Published: {{ new Date(book.publishedDate).toLocaleDateString() }}</p>
        <p>Publisher: {{ book.publisher }}</p>
        <p>Description: {{ book.description }}</p>
        <img :src="book.coverImage" alt="Cover Image" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

// Tipe data untuk buku
interface Book {
  _id: string;
  title: string;
  author: string;
  rating: {
    average: number;
    count: number;
  };
  publishedDate: string;
  publisher: string;
  description: string;
  coverImage: string;
}

export default defineComponent({
  name: 'BookList',
  setup() {
    // State untuk daftar buku, status loading, dan error
    const books = ref<Book[]>([]); // Daftar buku
    const isLoading = ref<boolean>(true); // Status loading
    const error = ref<string | null>(null); // Error

    // Fungsi untuk mengambil data buku dari API
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:3000/book'); // Endpoint API
        
        if (response.data.status === 'success' && Array.isArray(response.data.data)) {
          books.value = response.data.data; // Simpan data buku di state
        } else {
          error.value = 'Data buku tidak ditemukan'; // Jika data tidak sesuai
        }
      } catch (err) {
        // Tangani error jika ada masalah dengan pengambilan data
        console.error('Error fetching books:', err);
        error.value = 'Terjadi kesalahan saat mengambil data.';
      } finally {
        // Set loading ke false setelah data berhasil diambil
        isLoading.value = false;
      }
    };

    // Panggil fungsi fetchBooks saat komponen dimuat
    onMounted(fetchBooks);

    return {
      books,
      isLoading,
      error,
    };
  },
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
