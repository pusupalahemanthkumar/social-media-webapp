<template>
  <the-model :show="isStoriesVisible" @close="closeStoryModalHandler" :styles="modalStyle">
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
  <the-model :show="isQuickAddVisible" @close="closeQuickAddModalHandler" :styles="{ height: 'auto'}" >
   <quick-story-add></quick-story-add>
  </the-model>
  <carousel :items-to-show="5">
    <slide v-for="(slide,index) in storyList" :key="slide">
      <story-item
        :story="slide"
        :key="slide.id + new Date().toISOString()"
        :quickAdd="index == 0"
        @view-story="viewStoryHandler"
        @add-story="openQuickAddModalHandler"
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
import QuickStoryAdd from "./QuickStoryAdd.vue";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    
    StoryItem,
    TheModel,
    QuickStoryAdd
  },
  props: ["storyList"],
  data() {
    return {
      isStoriesVisible: false,
      isQuickAddVisible: false,
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
    openStoryModalHandler() {
      this.isStoriesVisible = true;
    },
    openQuickAddModalHandler(){
      this.isQuickAddVisible = true;
    },
    closeQuickAddModalHandler(){
      this.isQuickAddVisible = false;
    },
    closeStoryModalHandler() {
      this.isStoriesVisible = false;
    },
    viewStoryHandler(data) {
      this.openStoryModalHandler();
      console.log(data);
      this.selectedStory = data;
    },
    quickStoryAddHandler(){
    }
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
