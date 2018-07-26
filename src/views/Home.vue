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
            v-for="latestItem in latestItems"
            :key="latestItem.title"
            :imageUrl="latestItem.image.url"
            :imageSite="latestItem.image.site"
            :imageLink="latestItem.image.link"
            :description="latestItem.time"
            :detail="latestItem.detail"
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
      latestItems: [],
    };
  },
  components: {
    Mark,
  },
  mounted() {
    this.findPinItems();
    this.findLatestItems(4);
  },
  methods: {
    findPinItems() {
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
    findLatestItems(number) {
      let latestItems = [];

      this.$route.meta.forEach((category) => {
        latestItems = latestItems.concat(category.data.slice(0, number));
      });

      latestItems.sort((item1, item2) => {
        let time1 = this.parseTimeStringToDate(item1.time);
        let time2 = this.parseTimeStringToDate(item2.time);

        time1 = Number.isNaN(time1.getTime()) ? 0 : time1;
        time2 = Number.isNaN(time2.getTime()) ? 0 : time2;

        return time2 - time1;
      });

      this.latestItems = latestItems.slice(0, number);
    },
    parseTimeStringToDate(timeString) {
      // For FireFox: '2018/7' => invalid date
      return timeString.split('/').length === 2 ? new Date(`${timeString}/1`) : new Date(timeString);
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
    margin: 3% 50px;
  }

  .title {
    color: #4c4c4c;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .item-group {
    display: grid;
    grid-template: auto / 1fr 1fr 1fr 1fr;
    height: 28vh;
  }
}
</style>
