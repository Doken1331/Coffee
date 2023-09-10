
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
h1 {
    text-align: left;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 16px;
}

@media screen and (max-width: 767px) {
    h1 {
        font-size: 32px;
        line-height: 32px;
    }
}

@media screen and (max-width: 423px) {
    h1 {
        text-align: center;
    }
}
</style>
