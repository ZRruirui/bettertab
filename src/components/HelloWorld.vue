<script setup lang="ts">
const tabs = await chrome.tabs.query({
  url: [
    "https://developer.chrome.com/docs/webstore/*",
    "https://developer.chrome.com/docs/extensions/*",
  ],
});
</script>

<template>
  <div class="greetings">

  </div>
</template>

<style scoped>
</style>
