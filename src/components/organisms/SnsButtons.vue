<template>
  <div id="sns-buttons">SNSボタンズ
    <SnsButton />
    <font-awesome-icon class="font-awesome" icon="arrow-up"></font-awesome-icon>
    <font-awesome-icon class="font-awesome" icon="twitter"></font-awesome-icon>
  </div>
</template>

<script>
import SnsButton from '@/components/atoms/SnsButton.vue'
export default {
  name: 'SnsButtons',
  components: {
    SnsButton
  }
}
</script>

<style scoped>

</style>