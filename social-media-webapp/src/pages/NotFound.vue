<template>
  <main-header></main-header>
  <section>
    <h2>Page not found</h2>
    <p>
      This page could not be found - maybe check out all our
      <router-link to="/home">Home</router-link>.
    </p>
  </section>
</template>

<script>
import MainHeader from '@/components/Header/MainHeader.vue';
export default{

  components:{
    MainHeader
  }

}
</script>

<style scoped>
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

}

</style>
