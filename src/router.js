import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Category from './views/Category.vue';
import Article from './views/Article.vue';
import NotFound from './views/404.vue';

import categories from './articles/index.json';

Vue.use(Router);

const promises = [];
const routes = [];
const data = [];

categories.forEach((category) => {
  promises.push(import(`./articles/${category.directory}/index.json`));
});

const prepareData = (categoriesData) => {
  categoriesData.forEach((categoryData, index) => {
    data.push({
      title: categories[index].title,
      route: categories[index].route,
      directory: categories[index].directory,
      data: categoryData.default,
    });
  });
};

const myRouter = Promise.all(promises).then((categoriesData) => {
  prepareData(categoriesData);

  // Home
  routes.push({
    path: '/',
    name: 'home',
    component: Home,
    meta: data,
  });

  data.forEach((category) => {
    // Category
    routes.push({
      path: category.route,
      name: category.directory,
      component: Category,
      meta: category.data,
    });

    // Article
    category.data.forEach((article) => {
      if ('detail' in article) {
        routes.push({
          path: article.detail.route,
          component: Article,
          meta: article,
        });
      }
    });
  });

  // NotFound
  routes.push({
    path: '*',
    component: NotFound,
  });

  return new Router({
    routes,
  });
});

export default myRouter;
