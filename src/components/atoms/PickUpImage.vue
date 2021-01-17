<template>
  <div class="pick-up-image">
    <img :src="image">
    <p class="image-text">{{ imageTitle }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name:'PickUpImage',

  props: {
    image: String as PropType<string>,
    imageTitle: String as PropType<string>
  }
})
</script>

<style scoped>
.pick-up-image {
  position: relative;
}
.pick-up-image img{
  width: 100%;
}
.pick-up-image .image-text {
  display: inline-block;
  padding: 12px 10px 6px;
  font-size: 19px;
  background-color: white;
  font-family: "adobe-caslon-pro","Yu Mincho",YuMincho,"HG明朝E","ＭＳ Ｐ明朝","ＭＳ 明朝",serif;
  position: absolute;
  background: white;
  left: 0;
  bottom: 0;
}
</style>