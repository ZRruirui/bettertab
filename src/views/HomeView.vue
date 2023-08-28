<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import Tab = chrome.tabs.Tab;
import Group from "@/components/group/Group.vue"


const tabs: Ref<Tab[]> = ref([])
onMounted(async () => {
   tabs.value = await chrome.tabs.query({});
   // tabs.value = [{id: 1, title: "name1"} as Tab,{id: 2, title: "name2"} as Tab]
})
console.log(tabs)

</script>

<template>
  <el-row>
    <Group :groups='tabs'></Group>
  </el-row>
</template>

<style scoped lang='less'>
.group-container{
  display: block;
  width: 100%;
}
</style>
