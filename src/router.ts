import Vue from 'vue';
import Router from 'vue-router';
import Heroes from './views/Heroes.vue';
import Dashboard from './views/Dashboard.vue';
import HeroDetail from './views/HeroDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes,
    },
    {
      path: '/detail/:id',
      component: HeroDetail,
      props: true,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});
