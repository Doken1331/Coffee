<template>
    <div>
        <Item v-bind:image-path="require('@/assets/1.png')"/>
        <Item v-bind:image-path="require('@/assets/2.png')"/>
        <Item v-bind:image-path="require('@/assets/3.png')"/>
    </div>
</template>

<script setup lang="ts">
import Item from './Item.vue';
</script>

<style scoped lang="scss">

</style>
