<template>
  <router-view></router-view>
</template>


<script>
import { mapActions} from "vuex";
export default {
  components: {
  },
  methods:{
    ...mapActions({
    autoLogin : 'tryLogin'
  }),
  },
  created(){
    console.log(this.$store.state.user);
    this.autoLogin();
  },
  mounted(){
    console.log(this.$store.getters.getUser);
  }
};
</script>



<!-- Global Styling Here -->
<style> 
/* Importing Google Fonts Here */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  background-color: #17191a;
  color: #fff;
}
</style>
