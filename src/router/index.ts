import { createRouter, createWebHistory } from 'vue-router';
import BookListView from '../views/BookListView.vue'
import BookDetailView from '../views/BookDetailView.vue'

const routes = [
  { path: '/', component: BookListView },
  { path: '/book/:id', component: BookDetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
