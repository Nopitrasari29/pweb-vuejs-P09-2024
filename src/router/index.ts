import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BookDetailView from '../views/BookDetailView.vue';
import AddBookView from '../views/AddBookView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/book/:id',
    name: 'book-detail',
    component: BookDetailView,
    props: true // Enable passing the id parameter to the component
  },
  {
    path: '/add-book',
    name: 'add-book',
    component: AddBookView // Halaman untuk menambah buku baru
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
