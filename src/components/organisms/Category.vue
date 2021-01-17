<template>
  <div id="category">
    <Title title="CATEGORY"/>
    <CategoryItems />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Title from '@/components/atoms/Title.vue'
import CategoryItems from '@/components/organisms/CategoryItems.vue'

export default Vue.extend({
  name: 'Category',

  components: {
    Title,
    CategoryItems
  }
})
</script>

<style scoped>
  #category {
    position: relative;
    background-color: white;
    width: 95%;
    margin: 0 auto;
  }
</style>