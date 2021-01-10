<template>
  <div id="recommend-items">レコメンドアイテムズ
    <RecommendItem />
  </div>
</template>

<script>
import RecommendItem from '@/components/molecs/RecommendItem.vue'
export default {
  name:'RecommendItems',
  components: {
    RecommendItem
  }
}
</script>

<style scoped>

</style>