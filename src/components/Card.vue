<template>
  <div class="card">
    <a class="card__image" :href="imageLink" target="_blank">
      <img class="layer image" :src="imageUrl" />
      <div v-if="imageLink" class="layer mask usually-hide">
        <span>{{imageSite}}</span>
        <img class="open-in-new-icon" src="../assets/baseline_open_in_new_white_18dp.png" />
      </div>
    </a>
    <div class="card__content">
      <div class="wrapper">
        <div class="primary">
          <div class="title" :title="title">{{title}}</div>
          <div class="time">{{time}}</div>
        </div>
        <div class="more">
          <router-link v-if="detail" class="more-link" :to="detail.route">
            <img class="more-icon" src="../assets/baseline_call_made_black_18dp.png" />
          </router-link>
        </div>
        <div class="supporting">
          <Rating v-if="star" :star="star" />
          <div class="short">{{short}}</div>
        </div>
        <div class="tags">
          <div v-for="tag in tags" :key="tag.text"
               class="tag" :style="{'background-color': tag.color}">
            {{tag.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '@/components/Rating.vue';

export default {
  name: 'card',
  props: {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageSite: String,
    imageLink: String,
    star: Number,
    short: String,
    tags: Array,
    time: {
      type: String,
      required: true,
    },
    detail: Object,
  },
  components: {
    Rating,
  },
};
</script>

<style lang="scss">
.card {
  height: 220px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 1px rgba(60, 64, 67, .16);
}

.card__image {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 35%;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  .image {
    object-fit: cover;
  }

  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .mask {
    display: flex;
    justify-content: flex-end;
    align-items:flex-end;
    box-sizing: border-box;
    padding: 5px 10px;
    background-color: black;
    width: 100%;
    height: 100%;
    color: white;
  }

  .usually-hide {
    opacity: 0;
  }

  &:hover {
    .usually-hide {
      opacity: 0.8;
    }
  }

  .open-in-new-icon {
    margin-left: 5px;
    margin-bottom: 2px;
  }
}

.card__content {
  display: inline-block;
  vertical-align: top;
  height: 100%;
  width: 65%;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 7fr 1fr;
    grid-template-rows: 2fr 3fr 1fr;
  }

  .primary {
    grid-column: 1;
    grid-row: 1;
    padding: 10px 15px;

    .title {
      width: 230px;
      font-size: 20px;
      font-weight: bold;
      line-height: 1.7;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .time {
      font-size: 14px;
      color: #666666;
    }
  }

  .more {
    grid-column: 2;
    grid-row: 1;

    .more-link {
      display: block;
      margin: 14px 5px;
      opacity: 0.4;

      &:hover {
        opacity: 0.7;
      }
    }

    .more-icon {
      width: 25px;
      height: 25px;
    }
  }

  .supporting {
    grid-column: 1 / 3;
    grid-row: 2;
    padding: 10px 15px;
    max-height: 110px;
    overflow: hidden;

    .rating {
      margin-left: -3px;
    }
  }

  .tags {
    grid-column: 1 / 3;
    grid-row: 3;
    padding: 0 10px;

    .tag {
      display: inline-block;
      margin: 2px 3px;
      padding: 3px 10px;
      border-radius: 5px;
      font-size: 12px;
    }
  }
}
</style>
