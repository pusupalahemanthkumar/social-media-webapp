<template>
  <div class="container">
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="ring"></div>
    <div class="loading">Loading...</div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.ring {
  width: 200px;
  height: 200px;
  border: 12px solid transparent;
  border-radius: 50%;
  position: absolute;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.ring:nth-child(1) {
  border-bottom-color: #28ec32;
  animation-name: rotate1;
}

.ring:nth-child(2) {
  border-right-color: #47bdb3;
  animation-name: rotate2;
}
.ring:nth-child(3) {
  border-top-color: #f7fa3c;
  animation-name: rotate3;
}

.ring:nth-child(4) {
  border-left-color: #e474cc;
  animation-name: rotate4;
}

.loading {
  color: #fff;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation-name: fadeInOut;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0;
}
@keyframes rotate1 {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(360deg);
  }
  50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(0);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-360deg);
  }
  50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes rotate3 {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(360deg);
  }
  50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(0);
  }
}
@keyframes rotate4 {
  0% {
    transform: rotateZ(0);
  }
  25% {
    transform: rotateZ(-360deg);
  }
  50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(0);
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes ringScale {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}
</style>
