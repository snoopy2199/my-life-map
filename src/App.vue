<template>
  <div id="app" class="app">
    <div class="app__sidebar">
      <router-link to="/">Home</router-link>
    </div>
    <div class="app__main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

.app {
  display: -webkit-flex;
  display: flex;
  height: 100vh;
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
