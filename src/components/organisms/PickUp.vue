<template>
  <div id="pick-up">
    <Title title="PICK UP" />
  </div>
</template>

<script>
import Title from '@/components/atoms/Title.vue'
export default {
  name: 'PickUp',
  components: {
    Title
  }
}
</script>

<style scoped>
  #pick-up {
    position: relative;
    background-color: white;
    width: 95%;
    margin: 0 auto;
  }
</style>