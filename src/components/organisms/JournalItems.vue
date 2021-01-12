<template>
  <div id="journal-items">
    <div class="journal-item-container">
      <JournalItem :image="journal1" title="Saint Valentin 2021" date="2021/01/05" />
    </div>
    <div class="journal-item-container">
      <JournalItem :image="journal2" title="1月のマカロンフレーバー" date="2020/12/28" />
    </div>
    <div class="journal-item-container">
      <JournalItem :image="journal3" title="WIND AND SEA 別注のマカロンを数量限定で販売いたします" date="2020/12/17" />
    </div>
    <div class="journal-item-container">
      <JournalItem :image="journal4" title="12月のマカロンフレーバー" date="2020/12/01" />
    </div>
  </div>
</template>

<script>
import JournalItem from '@/components/molecs/JournalItem.vue'
import { journal } from '@/components/atoms/images'

export default {
  name:'JournalItems',
  components: {
    JournalItem
  },
  computed: {
    journal1 () { return journal.Journal1 },
    journal2 () { return journal.Journal2 },
    journal3 () { return journal.Journal3 },
    journal4 () { return journal.Journal4 },
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