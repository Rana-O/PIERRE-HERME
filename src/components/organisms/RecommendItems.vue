<template>
  <div id="recommend-items">
      <RecommendItem v-for="(item, index) in items" :key="index" :recommendImage="item.icon" :name="item.name" :price="item.price" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RecommendItem from '@/components/molecs/RecommendItem.vue'
import { recommend } from '@/components/atoms/images'

type RecommendItemsItem = {
  icon: string;
  name: string;
  price: string;
}

type DataType = {
  items: Array<RecommendItemsItem>
}

export default Vue.extend({
  name:'RecommendItems',

  components: {
    RecommendItem
  },

  data (): DataType {
    return {
      items: [
        {icon: recommend.Icon1 , name: 'マカロン 6個詰め合わせ WIND AND SEA × PIERRE HERMÉ PARIS', price: '¥3,456'},
        {icon: recommend.Icon2 , name: 'マカロン6個詰合わせ', price: '¥2,808'},
        {icon: recommend.Icon3 , name: 'マカロン15個詰合わせ', price: '¥5,940'},
        {icon: recommend.Icon4 , name: 'クロックノワゼット', price: '¥1,296'},
        {icon: recommend.Icon5 , name: 'サブレ イスパハン', price: '¥1,620'},
        {icon: recommend.Icon6 , name: 'キャレ ショコラ オ レ エルメ', price: '¥2,700'},
        {icon: recommend.Icon7 , name: 'キャレ ショコラ ノワール', price: '¥2,700'},
        {icon: recommend.Icon8 , name: 'アソリュティマン ド ショコラ 14個入り', price: '¥5,670'},
        {icon: recommend.Icon9 , name: 'マロングラッセ 6個詰合わせ', price: '¥3,888'},
        {icon: recommend.Icon10 , name: 'マロングラッセ 12個詰合わせ', price: '¥7,560'},
        {icon: recommend.Icon11 , name: 'Made in ピエール・エルメ ジュース4本詰合わせ', price: '¥3,240'},
        {icon: recommend.Icon12 , name: 'Made in ピエール・エルメ ジュース8本詰合わせ', price: '¥5,400'}
      ]
    }
  }
})
</script>

<style scoped>
  #recommend-items {
    display: flex;
    flex-wrap: wrap;
  }
  .recommend-item-container {
    width: 25%;
  }
</style>