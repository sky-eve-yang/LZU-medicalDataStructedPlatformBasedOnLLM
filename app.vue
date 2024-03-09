<script setup>
useHead({
  title: 'Nuxt 3 PrimeVue Starter'
})

useSeoMeta({
  title: 'MSDBL: Medical Structured Data Based by LLMs',
  description: '基于大模型技术搭建的医疗文本数据结构化平台'
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang='scss'>
  @import 'App.scss';
</style>
