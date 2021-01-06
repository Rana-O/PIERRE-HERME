<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: [
    'title'
  ]
}
</script>

<style scoped>
  .title {
    font-size: 20px;
    margin: 100px 0 50px;
    padding-bottom: 10px;
    font-family: futura-pt,sans-serif;
    font-weight: 400;
    letter-spacing: 3px;
  }
  .title::after {
    content: "";
    position: absolute;
    width: 23px;
    margin: auto;
    top: 35px;
    left: 0;
    right: 0;
    border-bottom: 2px solid #333;
  }
</style>