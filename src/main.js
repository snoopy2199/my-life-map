import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

router.then((myRouter) => {
  new Vue({
    router: myRouter,
    render: h => h(App),
  }).$mount('#app');
});

