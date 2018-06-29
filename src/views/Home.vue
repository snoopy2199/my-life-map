<template>
  <div class="home">
    <div class="home__message">
      <span v-html="message" />
    </div>
    <div class="home__board">
      <div class="row">
        <h4 class="title">Pin Items</h4>
        <div class="item-group">
          <Mark
            v-for="pinItem in pinItems"
            :key="pinItem.title"
            :imageUrl="pinItem.image.url"
            :imageSite="pinItem.image.site"
            :imageLink="pinItem.image.link"
            :description="pinItem.message"
            :detail="pinItem.detail"
          />
        </div>
      </div>
      <div class="row">
        <h4 class="title">Latest Items</h4>
        <div class="item-group">
          <Mark
            imageUrl="https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_UY1200_CR105,0,630,1200_AL_.jpg"
            imageSite="IMDb"
            imageLink="http://www.imdb.com/title/tt2380307/"
            description="hey!"
            :detail="{
              directory: '/category1/item3.md',
              route: '/category1/item3',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

import config from '@/config/home.json';

import Mark from '@/components/Mark.vue';

export default {
  name: 'home',
  data() {
    return {
      message: config.message,
      pinItems: [],
    };
  },
  components: {
    Mark,
  },
  mounted() {
    this.findPinItems();
  },
  methods: {
    findPinItems: function findPinItems() {
      const pinItems = [];

      this.$route.meta.forEach((category) => {
        const queue = {};

        config.pin_items.forEach((pinItem, index) => {
          if (pinItem.directory === category.directory) {
            queue[pinItem.title] = {
              index,
              pinItem,
            };
          }
        });

        category.data.forEach((article) => {
          if (article.title in queue) {
            const itemInQueue = queue[article.title];
            const pinItem = _.cloneDeep(article);
            pinItem.message = itemInQueue.pinItem.message;
            pinItems[itemInQueue.index] = pinItem;
          }
        });
      });

      this.pinItems = pinItems;
    },
  },
};
</script>

<style lang="scss">
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
  .row {
    margin: 20px 50px;
  }

  .title {
    color: #4c4c4c;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .item-group {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr;
  }
}
</style>
