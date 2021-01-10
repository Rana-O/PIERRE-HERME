<template>
  <div class="journal-image">
    <img :src="image">
  </div>
</template>

<script>
export default {
  name: 'JournalImage',
  props: [
    'image'
  ]
}
</script>

<style scoped>
  .journal-image {
    margin: auto;
  }
  .journal-image img {
    width: 480px;
  }
</style>