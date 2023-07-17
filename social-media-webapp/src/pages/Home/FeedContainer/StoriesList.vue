<template>
  <the-model :show="showModal" @close="closeModalHandler" :styles="modalStyle">
    <Carousel :autoplay="2000" :wrap-around="true">
      <Slide v-for="(slide) in  selectedStory.data" :key="slide">
        <div class="carousel__item">
          <img :src="slide.image"  alt="stories" />
        </div>
      </Slide>
      <template #addons>
        <navigation />
        <Pagination />
      </template>
    </Carousel>
  </the-model>
  <carousel :items-to-show="5">
    <slide v-for="(slide,index) in storyList" :key="slide">
      <story-item
        :story="slide"
        :key="slide.id + new Date().toISOString()"
        :quickAdd="index == 0"
        @view-story="viewStoryHandler"
      ></story-item>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import StoryItem from "./StoryItem.vue";
import TheModel from "@/components/Ui/TheModel.vue";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    
    StoryItem,
    TheModel,
  },
  props: ["storyList"],
  data() {
    return {
      showModal: false,
      modalStyle: {
        top: "10vh",
        left: "35%",
        width: "30%",
        height: "60vh",
      },
      selectedStory: null,
    };
  },
  methods: {
    openModalHandler() {
      this.showModal = true;
    },
    closeModalHandler() {
      this.showModal = false;
    },
    viewStoryHandler(data) {
      this.openModalHandler();
      console.log(data);
      this.selectedStory = data;
    },
  },
};
</script>

<style scoped>
.carousel__item {
  width: 100%;
  height: 500px;
  background-color: green;
  border-radius: 10px;
}
.carousel__item img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
