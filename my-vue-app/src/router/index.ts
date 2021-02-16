import { createRouter, createWebHashHistory } from 'vue-router';
import Calculatrice from '../components/TP1/Exo1/Calculatrice.vue';
import Exo1 from '../components/Exo1.vue';
import MetreConverter from '../components/TP1/Exo2/MetreConverter.vue';

const routes = [
  {
    path: '/',
    component: Calculatrice,
  },
  {
    path: '/Exo1',
    component: Exo1,
  },
  {
      path: '/MetreConverter',
      component: MetreConverter,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
