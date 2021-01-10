<template>
  <div class="journal-item">
    <JournalImage :image="image"/>
    <JournalText :title="title" :date="date" />
  </div>
</template>

<script>
import JournalImage from '@/components/atoms/JournalImage.vue'
import JournalText from '@/components/atoms/JournalText.vue'

export default {
  name: 'JournalItem',
  components: {
    JournalImage,
    JournalText
  },
  props: [
    'image',
    'title',
    'date'
  ]
}
</script>

<style scoped>

</style>