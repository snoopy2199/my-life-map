<template>
  <div class="home">
    <div class="home__message">
      <span>
        Say something~
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="scss">
.home {
  padding: 30px 50px;
}

.home__message {
  display: flex;
  position: relative;
  height: 70px;
  background: $color-secondary-light;
  border-radius: 20px;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 0 rgba(60, 64, 67, .16);
  padding: 20px 30px;

  span {
    display: flex;
    align-items: center;
  }
}

.home__message:after {
  content: '';
  position: absolute;
  left: 0;
  top: 70%;
  width: 0;
  height: 0;
  border: 20px solid transparent;
  border-right-color: $color-secondary-light;
  border-left: 0;
  border-bottom: 0;
  margin-top: -10px;
  margin-left: -20px;
}
</style>
