<template>
  <div class="sidebar">
    <a class="sidebar__github-link" :href="config.author.github_og_url" target="_blank">
      <img class="layer" :src="config.author.github_og_image" />
      <div class="layer mask usually-hide"></div>
      <img class="layer icon usually-hide" src="../assets/GitHub-Mark-120px-plus.png" />
    </a>
    <h3 class="sidebar__title">
      {{config.title}}
    </h3>
    <div class="sidebar__menu">
      <router-link class="item" :class="{active: $route.path === '/'}" to="/">Home</router-link>
      <router-link class="item" :class="{active: $route.path === category.route}"
                   v-for="category in categories" :key="category.directory" :to="category.route">
        {{category.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
import config from '@/config/sidebar.json';
import categories from '@/articles/index.json';

export default {
  name: 'sidebar',
  data() {
    return {
      config,
      categories,
    };
  },
};
</script>

<style lang="scss">
.sidebar {
  box-sizing: border-box;
  padding: 50px 30px;
}

.sidebar__github-link {
  display: block;
  position: relative;
  margin: 15px;
  height: 190px;
  width: 190px;
  border-radius: 50%;
  overflow: hidden;

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .mask {
    background-color: white;
  }
  .icon {
    width: 80px;
    height: 80px;
    margin: 55px;
  }
  .usually-hide {
    opacity: 0;
    -webkit-transition: opacity 0.2s linear;
    transition: opacity 0.2s linear;
  }

  &:hover {
    .usually-hide {
      opacity: 0.9;
    }
  }
}

.sidebar__title {
  text-align: center;
}

.sidebar__menu {
  padding: 20px;

  .item {
    display: block;
    line-height: 2.5;
    text-decoration:none;
    color: $color-text-on-primary;

    &:hover, &.active {
      color: $color-secondary-light;
    }
  }
}
</style>
