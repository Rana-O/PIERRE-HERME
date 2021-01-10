<template>
  <div class="journal-item">ジャーナルアイテム
    <JournalImage />
    <JournalText />
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
  }
}
</script>

<style scoped>

</style>