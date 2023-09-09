
<template>
    <h1>{{ props.title }}</h1>
</template>

<script setup lang="ts">

interface IProps {
    title: string;
}

const props = withDefaults(defineProps<IProps>(), {
    title: ""
});

</script>

<style scoped lang="scss">

</style>
