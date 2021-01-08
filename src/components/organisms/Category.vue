<template>
  <div class="category">
    <Title title="CATEGORY"/>
    <CategoryItems />
  </div>
</template>

<script>
import Title from '@/components/atoms/Title.vue'
import CategoryItems from '@/components/molecs/CategoryItems.vue'
export default {
  name: 'Category',
  components: {
    Title,
    CategoryItems
  }
}
</script>

<style scoped>
  .category {
    position: relative;
    background-color: white;
    width: 95%;
    margin: 0 auto;
  }
</style>