<template>
  <div id="recommend">レコメンド
    <Title title="Recommend" />
    <RecommendItem />
  </div>
</template>

<script>
import RecommendItem from '@/components/molecs/RecommendItem.vue'
import Title from '@/components/atoms/Title.vue'

export default {
  name: 'Recommend',
  components: {
    RecommendItem,
    Title
  }
}
</script>

<style scoped>

</style>