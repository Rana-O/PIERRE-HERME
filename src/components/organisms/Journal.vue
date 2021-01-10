<template>
  <div id="journal">ジャーナル
    <JournalItems />
  </div>
</template>

<script>
import JournalItems from '@/components/organisms/JournalItems.vue'

export default {
  name:'Journal',
  components: {
    JournalItems
  }
}
</script>

<style scoped>

</style>