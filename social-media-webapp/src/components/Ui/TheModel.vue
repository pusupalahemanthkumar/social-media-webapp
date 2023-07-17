<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show" :style="dynamicStyles">
       <slot></slot>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props :{
    show:{
        type: Boolean,
        required: true,
    },
    styles:{
        type: Object,
    }


  },

  emits: ["close"],
  computed:{
    dynamicStyles(){
        return this.styles ? this.styles : {};
    }

  },
  methods: {
    tryClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 10vh;
  left: 35%;
  width: 30%;
  height: 60vh;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0;
  overflow: hidden;
  background-color: #212224;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
