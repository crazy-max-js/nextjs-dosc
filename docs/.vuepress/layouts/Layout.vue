<script setup lang="ts">
import {ref,onMounted} from "vue"
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
const isDarkTheme = ref(false)
onMounted(()=>{
  const mutationObserver = new MutationObserver(() => {
    isDarkTheme.value = document.querySelector('html').className === 'dark'
  })
  mutationObserver.observe(document.querySelector('html'), {
    attributes: true
  })
})



</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <CommentService :darkmode="isDarkTheme" />
    </template>
  </ParentLayout>
</template>


<style scoped>

</style>