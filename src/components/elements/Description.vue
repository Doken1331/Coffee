<template>
    <p>{{ props.descriptionText }}</p>
</template>

<script setup lang="ts">
interface IProps {
    descriptionText: string;
}

const props = withDefaults(defineProps<IProps>(), {
    descriptionText: ""
});
</script>

<style scoped lang="scss">

</style>
