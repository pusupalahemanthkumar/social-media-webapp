<template>
  <div class="sidebar-left">
    <div class="quick-action">
      <div class="action-container" v-for="menu in menuList" :key="menu.id">
        <div class="action-icon">
          <img :src="menu.imageUrl" :alt="menu.title" />
        </div>
        <span>{{ menu.title }} </span>
      </div>
    </div>
    <div class="h-line"></div>
    <div class="footer-container">
      <p>Fast Links</p>
      <div class="links-container">
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/color/48/facebook-new.png"
          alt="facebook-new"
        />
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/color/48/instagram-new--v1.png"
          alt="instagram-new--v1"
        />
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/color/48/igtv.png"
          alt="igtv"
        />
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/color/48/gmail-login.png"
          alt="gmail-login"
        />
      </div>
      <p class="author">Developed By Hemanth Kumar</p>
    </div>
  </div>
</template>

<script>
import clockIcon from "../../assets/Images/clockIcon.png";
import covidAction from "../../assets/Images/covidAction.png";
import groupAction from "../../assets/Images/groupAction.png";
import reelAction from "../../assets/Images/reelAction.png";
import gamesAction from "../../assets/Images/gamesAction.png";
import bookmarksAction  from "../../assets/Images/savedAction.png";
import musicAction from "../../assets/Images/youtubeAction.png";
import partyAction from "../../assets/Images/partyAction.png";
export default{
    data(){
        return {
            menuList : [
                {
                    id:'Event',
                    imageUrl : clockIcon,
                    title:`Event`
                },
                {
                    id: 'COVID-19',
                    imageUrl : covidAction,
                    title: `COVID-19`
                },
                {
                    id: 'My Groups',
                    imageUrl : groupAction,
                    title : `My Groups`,
                },
                {
                    id: 'Watch',
                    imageUrl : reelAction,
                    title : `Watch`,
                },
                {
                    id: 'Games',
                    imageUrl : gamesAction,
                    title : `Games`,
                },
                {
                    id: 'Bookmarks',
                    imageUrl : bookmarksAction,
                    title : `Bookmarks`,
                },
                {
                    id: 'Music',
                    imageUrl : musicAction,
                    title : `Music`,
                },
                {
                    id: 'Party',
                    imageUrl : partyAction,
                    title : `Party`,
                },
            ]

        };
    }
}

</script>

<style scoped>
.sidebar-left {
  position: sticky;
  top: 70px;
  left: 0;
  height: 80vh;
  flex: 1;
  overflow: scroll;
}
.sidebar-left .h-line {
  height: 1px;
  background: #a3a0a0;
  margin: 0rem 2rem;
}
.sidebar-left .quick-action {
  display: grid;
  grid-template-columns: auto auto;
  padding: 1rem 3.5rem;
  margin-top: 3rem;
}
.sidebar-left .footer-container {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-container p {
  color: #a3a0a0;
  font-weight: bolder;
}
.footer-container .links-container {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.footer-container .links-container img {
  margin-right: 1rem;
}
.footer-container .author {
  margin-top: 1rem;
}
.action-container {
  text-align: center;
  height: 100px;
  width: 100px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  /* box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%); */
  background-color: rgb(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.action-container .action-icon {
  width: 40px;
  height: 40px;
}
.action-container .action-icon img {
  width: 100%;
  height: 100%;
}
.action-container span {
  font-size: 0.7rem;
  font-weight: bold;
}
</style>
