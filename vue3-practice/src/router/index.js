import Home from '@/components/Home.vue';
import ParentCounter from '@/components/ParentCounter.vue';
import StyleComponent from '@/components/StyleComponent.vue';
import Table from '@/components/Table.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home', name: 'Home', component: Home
  },
  {
    path: '/table', name: 'Table', component: Table
  },
  {
    path: '/styleComponent', name: 'StyleComponent', component: StyleComponent
  },
  {
    path: '/counter', name: 'ParentCounter', component: ParentCounter,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;