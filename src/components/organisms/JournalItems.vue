<template>
  <div id="journal-items">
    <div class="journal-item-container">
      <JournalItem :journalImage="journal1" title="Saint Valentin 2021" date="2021/01/05" />
    </div>
    <div class="journal-item-container">
      <JournalItem :journalImage="journal2" title="1月のマカロンフレーバー" date="2020/12/28" />
    </div>
    <div class="journal-item-container">
      <JournalItem :journalImage="journal3" title="WIND AND SEA 別注のマカロンを数量限定で販売いたします" date="2020/12/17" />
    </div>
    <div class="journal-item-container">
      <JournalItem :journalImage="journal4" title="12月のマカロンフレーバー" date="2020/12/01" />
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
  #journal-items {
    display: flex;
    flex-wrap: wrap;
  }
  .journal-item-container {
    width: 50%;
  }
</style>