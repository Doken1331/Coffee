<template>
    <img v-bind:src="props.imagePath" alt="image">
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

</style>
