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

    </div>
  </div>
</template>

<script>
import config from '@/config.json';

export default {
  name: 'sidebar',
  data() {
    return {
      config,
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
</style>
