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
<style>
body {
    background: url('/images/background/docs-dark@tinypng.1bbe175e.png');
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
}

.VPFooter[data-v-80147a0d],
.VPNav.no-sidebar[data-v-9397ee4e] {
    background: rgba(255, 255, 255, 0.2);
}

.dark .VPFooter[data-v-80147a0d],
.dark .VPNav.no-sidebar[data-v-9397ee4e] {
    background: rgba(36, 36, 36, 0.2);
}
</style>