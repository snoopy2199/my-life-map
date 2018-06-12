<template>
  <div class="category">
    <div v-for="article in articles" :key="article.directory">
      {{article.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'category',
  data() {
    return {
      articles: [],
    };
  },
  watch: {
    '$route.name': function getArticles(val) {
      this.getArticles(val);
    },
  },
  mounted() {
    this.getArticles(this.$route.name);
  },
  methods: {
    getArticles: function getArticles(directory) {
      import(`../articles/${directory}/index.json`).then((module) => {
        this.articles = module.default;
      });
    },
  },
};
</script>
