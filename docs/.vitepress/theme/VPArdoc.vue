<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const lang = 'ar'
</script>

<template>
    <Layout>
        <template #layout-top>
            <!-- https://vitepress.dev/guide/extending-default-theme -->
        </template>
    </Layout>
</template>
