<template>
  <div class="middle-container">
    <h2 class="title">Story (6 / 14)</h2>
    <stories-list :story-list="stories"></stories-list>
    <div class="header">
      <h2>Feeds (25 new)</h2>
      <div class="actions-menu-list">
        <div class="menu-action">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/sf-regular/48/a3a0a0/settings.png"
            alt="settings"
          />
          <p>Managing</p>
        </div>
        <div class="menu-action">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/sf-regular/48/a3a0a0/filter.png"
            alt="filter"
          />
          <p>Filters</p>
        </div>
      </div>
    </div>
    <quick-post></quick-post>
    <div class="feed-list">
      <feed-item></feed-item>
      <feed-item></feed-item>
      <feed-item></feed-item>
    </div>
  </div>
</template>

<script>
import StoriesList from "./StoriesList.vue";
import QuickPost from "./QuickPost.vue";
import FeedItem from "./FeedItem.vue";

export default {
  components: {
    StoriesList,
    QuickPost,
    FeedItem,
  },
  data() {
    return {};
  },
  computed: {
    stories() {
      let stories = this.$store.getters["story/getStories"];
      let user = this.$store.getters["getUser"];
      stories.unshift({
        id: `${user._id}`,
        data: [
          {
            id: `${user._id}`,
            image: `${user.profileImage}`,
          },
        ],
      });
      return this.$store.getters["story/getStories"];
    },
  },
};
</script>

<style scoped>
.middle-container {
  /* height: 100vh; */
  flex: 2;
  color: #fff;
  overflow: hidden;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
}
.middle-container .title {
  margin: 1rem 0rem;
}

.middle-container .header {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
  margin-top: 2rem;
}
.actions-menu-list {
  display: flex;
}
.menu-action {
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}
.menu-action img {
  margin-right: 0.5rem;
}
.menu-action p {
  color: #a3a0a0;
}
.feed-list {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0rem;
  padding-bottom: 3rem;
}
</style>
