<template>
    <section class="section">
        <div class="container">
            <Title v-bind:title="'Заповедные места русской истории'" />
            <Description v-bind:description-text="descriptionText" />
        </div>
        <ListItems />
    </section>
</template>

<script setup lang="ts">
import Title from '@/components/elements/Title.vue';
import Description from '@/components/elements/Description.vue';
import ListItems from '@/components/elements/ListItems.vue';

const descriptionText: string = 'Мы продумали досуг жильцов, чтобы свободные вечера проходили с комфортом (здесь нужно описать задумку ландшафтного дизайнера с бульваром и преимущество парковой зоны внутри ЖК + наличие коммерческой недвижимости)';
</script>

<style scoped lang="scss">

</style>
