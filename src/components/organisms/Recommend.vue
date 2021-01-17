<template>
  <div id="recommend">
    <Title title="Recommend" />
    <RecommendItems />
    <ArrowButton buttonName="MORE" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RecommendItems from '@/components/organisms/RecommendItems.vue'
import Title from '@/components/atoms/Title.vue'
import ArrowButton from '@/components/atoms/ArrowButton.vue'

export default Vue.extend({
  name: 'Recommend',

  components: {
    RecommendItems,
    Title,
    ArrowButton
  }
})
</script>

<style scoped>
  #recommend {
    width: 95%;
    margin: 0 auto;
    position: relative;
    background-color: white;
  }
</style>