<template>
    <!-- <div>
        <Item v-bind:image-path="require('@/assets/1.png')"/>
        <Item v-bind:image-path="require('@/assets/2.png')"/>
        <Item v-bind:image-path="require('@/assets/3.png')"/>
    </div> -->
    <!-- Slider main container -->
    <div>
        <VueSlickCarousel v-bind="settings">
            
            <div><Item class="single-element" v-bind:image-path="require('@/assets/6.png')"/></div>
            <div><Item class="double-elements" v-bind:image-path="require('@/assets/1.png')"/><Item class="double-elements" v-bind:image-path="require('@/assets/2.png')"/></div>
            
            <div><Item class="single-element" v-bind:image-path="require('@/assets/3.png')"/></div>
            <div><Item class="double-elements" v-bind:image-path="require('@/assets/5.png')"/><Item class="double-elements" v-bind:image-path="require('@/assets/4.png')"/></div>
        </VueSlickCarousel>
    </div>

</template>

<script setup lang="ts">
import Item from './Item.vue';
import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

  const settings = {
    "centerMode": true,
  "centerPadding": "110px",
  "focusOnSelect": true,
  "infinite": true,
  "slidesToShow": 3,
  "speed": 500,
  "variableWidth": true
  }

</script>

<style scoped lang="scss">

.single-element {
    width: 96%;
    height: 544px;
}
.double-elements {
    width: 100%;
    height: 100%;
    max-height: 256px;
}
</style>
