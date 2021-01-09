<template>
  <div class="pick-up-item">
    <PickUpImage :image="image" :imageTitle="imageTitle" />
    <PickUpText :pickUpText="pickUpText" />
  </div>
</template>

<script>
import PickUpImage from '@/components/atoms/PickUpImage.vue'
import PickUpText from '@/components/atoms/PickUpText.vue'

export default {
  name:'PickUpItem',
  components: {
    PickUpImage,
    PickUpText
  },
  props: [
    'image',
    'pickUpText',
    'imageTitle'
  ],
}
</script>

<style scoped>

</style>