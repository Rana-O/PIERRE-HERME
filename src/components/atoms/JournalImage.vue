<template>
  <div class="journal-image">
    <img :src="journalImage">
  </div>
</template>

<script>
export default {
  name: 'JournalImage',
  props: [
    'journalImage'
  ]
}
</script>

<style scoped>

</style>