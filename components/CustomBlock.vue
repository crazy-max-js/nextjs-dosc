<template>
  <div class="custom-block">
    <p v-if="title" class="custom-block-title">{{ title }}</p>
    <slot/>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

const {title} = defineProps<Props>()

</script>

<style scoped lang="scss">
.custom-block {
  margin: 28px 0;
  padding: 20px 24px 20px 42px;
  border-radius: 8px;
  overflow-x: auto;
  transition: color .5s, background-color .5s;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 500;
  color: #0000008c;
  background-color: var(--vt-c-bg-soft);
  p{
    margin: 0;
  }

  .custom-block-title {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 500;
    color: var(--vt-c-text-1);
    transition: color .5s;
  }
}

.custom-block:before {
  content: "\24d8";
  position: absolute;
  font-weight: 600;
  font-size: 15px;
  top: 20px;
  left: 17px;
}
</style>