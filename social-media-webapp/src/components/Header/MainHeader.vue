<template>
  <header>
    <div class="header-left">
      <div class="logo" to="/">
        <img src="../../assets/Images/mainLogo.png" alt="faceBook" />
      </div>
      <div class="v-line"></div>
      <div class="icon">
        <img src="../../assets/Images/searchIcon.png" alt="search" />
      </div>
      <input
        class="searchBar"
        name="searchKey"
        type="text"
        placeholder="Search"
      />
      <div class="icon">
        <img src="../../assets/Images/microphoneIcon.png" alt="search" />
      </div>
    </div>
    <div class="header-middle">
      <router-link class="icon" to="/">
        <img src="../../assets/Images/homeIcon.png" alt="Home" />
      </router-link>
      <router-link class="icon" to="/reels">
        <img src="../../assets/Images/tvIcon.png" alt="reels" />
      </router-link>
      <router-link class="icon" to="/friends">
        <img src="../../assets/Images/friendsIcon.png" alt="friends" />
      </router-link>
      <router-link class="icon" to="/saved">
        <img src="../../assets/Images/saveIcon.png" alt="saved" />
      </router-link>
    </div>
    <div class="header-right">
      <div class="user-info">
        <div class="avator">
          <img src="../../assets/Images/pic.webp" />
        </div>
        <span>Hemanth</span>
      </div>
      <div class="icon">
        <img src="../../assets/Images/messageIcon.png" alt="messager" />
      </div>
      <div class="icon">
        <img src="../../assets/Images/notificationIcon.png" alt="notification" />
      </div>
      <div class="icon">
        <img src="../../assets/Images/moreIcon.png" alt="more" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
a{
  text-decoration: none;
}
.router-link-active{
  border-bottom:  2px solid #ccc;
  transform: scale(1.3);
}
header {
  position: sticky;
  top:0;
  left:0;
  padding: 1rem 3rem;
  border-bottom: 0.5px solid #7d7b7b;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  background-color: #17191a;
}
header .logo {
  width: 25px;
  height: 25px;
}
header .icon {
  width: 20px;
  height: 20px;
  transition: all 0.5s ease-in-out;
}
header .logo img,
.icon img {
  width: 100%;
  height: 100%;
}
header .v-line {
  height: 25px;
  background-color: #a3a0a0;
  width: 0.5px;
  margin: 0rem 0.5rem;
}
header .header-left {
  display: flex;
  align-items: center;
}

.header-left .searchBar {
  background-color: #17191a;
  border: none;
  outline: none;
  margin: 0rem 0.5rem;
  padding: 0.2rem;
  font-size: 1rem;
  color: #fff;
}

.header-middle {
  display: flex;
  align-items: center;
}
.header-middle .icon {
  margin: 0rem 1rem;
}
.header-right {
  display: flex;
  align-items: center;
}
.header-right .icon {
  margin: 0rem 1rem;
}
.header-right .user-info{
    display: flex;
    align-items: center;
    margin: 0rem 2rem;
    background-image: linear-gradient(to right, #2F3C4D , #404449);
    padding: 0.4rem 2rem;
    border-radius: 15px;
    font-size: 0.9rem;
}
.header-right .avator{
    width: 25px;
    height: 25px;
    border-radius: 10px;
    margin: 0rem 0.5rem;
}
.header-right .avator img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
</style>
