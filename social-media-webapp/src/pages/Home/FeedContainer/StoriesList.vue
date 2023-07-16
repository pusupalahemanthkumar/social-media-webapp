<template>
    <carousel :items-to-show="5">
        <slide v-for="slide in storyList" :key="slide">
          <div class="story">
            <img :src="slide" />
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default{
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: ['storyList'],
  data() {
    return {
      
    };
  },


}

</script>

<style scoped>
.story {
  width: 150px;
  height: 200px;
  background-color: #fff;
  margin-right: 0.5rem;
}
.story img {
  width: 100%;
  height: 100%;
}

</style>