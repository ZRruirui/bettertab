<script lang='ts' setup>
  import { ref } from 'vue'
  const activeIDs = ref(['1'])
  const {groups} = defineProps(['groups'])
  console.log(groups)
</script>
<template>
  <div class='group-container'>
    <el-collapse v-model='activeIDs'>
      <el-collapse-item :title='group.title' :name='group.id' v-for='group in groups' :key='group.id'>
        <div>
          Consistent with real life: in line with the process and logic of real
          life, and comply with languages and habits that the users are used to;
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
          as: design style, icons and texts, position of elements, etc.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style scoped lang='less'>
.group-container{
  display: block;
}
</style>

