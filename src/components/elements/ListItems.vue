<template>
    <div>
        <VueSlickCarousel v-bind="settings">
            <div>
                <Item class="single-element" v-bind:image-path="require('@/assets/images/4.jpg')"/>
            </div>
            <div>
                <Item class="double-elements" v-bind:image-path="require('@/assets/images/3.jpg')"/>
                <Item class="double-elements" v-bind:image-path="require('@/assets/images/2.jpg')"/>
            </div>
            <div>
                <Item class="single-element" v-bind:image-path="require('@/assets/images/1.jpg')"/>
            </div>
            <div>
                <Item class="double-elements" v-bind:image-path="require('@/assets/images/6.jpg')"/>
                <Item class="double-elements" v-bind:image-path="require('@/assets/images/5.jpg')"/>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import Item from './Item.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

const settings: Ref = ref({
    "centerMode": true,
    "centerPadding": "0",
    "focusOnSelect": true,
    "infinite": true,
    "speed": 500,
    "variableWidth": true,
    "adaptiveHeight": true,
    "autoplay": true,
    "slidesToShow": 3
});

onMounted(() => {
    resize(window.innerWidth);
    window.addEventListener("resize", (el: any): void => {
        resize(el.target.innerWidth);
    });
});

function resize(width: number): void {
    width <= 767 ? settings.value.slidesToShow = 1 : settings.value.slidesToShow = 3;
}
</script>

<style scoped lang="scss">
.slick-slider {
    overflow-x: hidden;
}

.single-element {
    width: 92%;
    height: 544px;
}
.double-elements {
    width: 100%;
    height: 100%;
    max-height: 256px;
    
        &:first-child {
            margin-bottom: 32px;
        }
}

@media screen and (max-width: 1600px) {
    .single-element {
        height: 400px;
    }

    .double-elements {
        height: 184px;
    }
}

@media screen and (max-width: 1199px) {
    .single-element {
        height: 302px;
    }

    .double-elements {
        height: 144px;
            &:first-child {
                margin-bottom: 14px;
            }
    }
}

@media screen and (max-width: 991px) {
    .single-element {
        height: 270px;
    }

    .double-elements {
        height: 128px;
    }
}

@media screen and (max-width: 423px) {
    .single-element {
        height: 230px;
    }

    .double-elements {
        height: 108px;
    }
}
</style>
