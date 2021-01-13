<template>
  <div id="journal-items">
    <div class="journal-item-container">
      <JournalItem v-for="(item, index) in items" :key="index" :image="item.image" :title="item.title" :date="item.date" />
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
  data () {
    return {
      items: [
        {image:journal.Journal1 , title: 'Saint Valentin 2021', date:'2021/01/05'},
        {image:journal.Journal2 , title: '1月のマカロンフレーバー', date:'2020/12/28'},
        {image:journal.Journal3 , title: 'WIND AND SEA 別注のマカロンを数量限定で販売いたします', date:'2020/12/17'},
        {image:journal.Journal4 , title: '12月のマカロンフレーバー', date:'2020/12/01'}
      ]
    }
  }
}
</script>

<style scoped>
  #journal-items {
    display: flex;
    flex-wrap: wrap;
  }
  .journal-item-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>