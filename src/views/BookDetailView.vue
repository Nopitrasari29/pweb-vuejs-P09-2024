<template>
  <div>
    <BookList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BookList from '../components/BookList.vue';

export default defineComponent({
  name: 'BookListView',
  components: {
    BookList
  }
});
</script>
