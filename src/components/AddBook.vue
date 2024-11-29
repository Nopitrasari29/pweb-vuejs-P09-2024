<template>
  <div>
    <h1>Tambah Buku</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="title">Judul:</label>
        <input type="text" id="title" v-model="newBook.title" required />
      </div>
      <div>
        <label for="author">Pengarang:</label>
        <input type="text" id="author" v-model="newBook.author" required />
      </div>
      <div>
        <label for="category">Kategori:</label>
        <input type="text" id="category" v-model="newBook.category" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <select id="status" v-model="newBook.status">
          <option value="available">Tersedia</option>
          <option value="borrowed">Dipinjam</option>
        </select>
      </div>
      <button type="submit">Tambah Buku</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AddBook',
  setup() {
    const newBook = ref({
      title: '',
      author: '',
      category: '',
      status: 'available'
    });

    const router = useRouter();

    const addBook = async () => {
      try {
        await axios.post('/api/books', newBook.value);
        router.push('/'); // Setelah buku ditambahkan, kembali ke halaman utama
      } catch (err) {
        alert('Gagal menambahkan buku.');
      }
    };

    return { newBook, addBook };
  }
});
</script>

<style scoped>
/* Add styles for the add book form */
</style>
