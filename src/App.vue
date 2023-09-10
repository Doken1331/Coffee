<template>
    <div id="app">
        <Header />
        <MainContent />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import MainContent from '@/components/MainContent.vue'
</script>

<style scoped lang="scss">
@import url('@/assets/styles/main.scss');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 88px;
}
</style>
