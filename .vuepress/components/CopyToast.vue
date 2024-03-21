<template>
  <div v-show="show" class="toast">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      timeoutId: null
    };
  },
  methods: {
    showToast(msg, duration = 2500) {
      this.message = msg;
      this.show = true;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.show = false;
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 60px;
  right: 20px;
  padding: 10px 20px;
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  z-index: 1000;
}
</style>
