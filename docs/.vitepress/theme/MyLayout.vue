<script setup>
import DefaultTheme from "vitepress/theme"
import Giscus from '@giscus/vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="margin-top: 2em">
      <Giscus
        repo="plantree/press-comment"
        repoId="R_kgDOIDNWUg"
        category="General"
        categoryId="DIC_kwDOIDNWUs4CRlY7" 
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
      </div>

    </template>
  </Layout>
</template>

<style>
img.pv {
  margin-top: 1em;
}
</style>
