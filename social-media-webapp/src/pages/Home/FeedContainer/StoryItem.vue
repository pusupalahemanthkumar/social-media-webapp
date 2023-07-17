<template>
  <div class="content">
      <div class="content-overlay"></div>
      <img
        class="content-image"
        :src="image"
        :alt="'image'"
      />
      <div class="content-details fadeIn-bottom">
        <img width="48" height="48" src="https://img.icons8.com/color/48/add--v1.png" alt="add--v1" v-if="quickAdd"/>
        <img width="48" height="48" src="https://img.icons8.com/color/48/video-stabilization.png" alt="video-stabilization" v-if="!quickAdd"/>
      </div>
  </div>
</template>

<script>

export default{
    props: ['image', 'quickAdd']
}

</script>

<style scoped>
.content {
  position: relative;
  background-color: #fff;
  width: 150px;
  height: 200px;
  overflow: hidden;
  border: rgb(48, 88, 51) 2px solid;
  border-radius: 10px;
}
.content img{
    width: 100%;
    height: 100%;
}

.content .content-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  top: 30;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content:hover .content-overlay
{
  opacity: 1;
}

.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
.content-details img{
    width: 30px;
    height: 30px;
}

.content:hover .content-details 
{
  top: 70%;
  left: 50%;
  opacity: 1;
}


.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}

.fadeIn-top {
  top: 20%;
}

.fadeIn-left {
  left: 20%;
}

.fadeIn-right {
  left: 80%;
}
</style>
