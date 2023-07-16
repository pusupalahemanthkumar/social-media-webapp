<template>
  <div class="sidebar-right">
    <div class="event-list">
      <div class="event-card">
        <p class="title">BIRTHDAY</p>
        <div class="event-body">
          <div class="profile">
            <img
              src="https://us.123rf.com/450wm/helenaak14/helenaak141703/helenaak14170300025/73020207-trendy-woman-in-sunglasses-with-drinkoutdoor-young-woman-in-sunglasses-in-the-street-and-holding.jpg?ver=6"
              alt="event"
            />
          </div>
          <p><span>Poojita Gupta</span> celebrates her Birthday today</p>
        </div>
      </div>
    </div>
    <div class="sidebar-header">
      <p>CONTACTS</p>
      <div class="sidebar-header-actions">
        <div class="action">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/a3a0a0/external-video-multimedia-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
            alt="test"
          />
        </div>
        <div class="action">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/sf-regular/48/a3a0a0/search.png"
            alt="search"
          />
        </div>
      </div>
    </div>
    <div class="user-list">
        <div class="user">
            <div class="avator">
                <img src="https://i.pinimg.com/474x/8e/40/28/8e402892ed565d53c0b9e43e4c652c48.jpg"  alt="User" />
            </div>
            <p>Poojita Gupta </p>
        </div>
        <div class="user">
            <div class="avator">
                <img src="https://www.modellingagenciesmumbai.com/blog/wp-content/uploads/2016/09/prachi-desai.jpg"  alt="User" />
            </div>
            <p>Sakshi Sharma 🟢 </p>
        </div>
        <div class="user">
            <div class="avator">
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"  alt="User" />
            </div>
            <p>Hemanth Kumar 🟢 </p>
        </div>
        <div class="user">
            <div class="avator">
                <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"  alt="User" />
            </div>
            <p>Nisha 🟢 </p>
        </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar-right {
  position: sticky;
  top: 70px;
  left: 0;
  height: 92vh;
  flex: 1;
  /* background-color: #454343; */
  overflow: scroll;
}
.event-list {
  display: flex;
  flex-direction: column;
  margin: 1rem 1.5rem;
  margin-top: 3rem;
}
.event-card {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  /* box-shadow: 0px 10px 15px 10px rgb(0 0 0 / 15%); */
  background-color: rgb(255, 255, 255, 0.2);
  padding: 0.7rem 1rem;
}
.event-card .title {
  margin: 0.7rem 0rem;
}
.event-body {
  display: flex;
}
.event-body .profile {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 0.5rem;
}
.event-body .profile img {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
.event-body span {
  color: #fff;
}
.event-body p {
  color: #a3a0a0;
}
.sidebar-header {
  margin: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sidebar-header-actions {
  display: flex;
}
.sidebar-header-actions .action {
  margin-right: 0.7rem;
}
.user-list{
    display: flex;
    flex-direction: column;
    margin: 1rem 1.5rem;

}
.user{
    display: flex;
    margin-bottom: 0.7rem;
    /* background-color: rgb(255, 255, 255, 0.2); */
    padding: 0.7rem 1rem;
    padding-left: 0;
    border-radius: 10px;
}
.user .avator{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    margin-right: 1rem;

}
.user .avator img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
}
</style>
