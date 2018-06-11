<template>
  <div id="app" class="app">
    <div class="app__sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="app__main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

.app {
  display: -webkit-flex;
  display: flex;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app__sidebar {
  -webkit-flex: none;
  flex: none;
  width: 280px;
  overflow-y: scroll;
  background-color: $color-primary;
  color: $color-text-on-primary;
}
.app__main {
  -webkit-flex: 1;
  flex: 1;
  overflow-y: scroll;
}
</style>
