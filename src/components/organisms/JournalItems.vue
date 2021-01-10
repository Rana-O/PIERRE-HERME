<template>
  <div id="journal-items">
    <div class="journal-item-container">
      <JournalItem :journalImage="journal1" />
    </div>
    <div class="journal-item-container">
      <JournalItem :journalImage="journal2" />
    </div>
    <div class="journal-item-container">
      <JournalItem :journalImage="journal3" />
    </div>
    <div class="journal-item-container">
      <JournalItem :journalImage="journal4" />
    </div>
  </div>
</template>

<script>
import JournalItem from '@/components/molecs/JournalItem.vue'
import Journal1 from '@/assets/journal/journal_sv21_main.jpg'
import Journal2 from '@/assets/journal/journal_mac_flavor_202101_sumb.jpg'
import Journal3 from '@/assets/journal/journal_wind-and-sea-2020_main.jpg'
import Journal4 from '@/assets/journal/journal_epiphanie-2021_main.jpg'

export default {
  name:'JournalItems',
  components: {
    JournalItem
  },
  computed: {
    journal1 () { return Journal1 },
    journal2 () { return Journal2 },
    journal3 () { return Journal3 },
    journal4 () { return Journal4 },
  }
}
</script>

<style scoped>

</style>