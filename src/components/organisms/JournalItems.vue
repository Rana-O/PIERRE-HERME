<template>
  <div id="journal-items">ジャーナルアイテムズ
    <JournalItem />
  </div>
</template>

<script>
import JournalItem from '@/components/molecs/JournalItem.vue'
export default {
  name:'JournalItems',
  components: {
    JournalItem
  }
}
</script>

<style scoped>

</style>