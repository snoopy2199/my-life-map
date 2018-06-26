<template>
  <div class="home">
    <div class="home__message">
      <span>
        Say something~
      </span>
    </div>
    <div class="home__board">
      <div class="row">
        <h4 class="title">Pin Items</h4>
        <div class="item-group">
          <div class="item">hi</div>
          <div class="item">hi</div>
          <div class="item">hi</div>
          <div class="item">hi</div>
        </div>
      </div>
      <div class="row">
        <h4 class="title">Latest Items</h4>
        <div class="item-group">
          <div class="item">hi</div>
          <div class="item">hi</div>
          <div class="item">hi</div>
          <div class="item">hi</div>
        </div>
      </div>
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
  display: flex;
  flex-flow: column;
  height: 100%;
}

.home__message {
  display: flex;
  position: relative;
  height: 70px;
  background: $color-secondary-light;
  border-radius: 20px;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 0 rgba(60, 64, 67, .16);
  margin: 30px 50px;
  padding: 20px 30px;

  &:after {
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

  span {
    display: flex;
    align-items: center;
  }
}

.home__board {
  flex: 1 1 auto;
  display: grid;

  .row {
    grid-column: 1;
    margin: 20px 50px;
  }

  .title {
    color: #4c4c4c;
    margin-top: 0;
  }

  .item-group {
    display: grid;

    .item {
      grid-row: 1;
    }
  }
}
</style>
