<script setup lang="ts">
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <CommentService />
    </template>
  </ParentLayout>
</template>


<style scoped>

</style>