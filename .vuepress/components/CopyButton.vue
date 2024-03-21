<template>
  <button class="copy-button" @click="copyToClipboard(copyValue)">复制</button>
  <copy-toast ref="toast"></copy-toast>
</template>

<script>
import CopyToast from "./CopyToast.vue";

export default {
  components: {
    CopyToast,
  },
  props: ['copyValue'],
  methods: {
    copyToClipboard(text) {
      var textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        var successful = document.execCommand("copy"); // Security exception may be thrown by some browsers.
        if (successful) this.$refs.toast.showToast("复制成功");
        return successful;
      } catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    },
  },
};
</script>

<style lang="scss">
.copy-button {
  font-size: 14px;
  margin-left: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.copy-button {
  color: white;
  background-color: #5d67e8;
}

.copy-button:active {
  background-color: #4b55c7;
}

.dark .copy-button {
  color: white;
  background-color: #5d67e8;
}

.dark .copy-button:active {
  background-color: #4b55c7;
}
</style>
