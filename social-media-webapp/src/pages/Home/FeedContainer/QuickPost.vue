<template>
  <div class="quick-post-container">
    <div class="avator">
      <img
        src="https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg"
      />
    </div>
    <input type="text" class="input" />
    <button>
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios-filled/50/a3a0a0/add--v1.png"
        alt="add--v1"
      />
    </button>
  </div>
</template>

<script></script>

<style scoped>
.quick-post-container {
  display: flex;
}
.quick-post-container .avator {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 1rem;
}
.quick-post-container .avator img {
  width: 100%;
  height: 100%;
  border-radius: 25px;
}
.quick-post-container input {
  border-radius: 10px;
  border: none;
  outline: none;
  background: #1e1f20;
  width: 85%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.quick-post-container button {
  padding: 0.5rem 1rem;
  /* background: #a3a0a0; */
  color: #fff;
  background: #1e1f20;
  border: none;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
