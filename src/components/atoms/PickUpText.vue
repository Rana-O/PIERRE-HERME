<template>
  <div class="pick-up-text">
    <p>{{ pickUpText }}</p>
    <a href="#">アイテム一覧へ</a>
  </div>
</template>

<script>
export default {
  name: 'PickUpText',
  props: [
    'pickUpText'
  ]
}
</script>

<style scoped>
  .pick-up-text {
    font-size: 14px;
    background-color: white;
    display: block;
    text-align: left;
  }
  .pick-up-text p {
    padding: 20px;
  }
  .pick-up-text a {
    color: black;
    padding: 20px;
  }
</style>