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
p {
    max-width: 920px;
    text-align: left;
    margin-bottom: 56px;
}

@media screen and (max-width: 423px) {
    p {
        margin-bottom: 22px;
    }
}
</style>
