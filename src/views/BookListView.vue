<template>
  <div>
    <h1 class="text-3xl font-bold text-center my-8">Daftar Buku</h1>

    <!-- Menampilkan status loading -->
    <div v-if="isLoading" class="text-center text-xl font-bold">Loading...</div>

    <!-- Menampilkan error jika ada masalah -->
    <div v-else-if="error" class="text-center text-xl text-red-500">{{ error }}</div>

    <!-- Menampilkan daftar buku jika tidak ada error dan loading selesai -->
    <div v-else>
      <ul class="space-y-4">
        <li v-for="book in books" :key="book._id" class="border p-4 rounded-lg shadow-md">
          <RouterLink :to="`/book/${book._id}`" class="block text-lg font-semibold hover:text-blue-600">
            {{ book.title }}
          </RouterLink>
          <p>Author: {{ book.author }}</p>
          <p>Rating: {{ book.rating.average }} ({{ book.rating.count }} votes)</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

// Tipe data untuk buku
interface Book {
  _id: string;
  title: string;
  author: string;
  rating: {
    average: number;
    count: number;
  };
}

export default defineComponent({
  name: 'BookListView',
  components: {
    RouterLink
  },
  setup() {
    // State untuk daftar buku, status loading, dan error
    const books = ref<Book[]>([]);
    const isLoading = ref<boolean>(true);
    const error = ref<string | null>(null);

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
        error.value = 'Terjadi kesalahan saat mengambil data.';
      } finally {
        isLoading.value = false;
      }
    };

    // Panggil fungsi fetchBooks saat komponen dimuat
    onMounted(fetchBooks);

    return {
      books,
      isLoading,
      error
    };
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

li a {
  text-decoration: none;
  color: #000;
}

li a:hover {
  color: #007BFF;
}

li p {
  margin: 4px 0;
}

li img {
  width: 100px;
  height: 150px;
  object-fit: cover;
}
</style>
