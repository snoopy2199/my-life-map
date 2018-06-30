<template>
  <div class="article">
    <div class="article__head">
      <div class="main">
        <h1 class="title">{{$route.meta.title}}</h1>
        <div class="attribute">
          <div class="star"><Rating v-if="$route.meta.star" :star="$route.meta.star" /></div>
          <div class="time">{{$route.meta.time}}</div>
        </div>
      </div>
      <div class="tags">
        <div v-for="tag in $route.meta.tags" :key="tag.text"
             class="tag" :style="{'background-color': tag.color}">
          {{tag.text}}
        </div>
      </div>
    </div>
    <div class="article__body markdown-body" v-html="markdownHtml" />
  </div>
</template>

<script>
import showdown from 'showdown';
import Rating from '@/components/Rating.vue';
import 'github-markdown-css/github-markdown.css';

export default {
  name: 'theArticle',
  data() {
    return {
      markdownHtml: '',
    };
  },
  components: {
    Rating,
  },
  mounted() {
    import(`../articles${this.$route.meta.detail.directory}`)
      .then((module) => {
        const converter = new showdown.Converter();
        this.markdownHtml = converter.makeHtml(module.default);
      });
  },
};
</script>

<style lang="scss">
.article {
  padding: 40px 80px;
}

.article__head {
  margin-bottom: 30px;

  .main {
    display: flex;
    margin-bottom: 10px;
  }

  .title {
    flex: 1;
    margin: 0;
    line-height: 1.5;
  }

  .attribute {
    width: 120px;
  }

  .star, .time {
    float: right;
  }

  .tag {
    display: inline-block;
    margin: 2px 3px;
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 12px;
  }
}
</style>
