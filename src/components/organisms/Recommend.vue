<template>
  <div id="recommend">レコメンド
    <Title title="Recommend" />
    <RecommendItems />
  </div>
</template>

<script>
import RecommendItems from '@/components/organisms/RecommendItems.vue'
import Title from '@/components/atoms/Title.vue'

export default {
  name: 'Recommend',
  components: {
    RecommendItems,
    Title
  }
}
</script>

<style scoped>

</style>