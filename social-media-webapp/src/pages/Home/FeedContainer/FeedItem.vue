<template>
  <div class="feed">
    <header>
      <div class="avator">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="author_profile"
        />
      </div>
      <div class="author-info">
        <h3>Priyanka</h3>
        <p>3 days ago</p>
      </div>
    </header>
    <div class="content-container">
      <img
        src="https://images.fonearena.com/blog/wp-content/uploads/2022/07/New-Facebook-Feed-2022.jpg"
      />
     
        <!-- <video  controls>
          <source src="../../../assets/Videos/video.mp4" type="video/mp4" width="100%" height="100%" />
        </video> -->
      <div
        v-html="
          `<div>    
                <h4><b>Android Development</b></h4>
                <br />
                <p>
                Android software development is the process by which applications are
                created for devices running the Android operating system. Google states
                that Android apps can be written using Kotlin, Java, and C++ languages
                using the Android software development kit, while using other languages is
                also possible.
                </p>
            </div>`
        "
        class="description"
      ></div>
    </div>
    <div class="actions-container">
      <div class="left-actions">
        <div class="icon-action">
          <img
            src="https://img.icons8.com/color/48/hearts.png"
            height="40"
            width="40"
            alt="hearts"
          />
          <p>31</p>
        </div>
        <div class="icon-action">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ultraviolet/40/speech-bubble--v1.png"
            alt="speech-bubble--v1"
          />
          <p>11</p>
        </div>
      </div>
      <div class="right-actions">
        <div class="icon-action">
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/fluency/48/bookmark-ribbon.png"
            alt="bookmark-ribbon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.feed {
  background-color: rgb(255, 255, 255, 0.2);
  margin: 1rem 0rem;
  border-radius: 10px;
  padding: 1rem 2rem;
}
header {
  display: flex;
}
header .avator {
  width: 40px;
  height: 40px;
  border-radius: 15px;
}
header .avator img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
header .author-info {
  font-size: 0.8rem;
  margin-left: 1rem;
}
header .author-info h3 {
}
header .author-info p {
  color: #ccc;
  font-size: 0.8rem;
}

.content-container {
  margin: 1rem 0rem;
}
.content-container img,
.content-container video {
  width: 100%;
  height: 400px;
  margin-bottom: 1rem;
}
.content-container .description {
  margin: 1rem 0rem;
}
.actions-container {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0rem;
}
.icon-action {
  margin-right: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.left-actions {
  display: flex;
}
.right-actions {
}
</style>
