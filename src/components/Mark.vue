<template>
  <div class="mark">
    <a class="mark__image" :href="imageLink" target="_blank">
      <img class="layer image" :src="imageUrl" />
      <div class="category-label">{{category}}</div>
      <div v-if="imageLink" class="layer mask usually-hide">
        <span>{{imageSite}}</span>
        <img class="open-in-new-icon" src="../assets/baseline_open_in_new_white_18dp.png" />
      </div>
    </a>
    <div class="mark__description">
      <div class="description">
        <div class="support text" :title="title">{{title}}</div>
        <div class="main text" :title="description">{{description}}</div>
      </div>
      <router-link v-if="detail" class="more-link" :to="detail.route">
        <img class="more-icon" src="../assets/baseline_call_made_black_18dp.png" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theMark',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    imageSite: String,
    imageLink: String,
    category: String,
    title: String,
    description: String,
    detail: Object,
  },
};
</script>

<style lang="scss">
.mark {
  margin: 0 20px;
  min-width: 0;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, .08), 0 1px 3px 1px rgba(60, 64, 67, .16);
}

.mark__image {
  display: inline-block;
  position: relative;
  width: 100%;
  height: calc(100% - 55px);
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .category-label {
    position: absolute;
    background-color: $color-primary-light;
    color: $color-text-on-primary;
    top: 10px;
    right: 0;
    font-size: 14px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding: 2px 5px;
  }

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

.mark__description {
  display: flex;
  justify-content: space-between;
  margin: 0 10px;

  .description {
    overflow: hidden;

    .text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .support {
      font-size: 12px;
      color: #808080;
    }
  }

  .more-link {
    opacity: 0.4;

    &:hover {
      opacity: 0.7;
    }
  }

  .more-icon {
    margin-top: 16px;
    width: 22px;
    height: 22px;
  }
}
</style>
