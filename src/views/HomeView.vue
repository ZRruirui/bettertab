<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import Tab = chrome.tabs.Tab;

const tabs: Ref<Tab[]> = ref([])
const addr = window.location.href
onMounted(async () => {
   tabs.value = await chrome.tabs.query({});
})
console.log(tabs)

</script>

<template>
  <div>
    {{JSON.stringify((tabs))}}}
    {{addr}}
    <li v-for="tab in tabs" :key="tab.id">{{tab.title}}</li>
  </div>
</template>

<style scoped>
</style>
