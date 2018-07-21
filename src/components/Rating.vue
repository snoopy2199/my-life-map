<template>
  <div class="rating">
    <div v-for="i in 5" :key="`star${i}`" class="rating__star">
      <img v-if="calculateStarType(i) === 1" src="../assets/baseline-star-24px.svg"/>
      <img v-else-if="calculateStarType(i) === 0.5" src="../assets/baseline-star_half-24px.svg"/>
      <img v-else src="../assets/baseline-star_border-24px.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    star: {
      required: true,
      validator: function validator(value) {
        return (value >= 0) && (value <= 5);
      },
    },
  },
  methods: {
    calculateStarType(number) {
      if (this.star >= number) {
        return 1;
      } else if (this.star + 0.5 >= number) {
        return 0.5;
      }

      return 0;
    },
  },
};
</script>

<style lang="scss">
.rating__star {
  display: inline-block;
  width: 18px;

  img {
    width: 20px;
  }
}
</style>
