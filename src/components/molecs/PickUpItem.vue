<template>
  <div class="pick-up-item">
    <PickUpImage :image="image" :imageTitle="imageTitle" />
    <PickUpText :pickUpText="pickUpText" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import PickUpImage from '@/components/atoms/PickUpImage.vue'
import PickUpText from '@/components/atoms/PickUpText.vue'

export default Vue.extend({
  name:'PickUpItem',

  components: {
    PickUpImage,
    PickUpText
  },

  props: {
    image: String as PropType<string>,
    pickUpText: String as PropType<string>,
    imageTitle: String as PropType<string>
  }
})
</script>

<style scoped>
  .pick-up-item {
    width: 50%;
  }
</style>