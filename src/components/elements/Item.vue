<template>
    <img class="image" v-bind:src="props.imagePath" alt="image">
</template>

<script setup lang="ts">

interface IProps {
    imagePath: string;
}

const props = withDefaults(defineProps<IProps>(), {
    imagePath: ""
});

</script>

<style scoped lang="scss">
.image {
    width: 100%;
    margin: 32px auto;
}
</style>
