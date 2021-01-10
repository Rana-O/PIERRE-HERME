<template>
  <div id="recommend-items">レコメンドアイテムズ
    <RecommendItem :recommendImage="icon1" name="HOGE" price="¥1,234" />
  </div>
</template>

<script>
import RecommendItem from '@/components/molecs/RecommendItem.vue'
import Icon1 from '@/assets/recommend/005398-1.jpg'
export default {
  name:'RecommendItems',
  components: {
    RecommendItem
  },
  computed: {
    icon1 () { return Icon1 },
  }
}
</script>

<style scoped>

</style>