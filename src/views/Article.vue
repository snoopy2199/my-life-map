<template>
  <div class="article">
    <div class="markdown-body" v-html="markdownHtml" />
  </div>
</template>

<script>
import showdown from 'showdown';
import 'github-markdown-css/github-markdown.css';

export default {
  name: 'theArticle',
  data() {
    return {
      markdownHtml: '',
    };
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
</style>
