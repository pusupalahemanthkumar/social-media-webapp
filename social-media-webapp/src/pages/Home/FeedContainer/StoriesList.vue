<template>
    <carousel :items-to-show="5">
        <slide v-for="(slide,index) in storyList" :key="slide">
            <story-item :image="slide" :key="slide" :quickAdd="index==0"></story-item>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import StoryItem from "./StoryItem.vue";

export default{
  components: {
    Carousel,
    Slide,
    Navigation,
    StoryItem,
  },
  props: ['storyList'],
  data() {
    return {
      
    };
  },


}

</script>

<style scoped>

</style>