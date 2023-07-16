<template>
  <main-header></main-header>
  <div class="main-container">
    <sidebar-left></sidebar-left>
    <feed-main-container></feed-main-container>
    <sidebar-right></sidebar-right>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";

import MainHeader from "@/components/Header/MainHeader.vue";
import SidebarLeft from "./SidebarLeft.vue";
import SidebarRight from "./SidebarRight.vue";
import FeedMainContainer from "./FeedContainer/FeedMainContainer.vue";
export default {
  components: {
    MainHeader,
    SidebarLeft,
    SidebarRight,
    FeedMainContainer,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
}

</style>
