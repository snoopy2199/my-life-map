import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';

import categories from './articles/index.json';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

categories.forEach((category) => {
  routes.push({
    path: category.route,
    name: category.directory,
    component: Category,
  });
});

export default new Router({
  routes,
});
