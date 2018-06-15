import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Article from './views/Article.vue';
import NotFound from './views/404.vue';

import categories from './articles/index.json';

Vue.use(Router);

const promises = [];
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  }
];

categories.forEach((category) => {
  routes.push({
    path: category.route,
    name: category.directory,
    component: Category,
  });

  promises.push(import(`./articles/${category.directory}/index.json`));
});

const myRouter = Promise.all(promises).then((articlesInCategories) => {
  articlesInCategories.forEach((articles) => {
    articles.default.forEach((article) => {
      if ('detail' in article) {
        routes.push({
          path: article.detail.route,
          component: Article,
          meta: article
        });
      }
    });
  });
  routes.push({
    path: '*',
    component: NotFound,
  });

  return new Router({
    routes,
  });
});

export default myRouter;
