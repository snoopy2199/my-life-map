import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Article from './views/Article.vue';
import NotFound from './views/404.vue';

import categories from './articles/index.json';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound,
  },
];

categories.forEach((category) => {
  routes.push({
    path: category.route,
    name: category.directory,
    component: Category,
  });
  routes.push({
    path: `${category.route}/:file_name`,
    name: `${category.directory}-article`,
    component: Article,
  });
});

routes.push({
  path: '*',
  component: NotFound,
});

export default new Router({
  routes,
});
