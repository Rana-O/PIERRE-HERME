<template>
  <div id="recommend">レコメンド
    <Title title="Recommend" />
    <RecommendItems />
    <Button />
  </div>
</template>

<script>
import RecommendItems from '@/components/organisms/RecommendItems.vue'
import Title from '@/components/atoms/Title.vue'
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'Recommend',
  components: {
    RecommendItems,
    Title,
    Button
  }
}
</script>

<style scoped>
  #recommend {
    width: 95%;
    margin: 0 auto;
    position: relative;
    background-color: white;
  }
</style>